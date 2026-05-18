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
  onDoneRef.current = onDone;

  useEffect(() => {
    if (skip) {
      setTyped(command);
      setDoneTyping(true);
      setShowOutput(true);
      onDoneRef.current?.();
      return;
    }
    let cancelled = false;
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
        const t = setTimeout(() => {
          if (cancelled) return;
          setShowOutput(true);
          onDoneRef.current?.();
        }, 260);
        return () => clearTimeout(t);
      }
      const jitter = speed * (0.7 + Math.random() * 0.6);
      setTimeout(step, jitter);
    }
    const start = setTimeout(step, speed);
    return () => {
      cancelled = true;
      clearTimeout(start);
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
