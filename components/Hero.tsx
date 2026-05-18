"use client";

import { useState } from "react";
import Link from "next/link";
import Prompt from "./Prompt";
import TypedCommand from "./TypedCommand";
import type { PostMeta } from "@/lib/posts";

function WhoamiOutput() {
  return (
    <div className="whoami-banner">
      <pre className="ascii-name">
{`   ____              __  __                          _ _
  / __ \\            |  \\/  |                        | | |
 | |  | |_ __ ___   | \\  / | ___  _ __ ___ _ __   __| | |__   __ _
 | |  | | '_ \` _ \\  | |\\/| |/ _ \\| '__/ _ \\ '_ \\ / _\` | '_ \\ / _\` |
 | |__| | | | | | | | |  | | (_) | | |  __/ | | | (_| | | | | (_| |
  \\____/|_| |_| |_| |_|  |_|\\___/|_|  \\___|_| |_|\\__,_|_| |_|\\__,_|`}
      </pre>
      <div className="banner-meta">
        <span>
          <span className="tok-meta">user.</span>
          <span className="tok-key">role</span>{" "}
          {"     = "}
          <span className="tok-string">&quot;AI Innovation Specialist @ Trilogy&quot;</span>
        </span>
        <span>
          <span className="tok-meta">user.</span>
          <span className="tok-key">focus</span>
          {"    = ["}
          <span className="tok-string">&quot;agent-infra&quot;</span>{", "}
          <span className="tok-string">&quot;mcp&quot;</span>{", "}
          <span className="tok-string">&quot;data-engineering&quot;</span>{", "}
          <span className="tok-string">&quot;applied-llms&quot;</span>
          {"]"}
        </span>
        <span>
          <span className="tok-meta">user.</span>
          <span className="tok-key">stack</span>
          {"    = ["}
          <span className="tok-string">&quot;python&quot;</span>{", "}
          <span className="tok-string">&quot;aws&quot;</span>{", "}
          <span className="tok-string">&quot;postgres&quot;</span>{", "}
          <span className="tok-string">&quot;langchain&quot;</span>{", "}
          <span className="tok-string">&quot;anthropic&quot;</span>
          {"]"}
        </span>
        <span>
          <span className="tok-meta">user.</span>
          <span className="tok-key">location</span>
          {" = "}
          <span className="tok-string">&quot;India&quot;</span>{" "}
          <span className="tok-comment">// remote · UTC+5:30</span>
        </span>
        <span>
          <span className="tok-meta">user.</span>
          <span className="tok-key">status</span>
          {"   = "}
          <span className="tok-accent">● online</span>{" "}
          <span className="tok-comment">// building agents that ship work</span>
        </span>
      </div>
    </div>
  );
}

function CatAbout() {
  return (
    <div className="cat-output">
      <div className="cat-head">
        <span className="tok-meta">────────────────── ~/about.md ──────────────────</span>
      </div>
      <p>
        Hi, I&apos;m <span className="tok-accent">Om</span> — an AI engineer who builds the
        plumbing that lets LLM agents do <em>real work</em> against <em>real data</em>.
      </p>
      <p>
        At <span className="tok-accent">Trilogy (ESW Capital)</span> I shipped a company-wide
        MCP server (OAuth2 + RBAC) that lets 50+ employees point AI agents at NetSuite, Redshift,
        and internal APIs; re-engineered a 500-table warehouse into Kimball-style dimensional models
        so LLMs can query it without hallucinating; and built <span className="tok-accent">Budget Bot</span>{" "}
        — an agent that automated quarterly financial planning across 30+ portfolio companies of a $3B+ AUM PE firm.
      </p>
      <p>
        Before that I led an algorithmic trading platform at{" "}
        <span className="tok-accent">Cognyx AI</span> — Django + Postgres + Redis + WebSockets,
        parallel copy-trading across 100+ concurrent users, backtesting against 5+ years of market data.
      </p>
      <p>
        I&apos;m interested in <em>agent infrastructure</em>, <em>data modeling for LLMs</em>, and
        the craft of making AI systems reliable enough to trust with money and decisions. I write to
        think clearly about all of it.
      </p>
      <p className="tok-meta">// EOF — 4 paragraphs</p>
    </div>
  );
}

function PostsLs({ posts }: { posts: PostMeta[] }) {
  if (posts.length === 0) {
    return (
      <div className="ls-output">
        <div className="ls-totals">total 0</div>
        <div style={{ color: "var(--fg-dim)" }}>
          <span className="tok-meta">// no posts yet — `vim posts/hello-world.md`</span>
        </div>
      </div>
    );
  }
  return (
    <div className="ls-output">
      <div className="ls-totals">total {posts.length * 8}</div>
      {posts.map((p) => (
        <Link key={p.slug} href={`/blog/${p.slug}`} className="ls-row">
          <span className="ls-perms">-rw-r--r--</span>
          <span className="ls-owner">om staff</span>
          <span className="ls-size">{(p.readingTime || "—").replace(" min read", "K")}</span>
          <span className="ls-date">{p.date}</span>
          <span className="ls-name">
            <span className="ls-title">{p.title}</span>
            <span className="ls-ext">.md</span>
            <span className="ls-tags">
              {p.tags?.map((t) => (
                <span key={t} className="ls-tag"># {t}</span>
              ))}
            </span>
          </span>
          <span className="ls-desc">{p.description}</span>
        </Link>
      ))}
    </div>
  );
}

export default function Hero({ posts }: { posts: PostMeta[] }) {
  const [step, setStep] = useState(0);
  const next = () => setStep((s) => s + 1);

  return (
    <div className="hero">
      <div className="hero-heading">
        <Prompt cwd="~" branch="main" big />
        <span className="hero-cmd">whoami</span>
        <span className="cursor hero-cursor blink">█</span>
      </div>

      <div className="hero-tagline">
        <span className="tok-comment">
          // returns the currently logged-in user — interactively
        </span>
      </div>

      <div className="hero-body">
        <TypedCommand command="whoami" prompt="~" speed={28} skip onDone={next}>
          <WhoamiOutput />
        </TypedCommand>

        {step >= 1 && (
          <TypedCommand command="cat ~/about.md" prompt="~" speed={28} onDone={next}>
            <CatAbout />
          </TypedCommand>
        )}

        {step >= 2 && (
          <TypedCommand
            command="ls -la posts/ | head -4"
            prompt="~"
            speed={28}
            onDone={next}
          >
            <PostsLs posts={posts.slice(0, 4)} />
          </TypedCommand>
        )}

        {step >= 3 && (
          <div className="hero-actions">
            <span className="tok-comment">// keep exploring →</span>
            <div className="chips">
              <Link href="/blog" className="chip">
                <span className="chip-prompt">$</span> tail -f writing.log
              </Link>
              <Link href="/projects" className="chip">
                <span className="chip-prompt">$</span> git log --oneline
              </Link>
              <Link href="/about" className="chip">
                <span className="chip-prompt">$</span> man om
              </Link>
              <Link href="/contact" className="chip">
                <span className="chip-prompt">$</span> curl /api/contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
