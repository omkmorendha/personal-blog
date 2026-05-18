import type { Metadata } from 'next';
import RouteHeading from '@/components/RouteHeading';
import Prompt from '@/components/Prompt';
import ContactCopy from '@/components/ContactCopy';

export const metadata: Metadata = {
  title: 'curl /contact',
  description: 'Reach Om Morendha, pipes that go directly to the inbox.',
};

const LINKS = [
  {
    key: 'github',
    handle: '@omkmorendha',
    href: 'https://github.com/omkmorendha',
    verb: 'GET',
  },
  {
    key: 'twitter',
    handle: '@whyomwhy',
    href: 'https://x.com/whyomwhy',
    verb: 'GET',
  },
  {
    key: 'linkedin',
    handle: 'in/om-morendha',
    href: 'https://linkedin.com/in/om-morendha',
    verb: 'GET',
  },
  {
    key: 'email',
    handle: 'omkmorendha@gmail.com',
    href: 'mailto:omkmorendha@gmail.com',
    verb: 'POST',
  },
];

const EMAIL = 'omkmorendha@gmail.com';

export default function ContactPage() {
  return (
    <div className="route">
      <RouteHeading
        cwd="~"
        command="curl -s api.morendha.dev/contact"
        tagline="// pipes that go directly to my inbox"
      />
      <div className="hero-body">
        <div className="cmd-block">
          <div className="cmd-line">
            <Prompt cwd="~" showBranch={false} />
            <span className="cmd-text">curl -s api.morendha.dev/contact | jq</span>
          </div>
          <div className="cmd-output">
            <div className="curl-output">
              <div className="curl-pre">
                <span className="tok-comment">// HTTP/2 200, application/json</span>
              </div>
              <pre className="json-block">
                {`{
  "name": `}
                <span className="tok-string">&quot;Om Morendha&quot;</span>
                {`,
  "handle": `}
                <span className="tok-string">&quot;@omkmorendha&quot;</span>
                {`,
  "links": [`}
                {LINKS.map((l, i) => (
                  <span key={l.key}>
                    {`
    { "`}
                    <span className="tok-key">{l.key}</span>
                    {`": `}
                    <a href={l.href} target="_blank" rel="noreferrer" className="json-link">
                      <span className="tok-string">&quot;{l.handle}&quot;</span>
                    </a>
                    {`, "verb": `}
                    <span className="tok-accent">&quot;{l.verb}&quot;</span>
                    {` }`}
                    {i < LINKS.length - 1 ? ',' : ''}
                  </span>
                ))}
                {`
  ],
  "open_to": [`}
                <span className="tok-string">&quot;founding&quot;</span>
                {`, `}
                <span className="tok-string">&quot;staff&quot;</span>
                {`, `}
                <span className="tok-string">&quot;senior&quot;</span>
                {`, `}
                <span className="tok-string">&quot;forward-deployed&quot;</span>
                {`]
}`}
              </pre>
            </div>
          </div>
        </div>

        <div className="cmd-block">
          <div className="cmd-line">
            <Prompt cwd="~" showBranch={false} />
            <span className="cmd-text">echo {EMAIL} | pbcopy</span>
          </div>
          <div className="cmd-output">
            <ContactCopy email={EMAIL} />
          </div>
        </div>
      </div>
    </div>
  );
}
