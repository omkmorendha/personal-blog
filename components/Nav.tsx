"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Writing" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header
      style={{
        borderBottom: "1px solid var(--border)",
        background: "var(--parchment)",
      }}
    >
      {/* Top strip */}
      <div
        style={{
          borderBottom: "1px solid var(--border)",
          padding: "6px 0",
          textAlign: "center",
        }}
      >
        <span
          className="mono"
          style={{
            fontSize: "0.6rem",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "var(--ink-muted)",
          }}
        >
          omkmorendha.com — software engineer
        </span>
      </div>

      {/* Main nav */}
      <div
        style={{
          maxWidth: "860px",
          margin: "0 auto",
          padding: "0 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "64px",
        }}
      >
        <Link
          href="/"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "1.25rem",
            fontWeight: 700,
            color: "var(--ink)",
            textDecoration: "none",
            letterSpacing: "-0.03em",
          }}
        >
          Om Morendha
        </Link>

        <nav style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          {links.slice(1).map((link) => {
            const active = pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                className="hover-underline"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.75rem",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  color: active ? "var(--red)" : "var(--ink-light)",
                  textDecoration: "none",
                  transition: "color 0.15s",
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
