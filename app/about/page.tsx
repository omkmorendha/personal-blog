import type { Metadata } from 'next';
import RouteHeading from '@/components/RouteHeading';
import Prompt from '@/components/Prompt';

export const metadata: Metadata = {
  title: 'man om',
  description: 'A man page for Om Morendha, AI engineer.',
};

export default function AboutPage() {
  return (
    <div className="route">
      <RouteHeading
        cwd="~"
        command="man om"
        tagline="// MORENDHA(1)                    User Commands                   MORENDHA(1)"
      />
      <div className="hero-body">
        <div className="cmd-block">
          <div className="cmd-line">
            <Prompt cwd="~" showBranch={false} />
            <span className="cmd-text">man om</span>
          </div>
          <div className="cmd-output">
            <div className="man-page">
              <div className="man-section">
                <div className="man-h">NAME</div>
                <div className="man-p">
                  <strong>om</strong>, AI engineer; builds agent infra and the data layer
                  underneath it.
                </div>
              </div>

              <div className="man-section">
                <div className="man-h">SYNOPSIS</div>
                <div className="man-p">
                  <strong>om</strong> [<span className="tok-key">--mcp</span>] [
                  <span className="tok-key">--agent-infra</span>] [
                  <span className="tok-key">--data-engineering</span>] [
                  <span className="tok-key">--applied-llms</span>] <em>problem</em>
                </div>
              </div>

              <div className="man-section">
                <div className="man-h">DESCRIPTION</div>
                <div className="man-p">
                  Available for new roles: founding / staff / senior / forward-deployed.
                  Previously AI Innovation Specialist at{' '}
                  <span className="tok-accent">Trilogy (ESW Capital)</span>.
                </div>
                <div className="man-p">
                  Builds the infrastructure that makes LLM agents useful in production: MCP
                  servers, RBAC, dimensional data models, and agent orchestration. At Trilogy,
                  shipped a company-wide MCP server that let employees point agents at internal
                  data; re-engineered a bloated warehouse into Kimball-style dimensional models so
                  LLMs can query it while minimizing hallucination; and built{' '}
                  <span className="tok-accent">Budget Bot</span>, an agent that automated quarterly
                  financial planning for a $3B+ AUM PE firm.
                </div>
                <div className="man-p">
                  Before Trilogy: led an algorithmic copy-trading platform at Cognyx AI across
                  hundreds of concurrent users.
                </div>
              </div>

              <div className="man-section">
                <div className="man-h">EDUCATION</div>
                <div className="man-p">
                  B.Tech, Computer Science, <span className="tok-accent">IIIT Dharwad</span>{' '}
                  (2020–2024) · CGPA 8.25
                </div>
              </div>

              <div className="man-section">
                <div className="man-h">CURRENTLY</div>
                <ul className="man-list">
                  <li>
                    <span className="tok-meta">[*]</span> Talking to teams hiring for agent infra,
                    applied AI, or forward-deployed work
                  </li>
                  <li>
                    <span className="tok-meta">[*]</span> Exploring agent-assisted dev workflows (
                    <span className="tok-accent">Claude Code</span>, Codex) for single-engineer
                    leverage
                  </li>
                  <li>
                    <span className="tok-meta">[*]</span> Writing notes on what actually makes LLM
                    agents reliable
                  </li>
                </ul>
              </div>

              <div className="man-section">
                <div className="man-h">SEE ALSO</div>
                <div className="man-p">
                  <a
                    href="https://github.com/omkmorendha"
                    target="_blank"
                    rel="noreferrer"
                    className="link-inline"
                  >
                    github(7)
                  </a>
                  ,{' '}
                  <a
                    href="https://twitter.com/omkmorendha"
                    target="_blank"
                    rel="noreferrer"
                    className="link-inline"
                  >
                    twitter(7)
                  </a>
                  ,{' '}
                  <a href="mailto:omkmorendha@gmail.com" className="link-inline">
                    email(1)
                  </a>
                </div>
              </div>

              <div className="man-foot">
                <span>morendha 1.0</span>
                <span className="man-foot-spacer" />
                <span>MORENDHA(1)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
