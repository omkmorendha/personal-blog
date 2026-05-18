'use client';

import { useState } from 'react';

export default function ContactCopy({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  function copy() {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(email);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1400);
  }

  return (
    <button type="button" onClick={copy} className={'copy-btn ' + (copied ? 'ok' : '')}>
      <span className="copy-icon">{copied ? '✓' : '⌘'}</span>
      <span>{copied ? 'copied to clipboard' : email}</span>
      <span className="copy-hint">{copied ? '' : 'click to copy'}</span>
    </button>
  );
}
