import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPost } from "@/lib/posts";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <div style={{ maxWidth: "860px", margin: "0 auto", padding: "0 2rem" }}>
      {/* Back link */}
      <div style={{ padding: "2.5rem 0 0" }}>
        <Link
          href="/blog"
          className="mono hover-underline"
          style={{
            fontSize: "0.7rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--ink-muted)",
            textDecoration: "none",
          }}
        >
          ← Writing
        </Link>
      </div>

      {/* Header */}
      <header style={{ padding: "3rem 0 2.5rem" }}>
        <div style={{ display: "flex", gap: "0.75rem", marginBottom: "1rem", flexWrap: "wrap" }}>
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
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <h1
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 900,
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            marginBottom: "1.5rem",
            color: "var(--ink)",
          }}
        >
          {post.title}
        </h1>

        <div
          className="mono"
          style={{
            display: "flex",
            gap: "2rem",
            color: "var(--ink-muted)",
            fontSize: "0.7rem",
            letterSpacing: "0.08em",
          }}
        >
          <time>{post.date}</time>
          <span>{post.readingTime}</span>
        </div>
      </header>

      <div
        className="rule"
        style={{ marginBottom: "3rem", borderTop: "2px solid var(--ink)", paddingTop: "0" }}
      />

      {/* Content */}
      <article className="mdx-content" style={{ maxWidth: "680px", paddingBottom: "5rem" }}>
        <MDXRemote source={post.content} />
      </article>
    </div>
  );
}
