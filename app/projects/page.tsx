import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects",
  description: "Things Om Morendha has built.",
};

const projects = [
  {
    name: "Project Name",
    description:
      "A detailed description of this project — what it does, why you built it, what technologies you used.",
    tags: ["TypeScript", "Next.js"],
    href: "https://github.com/omkmorendha",
    status: "Active",
  },
  {
    name: "Another Project",
    description:
      "Replace this with your actual project. Explain the problem it solves and what was interesting about building it.",
    tags: ["Go", "Distributed Systems"],
    href: "https://github.com/omkmorendha",
    status: "Completed",
  },
  {
    name: "Open Source Contribution",
    description:
      "Description of an open source project you contributed to, or another personal project you want to highlight here.",
    tags: ["Rust", "CLI"],
    href: "https://github.com/omkmorendha",
    status: "Archived",
  },
];

const statusColor: Record<string, string> = {
  Active: "#2d8a4e",
  Completed: "var(--ink-muted)",
  Archived: "var(--border-dark)",
};

export default function ProjectsPage() {
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
          Projects
        </p>
        <h1
          className="fade-up fade-up-2"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(2.5rem, 6vw, 4rem)",
            fontWeight: 900,
            letterSpacing: "-0.04em",
            lineHeight: 1.05,
            marginBottom: "1rem",
          }}
        >
          Things I&apos;ve built.
        </h1>
        <p
          className="fade-up fade-up-3"
          style={{ color: "var(--ink-muted)", maxWidth: "480px", fontSize: "1rem" }}
        >
          A selection of projects — both personal and professional. Source code
          available on{" "}
          <Link href="https://github.com/omkmorendha" className="prose-link" target="_blank" rel="noopener noreferrer">
            GitHub
          </Link>
          .
        </p>
      </section>

      <div className="rule fade-up fade-up-3" style={{ marginBottom: "0" }} />

      <section className="fade-up fade-up-4" style={{ paddingBottom: "5rem" }}>
        {projects.map((project) => (
          <article
            key={project.name}
            style={{
              borderBottom: "1px solid var(--border)",
              padding: "2.5rem 0",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: "1rem",
                marginBottom: "0.75rem",
                flexWrap: "wrap",
              }}
            >
              <div style={{ display: "flex", gap: "1rem", alignItems: "center", flexWrap: "wrap" }}>
                <Link
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <h2
                    className="hover-underline"
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontSize: "1.4rem",
                      fontWeight: 700,
                      letterSpacing: "-0.02em",
                      color: "var(--ink)",
                      display: "inline-block",
                    }}
                  >
                    {project.name}
                  </h2>
                </Link>
                <span
                  className="mono"
                  style={{
                    fontSize: "0.6rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: statusColor[project.status] ?? "var(--ink-muted)",
                  }}
                >
                  ● {project.status}
                </span>
              </div>

              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="mono"
                    style={{
                      fontSize: "0.6rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--ink-muted)",
                      border: "1px solid var(--border)",
                      padding: "2px 8px",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <p
              style={{
                color: "var(--ink-muted)",
                fontSize: "0.9375rem",
                lineHeight: 1.7,
                maxWidth: "600px",
              }}
            >
              {project.description}
            </p>

            <div style={{ marginTop: "1.25rem" }}>
              <Link
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover-underline"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.7rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--red)",
                  textDecoration: "none",
                }}
              >
                View on GitHub →
              </Link>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
