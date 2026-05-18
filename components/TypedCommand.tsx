'use client';

import { useEffect, useRef, useState } from 'react';
import Prompt from './Prompt';

interface TypedCommandProps {
  command: string;
  prompt?: string;
  speed?: number;
  skip?: boolean;
  onDone?: () => void;
  children?: React.ReactNode;
}

export default function TypedCommand({
  command,
  prompt = '~',
  speed = 28,
  skip = false,
  onDone,
  children,
}: TypedCommandProps) {
  const [typed, setTyped] = useState<string>(skip ? command : '');
  const [doneTyping, setDoneTyping] = useState<boolean>(skip);
  const [showOutput, setShowOutput] = useState<boolean>(skip);
  const onDoneRef = useRef<(() => void) | undefined>(onDone);
  const completedKeyRef = useRef<string | null>(null);
  onDoneRef.current = onDone;

  useEffect(() => {
    let cancelled = false;
    let typingTimer: ReturnType<typeof setTimeout> | undefined;
    let outputTimer: ReturnType<typeof setTimeout> | undefined;
    const completionKey = `${command}:${skip ? 'skip' : 'type'}`;
    const finish = () => {
      if (completedKeyRef.current === completionKey) return;
      completedKeyRef.current = completionKey;
      onDoneRef.current?.();
    };

    if (skip) {
      setTyped(command);
      setDoneTyping(true);
      setShowOutput(true);
      finish();
      return;
    }
    let i = 0;
    setTyped('');
    setDoneTyping(false);
    setShowOutput(false);
    function step() {
      if (cancelled) return;
      i++;
      setTyped(command.slice(0, i));
      if (i >= command.length) {
        setDoneTyping(true);
        outputTimer = setTimeout(() => {
          if (cancelled) return;
          setShowOutput(true);
          finish();
        }, 260);
        return;
      }
      const jitter = speed * (0.7 + Math.random() * 0.6);
      typingTimer = setTimeout(step, jitter);
    }
    typingTimer = setTimeout(step, speed);
    return () => {
      cancelled = true;
      if (typingTimer) clearTimeout(typingTimer);
      if (outputTimer) clearTimeout(outputTimer);
    };
  }, [command, speed, skip]);

  return (
    <div className="cmd-block">
      <div className="cmd-line">
        <Prompt cwd={prompt} showBranch={false} />
        <span className="cmd-text">{typed}</span>
        {!skip && !doneTyping && <span className="cursor blink">▌</span>}
      </div>
      {showOutput && <div className="cmd-output">{children}</div>}
    </div>
  );
}
