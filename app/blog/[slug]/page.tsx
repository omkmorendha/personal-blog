import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getAllPosts, getPostMeta, loadPostComponent } from '@/lib/posts';
import Prompt from '@/components/Prompt';

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamic = 'force-static';
export const dynamicParams = false;

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostMeta(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostMeta(slug);
  if (!post) notFound();

  const PostBody = await loadPostComponent(slug);
  if (!PostBody) notFound();

  return (
    <div className="route">
      <div className="route-heading">
        <Prompt cwd="~/writing" branch="main" big />
        <span className="hero-cmd">cat {post.slug}.md</span>
        <span className="cursor hero-cursor blink">█</span>
      </div>
      <div className="hero-tagline">
        <span className="tok-comment">
          //{' '}
          <Link href="/blog" className="link-inline">
            cd ..
          </Link>{' '}
          · {post.date} · {post.readingTime}
        </span>
      </div>

      <div className="hero-body">
        <div className="cmd-block">
          <div className="cmd-line">
            <Prompt cwd="~/writing" showBranch={false} />
            <span className="cmd-text">cat {post.slug}.md</span>
          </div>
          <div className="cmd-output">
            <div className="cat-head" style={{ marginBottom: 16 }}>
              <span className="tok-meta">────────────────── {post.slug}.md ──────────────────</span>
            </div>

            <h1
              style={{
                color: 'var(--accent)',
                fontSize: '1.75rem',
                margin: '0 0 0.5rem',
                letterSpacing: 0,
                fontWeight: 700,
              }}
            >
              # {post.title}
            </h1>

            {post.tags && post.tags.length > 0 && (
              <div
                style={{
                  display: 'flex',
                  gap: 8,
                  flexWrap: 'wrap',
                  marginBottom: 24,
                }}
              >
                {post.tags.map((t) => (
                  <span key={t} className="ls-tag">
                    # {t}
                  </span>
                ))}
              </div>
            )}

            <article className="mdx-content">
              <PostBody />
            </article>

            <div style={{ marginTop: 32 }} className="cmd-note">
              <span className="tok-meta">// EOF</span> ·{' '}
              <Link href="/blog" className="link-inline">
                ← back to ~/writing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
