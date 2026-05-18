import type { Metadata } from "next";
import RouteHeading from "@/components/RouteHeading";
import Prompt from "@/components/Prompt";

export const metadata: Metadata = {
  title: "man om",
  description: "A man page for Om Morendha — AI engineer.",
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
                  <strong>om</strong> — AI engineer; builds agent infra and the
                  data layer underneath it.
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
                  AI Innovation Specialist at Trilogy (ESW Capital), working
                  remotely from India. Builds the infrastructure that makes LLM
                  agents useful in production — MCP servers, RBAC, dimensional
                  data models, agent orchestration, and the boring-but-critical
                  reliability work around all of it.
                </div>
                <div className="man-p">
                  Shipped a company-wide MCP server (OAuth2 + role-based access)
                  that connects AI agents to NetSuite, Redshift, and internal
                  APIs for 50+ employees. Re-engineered 500+ unstructured tables
                  into Kimball star/snowflake schemas so LLMs can query without
                  hallucinating. Built{" "}
                  <span className="tok-accent">Budget Bot</span>, an agent that
                  automated quarterly financial planning across 30+ portfolio
                  companies of a $3B+ AUM PE firm — cut manual line-item
                  generation by 80%.
                </div>
                <div className="man-p">
                  Before Trilogy: led an algorithmic trading platform at Cognyx
                  AI — Django/Postgres/Redis/WebSockets, copy-trading across
                  100+ concurrent users, backtesting on 5+ years of market
                  data, 12 containerized microservices on AWS with 99.5%
                  uptime.
                </div>
              </div>

              <div className="man-section">
                <div className="man-h">EDUCATION</div>
                <div className="man-p">
                  B.Tech, Computer Science —{" "}
                  <span className="tok-accent">IIIT Dharwad</span> (2020–2024) ·
                  CGPA 8.25
                </div>
              </div>

              <div className="man-section">
                <div className="man-h">CURRENTLY</div>
                <ul className="man-list">
                  <li>
                    <span className="tok-meta">[*]</span> Scaling MCP across
                    more internal data sources at Trilogy
                  </li>
                  <li>
                    <span className="tok-meta">[*]</span> Exploring
                    agent-assisted dev workflows (
                    <span className="tok-accent">Claude Code</span>, Codex) for
                    single-engineer leverage
                  </li>
                  <li>
                    <span className="tok-meta">[*]</span> Writing notes on what
                    actually makes LLM agents reliable
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
                  ,{" "}
                  <a
                    href="https://twitter.com/omkmorendha"
                    target="_blank"
                    rel="noreferrer"
                    className="link-inline"
                  >
                    twitter(7)
                  </a>
                  ,{" "}
                  <a
                    href="mailto:omkmorendha@gmail.com"
                    className="link-inline"
                  >
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
