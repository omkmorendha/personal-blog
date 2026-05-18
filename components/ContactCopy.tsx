'use client';

import { useEffect, useRef, useState } from 'react';

export default function ContactCopy({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);
  const resetTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (resetTimerRef.current) clearTimeout(resetTimerRef.current);
    };
  }, []);

  async function copy() {
    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard) {
        await navigator.clipboard.writeText(email);
      }
      setCopied(true);
      if (resetTimerRef.current) clearTimeout(resetTimerRef.current);
      resetTimerRef.current = setTimeout(() => setCopied(false), 1400);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button type="button" onClick={copy} className={'copy-btn ' + (copied ? 'ok' : '')}>
      <span className="copy-icon">{copied ? '✓' : '⌘'}</span>
      <span>{copied ? 'copied to clipboard' : email}</span>
      <span className="copy-hint">{copied ? '' : 'click to copy'}</span>
    </button>
  );
}
