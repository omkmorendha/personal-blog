"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const LABELS: Record<string, string> = {
  "/": "~/index.sh",
  "/blog": "~/writing/",
  "/projects": "~/projects/",
  "/about": "~/about.md",
  "/contact": "~/contact.json",
};

function labelFor(pathname: string) {
  if (LABELS[pathname]) return LABELS[pathname];
  for (const key of Object.keys(LABELS)) {
    if (key !== "/" && pathname.startsWith(key + "/")) return LABELS[key];
  }
  return "~";
}

export default function StatusLine() {
  const pathname = usePathname();
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    function tick() {
      setTime(
        new Date().toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    }
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="status-line">
      <span className="status-mode">NORMAL</span>
      <span className="status-seg">main</span>
      <span className="status-seg dim">{labelFor(pathname)}</span>
      <span className="status-spacer" />
      <span className="status-seg dim hide-mobile">utf-8</span>
      <span className="status-seg dim hide-mobile">unix</span>
      <span className="status-seg">{time || "--:--"}</span>
      <span className="status-right hide-mobile">1,1 All</span>
    </div>
  );
}
