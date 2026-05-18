import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';
import RouteHeading from '@/components/RouteHeading';
import Prompt from '@/components/Prompt';

export const metadata: Metadata = {
  title: 'tail -f writing.log',
  description: 'Essays and notes on software, systems, and AI agents.',
};

function approxWords(reading?: string): string {
  if (!reading) return '—';
  const m = reading.match(/(\d+)/);
  if (!m) return '—';
  const min = parseInt(m[1], 10);
  return `${min * 200}w`;
}

export default function BlogPage() {
  const posts = getAllPosts();
  const totalWords = posts.reduce((sum, p) => {
    const m = p.readingTime?.match(/(\d+)/);
    return sum + (m ? parseInt(m[1], 10) * 200 : 0);
  }, 0);
  const avgMin =
    posts.length === 0
      ? 0
      : posts.reduce((s, p) => {
          const m = p.readingTime?.match(/(\d+)/);
          return s + (m ? parseInt(m[1], 10) : 0);
        }, 0) / posts.length;

  return (
    <div className="route">
      <RouteHeading
        cwd="~/writing"
        command="tail -f writing.log"
        tagline="// stream of essays and notes — most recent first"
      />
      <div className="hero-body">
        {/* ls -la posts */}
        <div className="cmd-block">
          <div className="cmd-line">
            <Prompt cwd="~/writing" showBranch={false} />
            <span className="cmd-text">cd ~/writing && ls -la *.md</span>
          </div>
          <div className="cmd-output">
            {posts.length === 0 ? (
              <div className="ls-output">
                <div className="ls-totals">total 0</div>
                <div style={{ color: 'var(--fg-dim)' }}>
                  <span className="tok-meta">// ls: no posts in this directory yet</span>
                </div>
              </div>
            ) : (
              <div className="ls-output">
                <div className="ls-totals">total {posts.length * 8}</div>
                {posts.map((p) => (
                  <Link key={p.slug} href={`/blog/${p.slug}`} className="ls-row">
                    <span className="ls-perms">-rw-r--r--</span>
                    <span className="ls-owner">om staff</span>
                    <span className="ls-size">{approxWords(p.readingTime)}</span>
                    <span className="ls-date">{p.date}</span>
                    <span className="ls-name">
                      <span className="ls-title">{p.title}</span>
                      <span className="ls-ext">.md</span>
                      <span className="ls-tags">
                        {p.tags?.map((t) => (
                          <span key={t} className="ls-tag">
                            # {t}
                          </span>
                        ))}
                      </span>
                    </span>
                    <span className="ls-desc">{p.description}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* stats */}
        <div className="cmd-block">
          <div className="cmd-line">
            <Prompt cwd="~/writing" showBranch={false} />
            <span className="cmd-text">echo $POSTS_PER_YEAR</span>
          </div>
          <div className="cmd-output">
            <div className="stats-grid">
              <div className="stat">
                <span className="stat-num">{posts.length}</span>
                <span className="stat-lbl">posts shipped</span>
              </div>
              <div className="stat">
                <span className="stat-num">
                  {totalWords >= 1000 ? `${(totalWords / 1000).toFixed(1)}K` : totalWords}
                </span>
                <span className="stat-lbl">words written</span>
              </div>
              <div className="stat">
                <span className="stat-num">{avgMin > 0 ? avgMin.toFixed(1) : '—'}</span>
                <span className="stat-lbl">min avg read</span>
              </div>
              <div className="stat">
                <span className="stat-num">∞</span>
                <span className="stat-lbl">drafts left</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
