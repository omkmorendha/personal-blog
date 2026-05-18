export default function WindowChrome({
  path,
  children,
}: {
  path?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="term-window">
      <div className="term-titlebar">
        <div className="lights">
          <span className="light l-close" />
          <span className="light l-min" />
          <span className="light l-max" />
        </div>
        <div className="term-title">
          {path ? (
            <>
              <span className="title-host">{path}</span>
            </>
          ) : (
            <>
              <span className="title-host">om@morendha</span>
              <span className="title-sep">-</span>
              <span>-zsh</span>
              <span className="title-sep">-</span>
              <span>120×40</span>
            </>
          )}
        </div>
        <div className="titlebar-spacer" />
      </div>
      {children}
    </div>
  );
}
