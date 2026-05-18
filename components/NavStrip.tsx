"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const ROUTES = [
  { href: "/", label: "~/index.sh" },
  { href: "/blog", label: "~/writing/" },
  { href: "/projects", label: "~/projects/" },
  { href: "/about", label: "~/about.md" },
  { href: "/contact", label: "~/contact.json" },
];

export default function NavStrip() {
  const pathname = usePathname();

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  }

  return (
    <div className="nav-strip">
      {ROUTES.map((r) => (
        <Link
          key={r.href}
          href={r.href}
          className={"nav-tab " + (isActive(r.href) ? "active" : "")}
        >
          <span className="glyph">▸</span>
          <span>{r.label}</span>
        </Link>
      ))}
      <div className="nav-spacer" />
      <div className="nav-meta">
        <span className="led" />
        <span>UTC+5:30</span>
        <span>·</span>
        <span>~/personal-blog</span>
      </div>
    </div>
  );
}
