import Link from "next/link";

const socials = [
  { label: "GitHub", href: "https://github.com/omkmorendha" },
  { label: "Twitter", href: "https://twitter.com/omkmorendha" },
  { label: "LinkedIn", href: "https://linkedin.com/in/omkmorendha" },
  { label: "Email", href: "mailto:omkmorendha@gmail.com" },
];

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        marginTop: "6rem",
      }}
    >
      <div
        style={{
          maxWidth: "860px",
          margin: "0 auto",
          padding: "2.5rem 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <p
          className="mono"
          style={{ fontSize: "0.7rem", color: "var(--ink-muted)", letterSpacing: "0.05em" }}
        >
          © {new Date().getFullYear()} Om Morendha
        </p>

        <nav style={{ display: "flex", gap: "1.75rem" }}>
          {socials.map((s) => (
            <Link
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="hover-underline"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.7rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--ink-muted)",
                textDecoration: "none",
                transition: "color 0.15s",
              }}
            >
              {s.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
