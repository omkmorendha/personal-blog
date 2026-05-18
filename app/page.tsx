import Link from "next/link";
import { getRecentPosts, PostMeta } from "@/lib/posts";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  const recentPosts: PostMeta[] = getRecentPosts(3);

  const teaserProjects = [
    {
      name: "Project Alpha",
      desc: "A short description of what this project does and why it matters.",
      href: "/projects",
    },
    {
      name: "Project Beta",
      desc: "Another interesting project with a concise description here.",
      href: "/projects",
    },
    {
      name: "See all →",
      desc: "Browse the full list of things I've built.",
      href: "/projects",
    },
  ];

  return (
    <div
      style={{
        maxWidth: "860px",
        margin: "0 auto",
        padding: "0 2rem",
      }}
    >
      {/* Hero */}
      <section style={{ padding: "5rem 0 4rem" }}>
        <div className="fade-up fade-up-1">
          <p
            className="mono"
            style={{
              fontSize: "0.7rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--ink-muted)",
              marginBottom: "1.5rem",
            }}
          >
            Software Engineer
          </p>
        </div>

        <h1
          className="fade-up fade-up-2"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(3rem, 8vw, 5.5rem)",
            fontWeight: 900,
            lineHeight: 1.0,
            letterSpacing: "-0.04em",
            color: "var(--ink)",
            marginBottom: "2rem",
          }}
        >
          Om
          <br />
          <span style={{ color: "var(--red)", fontStyle: "italic" }}>Morendha.</span>
        </h1>

        <div className="fade-up fade-up-3" style={{ maxWidth: "520px" }}>
          <p
            style={{
              fontSize: "1.125rem",
              lineHeight: 1.8,
              color: "var(--ink-light)",
              marginBottom: "2rem",
            }}
          >
            I build software and write about the ideas behind it. Currently
            interested in distributed systems, developer tooling, and the
            intersection of engineering with clear thinking.
          </p>

          <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
            <Link
              href="/about"
              style={{
                display: "inline-block",
                background: "var(--ink)",
                color: "var(--parchment)",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.75rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "0.75rem 1.5rem",
                textDecoration: "none",
              }}
            >
              About me
            </Link>
            <Link
              href="/blog"
              className="hover-underline"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.75rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--red)",
                textDecoration: "none",
              }}
            >
              Read writing →
            </Link>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="rule fade-up fade-up-4">Recent writing</div>

      {/* Recent posts */}
      <section style={{ padding: "3rem 0" }} className="fade-up fade-up-5">
        {recentPosts.length === 0 ? (
          <p style={{ color: "var(--ink-muted)", fontStyle: "italic" }}>
            No posts yet — check back soon.
          </p>
        ) : (
          <div>
            {recentPosts.map((post, i) => (
              <article
                key={post.slug}
                style={{
                  borderBottom:
                    i < recentPosts.length - 1 ? "1px solid var(--border)" : "none",
                  padding: "2rem 0",
                  display: "grid",
                  gridTemplateColumns: "1fr auto",
                  gap: "1rem",
                  alignItems: "start",
                }}
              >
                <div>
                  <Link
                    href={`/blog/${post.slug}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <h2
                      className="hover-underline"
                      style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                        fontSize: "1.4rem",
                        fontWeight: 700,
                        letterSpacing: "-0.02em",
                        marginBottom: "0.5rem",
                        color: "var(--ink)",
                        display: "inline-block",
                      }}
                    >
                      {post.title}
                    </h2>
                  </Link>
                  <p
                    style={{
                      color: "var(--ink-muted)",
                      fontSize: "0.9375rem",
                      lineHeight: 1.6,
                    }}
                  >
                    {post.description}
                  </p>
                </div>
                <time
                  className="mono"
                  style={{
                    fontSize: "0.7rem",
                    letterSpacing: "0.05em",
                    color: "var(--ink-muted)",
                    whiteSpace: "nowrap",
                    marginTop: "0.35rem",
                  }}
                >
                  {post.date}
                </time>
              </article>
            ))}
          </div>
        )}

        <div style={{ marginTop: "2rem" }}>
          <Link
            href="/blog"
            className="hover-underline"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.75rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--ink-muted)",
              textDecoration: "none",
            }}
          >
            All posts →
          </Link>
        </div>
      </section>

      {/* Projects teaser */}
      <div className="rule" style={{ marginBottom: "3rem" }}>
        Projects
      </div>

      <section
        style={{
          padding: "0 0 5rem",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {teaserProjects.map((p) => (
          <ProjectCard key={p.name} name={p.name} desc={p.desc} href={p.href} />
        ))}
      </section>
    </div>
  );
}
