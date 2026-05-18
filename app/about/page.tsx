import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "A little about Om Morendha — software engineer.",
};

export default function AboutPage() {
  return (
    <div style={{ maxWidth: "860px", margin: "0 auto", padding: "0 2rem" }}>
      <section style={{ padding: "4rem 0 2rem" }}>
        <p
          className="mono fade-up fade-up-1"
          style={{
            fontSize: "0.7rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--ink-muted)",
            marginBottom: "1rem",
          }}
        >
          About
        </p>

        <h1
          className="fade-up fade-up-2"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(2.5rem, 6vw, 4rem)",
            fontWeight: 900,
            letterSpacing: "-0.04em",
            lineHeight: 1.05,
            marginBottom: "3rem",
          }}
        >
          A little about me.
        </h1>
      </section>

      <div
        className="rule fade-up fade-up-2"
        style={{ marginBottom: "3rem" }}
      />

      <div
        className="fade-up fade-up-3"
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "4rem",
          paddingBottom: "5rem",
          alignItems: "start",
        }}
      >
        {/* Bio */}
        <div>
          <p
            style={{
              fontSize: "1.125rem",
              lineHeight: 1.85,
              color: "var(--ink-light)",
              marginBottom: "1.5rem",
            }}
          >
            Hi, I&apos;m Om — a software engineer who cares deeply about building
            systems that are correct, fast, and understandable. I&apos;m drawn to
            problems at the intersection of distributed systems, developer tooling,
            and the craft of writing good software.
          </p>
          <p
            style={{
              fontSize: "1.125rem",
              lineHeight: 1.85,
              color: "var(--ink-light)",
              marginBottom: "1.5rem",
            }}
          >
            Outside of code, I think carefully about how ideas are communicated —
            which is why I write. Clear writing and clear code share the same
            underlying skill: ruthless removal of the unnecessary.
          </p>
          <p
            style={{
              fontSize: "1.125rem",
              lineHeight: 1.85,
              color: "var(--ink-light)",
            }}
          >
            I&apos;m currently based in India. If you want to talk about an interesting
            problem, a collaboration, or just exchange ideas —{" "}
            <Link href="mailto:omkmorendha@gmail.com" className="prose-link">
              reach out
            </Link>
            .
          </p>
        </div>

        {/* Sidebar */}
        <aside>
          <div style={{ marginBottom: "2.5rem" }}>
            <h2
              className="mono"
              style={{
                fontSize: "0.65rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--ink-muted)",
                marginBottom: "1rem",
                borderBottom: "1px solid var(--border)",
                paddingBottom: "0.5rem",
              }}
            >
              Currently
            </h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                "Building personal projects",
                "Reading about distributed systems",
                "Writing more, thinking clearer",
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--ink-light)",
                    padding: "0.4rem 0",
                    borderBottom: "1px solid var(--border)",
                    lineHeight: 1.5,
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div style={{ marginBottom: "2.5rem" }}>
            <h2
              className="mono"
              style={{
                fontSize: "0.65rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--ink-muted)",
                marginBottom: "1rem",
                borderBottom: "1px solid var(--border)",
                paddingBottom: "0.5rem",
              }}
            >
              Interests
            </h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                "Distributed Systems",
                "Developer Tooling",
                "Language Design",
                "Technical Writing",
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--ink-light)",
                    padding: "0.4rem 0",
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2
              className="mono"
              style={{
                fontSize: "0.65rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--ink-muted)",
                marginBottom: "1rem",
                borderBottom: "1px solid var(--border)",
                paddingBottom: "0.5rem",
              }}
            >
              Links
            </h2>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                { label: "GitHub", href: "https://github.com/omkmorendha" },
                { label: "Twitter", href: "https://twitter.com/omkmorendha" },
                { label: "LinkedIn", href: "https://linkedin.com/in/omkmorendha" },
                { label: "Email", href: "mailto:omkmorendha@gmail.com" },
              ].map((link) => (
                <li key={link.label} style={{ padding: "0.4rem 0", borderBottom: "1px solid var(--border)" }}>
                  <Link
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="hover-underline"
                    style={{
                      fontSize: "0.9rem",
                      color: "var(--red)",
                      textDecoration: "none",
                    }}
                  >
                    {link.label} →
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
