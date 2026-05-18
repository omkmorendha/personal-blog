import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Writing",
  description: "Essays and notes on software, systems, and thinking.",
};

export default function BlogPage() {
  const posts = getAllPosts();

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
          Writing
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
          Essays &amp; notes.
        </h1>
        <p
          className="fade-up fade-up-3"
          style={{ color: "var(--ink-muted)", maxWidth: "480px", fontSize: "1rem" }}
        >
          Thoughts on software engineering, distributed systems, and whatever
          I&apos;m currently learning.
        </p>
      </section>

      <div className="rule fade-up fade-up-3" style={{ marginBottom: "0" }}>
        {posts.length} {posts.length === 1 ? "post" : "posts"}
      </div>

      <section className="fade-up fade-up-4" style={{ paddingBottom: "5rem" }}>
        {posts.length === 0 ? (
          <p
            style={{
              color: "var(--ink-muted)",
              fontStyle: "italic",
              padding: "3rem 0",
              textAlign: "center",
            }}
          >
            No posts yet. Coming soon.
          </p>
        ) : (
          posts.map((post) => (
            <article
              key={post.slug}
              style={{
                borderBottom: "1px solid var(--border)",
                padding: "2.25rem 0",
                display: "grid",
                gridTemplateColumns: "1fr auto",
                gap: "2rem",
                alignItems: "start",
              }}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "center",
                    marginBottom: "0.6rem",
                  }}
                >
                  {post.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="mono"
                      style={{
                        fontSize: "0.6rem",
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        color: "var(--red)",
                        border: "1px solid var(--red)",
                        padding: "2px 8px",
                        borderRadius: "1px",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
                  <h2
                    className="hover-underline"
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontSize: "1.5rem",
                      fontWeight: 700,
                      letterSpacing: "-0.02em",
                      marginBottom: "0.5rem",
                      color: "var(--ink)",
                      display: "inline-block",
                      lineHeight: 1.2,
                    }}
                  >
                    {post.title}
                  </h2>
                </Link>

                <p style={{ color: "var(--ink-muted)", fontSize: "0.9375rem", lineHeight: 1.6 }}>
                  {post.description}
                </p>
              </div>

              <div style={{ textAlign: "right", flexShrink: 0 }}>
                <time
                  className="mono"
                  style={{
                    display: "block",
                    fontSize: "0.7rem",
                    letterSpacing: "0.05em",
                    color: "var(--ink-muted)",
                    marginBottom: "0.25rem",
                  }}
                >
                  {post.date}
                </time>
                <span
                  className="mono"
                  style={{ fontSize: "0.65rem", color: "var(--border-dark)" }}
                >
                  {post.readingTime}
                </span>
              </div>
            </article>
          ))
        )}
      </section>
    </div>
  );
}
