import Prompt from './Prompt';

interface RouteHeadingProps {
  cwd?: string;
  command: string;
  tagline: string;
}

export default function RouteHeading({ cwd = '~', command, tagline }: RouteHeadingProps) {
  return (
    <>
      <div className="route-heading">
        <Prompt cwd={cwd} branch="main" big />
        <span className="hero-cmd">{command}</span>
        <span className="cursor hero-cursor blink">█</span>
      </div>
      <div className="hero-tagline">
        <span className="tok-comment">{tagline}</span>
      </div>
    </>
  );
}
