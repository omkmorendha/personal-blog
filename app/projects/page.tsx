import type { Metadata } from 'next';
import Link from 'next/link';
import RouteHeading from '@/components/RouteHeading';
import Prompt from '@/components/Prompt';

export const metadata: Metadata = {
  title: 'git log --oneline',
  description: 'Things Om Morendha has built — AI agent infra, data, and tooling.',
};

type Status = 'active' | 'maintenance' | 'archived';

interface Project {
  name: string;
  description: string;
  tags: string[];
  href: string;
  lang: string;
  status: Status;
  commit: string;
}

const PROJECTS: Project[] = [
  {
    name: 'trilogy-mcp',
    description:
      'Company-wide MCP server (OAuth2 + RBAC) connecting AI agents to NetSuite, Redshift, and internal APIs for 50+ employees.',
    tags: ['mcp', 'oauth2', 'rbac', 'fastapi'],
    href: 'https://github.com/omkmorendha',
    lang: 'python',
    status: 'active',
    commit: 'f2a91e0',
  },
  {
    name: 'budget-bot',
    description:
      'Agent that automates quarterly financial planning across 30+ portfolio companies of a $3B+ AUM PE firm. Cut manual line-item generation by 80%.',
    tags: ['llm-agents', 'finance', 'langchain'],
    href: 'https://github.com/omkmorendha',
    lang: 'python',
    status: 'active',
    commit: 'ab30c47',
  },
  {
    name: 'warehouse-kimball',
    description:
      'Re-engineered 500+ unstructured tables into Kimball star/snowflake schemas so LLMs can query the warehouse without hallucinating.',
    tags: ['data-engineering', 'redshift', 'dbt'],
    href: 'https://github.com/omkmorendha',
    lang: 'python',
    status: 'active',
    commit: 'c8e1102',
  },
  {
    name: 'cognyx-trading',
    description:
      'Algorithmic copy-trading platform — Django + Postgres + Redis + WebSockets. 100+ concurrent users, 5+ years of backtesting data, 12 microservices on AWS at 99.5% uptime.',
    tags: ['django', 'postgres', 'redis', 'aws'],
    href: 'https://github.com/omkmorendha',
    lang: 'python',
    status: 'archived',
    commit: '1f72d8a',
  },
];

function langClass(lang: string) {
  const key = lang.toLowerCase();
  const known = ['python', 'go', 'rust', 'typescript', 'javascript'];
  return known.includes(key) ? `lang-${key}` : 'lang-default';
}

export default function ProjectsPage() {
  return (
    <div className="route">
      <RouteHeading
        cwd="~/projects"
        command="git log --oneline --all"
        tagline="// things I've built — most are open source"
      />
      <div className="hero-body">
        <div className="cmd-block">
          <div className="cmd-line">
            <Prompt cwd="~/projects" showBranch={false} />
            <span className="cmd-text">git log --oneline --decorate --all</span>
          </div>
          <div className="cmd-output">
            <div className="git-output">
              {PROJECTS.map((p, i) => (
                <Link
                  key={p.name}
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="git-row"
                >
                  <span className="git-graph">
                    <span className="git-dot" />
                    {i < PROJECTS.length - 1 && <span className="git-line" />}
                  </span>
                  <div className="git-body">
                    <div className="git-head-row">
                      <span className="git-hash">{p.commit}</span>
                      <span className="git-ref">
                        (<span className="tok-accent">HEAD →</span>{' '}
                        <span className="tok-string">{p.name}</span>)
                      </span>
                      <span className={`git-status status-${p.status}`}>● {p.status}</span>
                    </div>
                    <div className="git-desc">{p.description}</div>
                    <div className="git-foot-row">
                      <span className="git-lang">
                        <span className={`lang-dot ${langClass(p.lang)}`} /> {p.lang}
                      </span>
                      {p.tags.map((t) => (
                        <span key={t} className="git-tag">
                          {t}
                        </span>
                      ))}
                      <span className="git-cta">→ git clone</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="cmd-block">
          <div className="cmd-line">
            <Prompt cwd="~/projects" showBranch={false} />
            <span className="cmd-text">echo done</span>
          </div>
          <div className="cmd-output">
            <div className="cmd-note">
              <span className="tok-meta">→ </span> visit{' '}
              <a
                href="https://github.com/omkmorendha"
                target="_blank"
                rel="noreferrer"
                className="link-inline"
              >
                github.com/omkmorendha
              </a>{' '}
              <span className="tok-meta">for the full list</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
