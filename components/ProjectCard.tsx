"use client";

import Link from "next/link";

interface ProjectCardProps {
  name: string;
  desc: string;
  href: string;
}

export default function ProjectCard({ name, desc, href }: ProjectCardProps) {
  return (
    <Link
      href={href}
      style={{
        display: "block",
        border: "1px solid var(--border)",
        padding: "1.5rem",
        textDecoration: "none",
        color: "inherit",
        transition: "border-color 0.15s, background 0.15s",
        background: "transparent",
      }}
      onMouseOver={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--ink)";
        (e.currentTarget as HTMLElement).style.background = "var(--parchment-dark)";
      }}
      onMouseOut={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
        (e.currentTarget as HTMLElement).style.background = "transparent";
      }}
    >
      <h3
        style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "1.05rem",
          fontWeight: 700,
          marginBottom: "0.5rem",
          color: "var(--ink)",
        }}
      >
        {name}
      </h3>
      <p style={{ fontSize: "0.875rem", color: "var(--ink-muted)", lineHeight: 1.6 }}>
        {desc}
      </p>
    </Link>
  );
}
