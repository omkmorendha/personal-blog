interface PromptProps {
  cwd?: string;
  branch?: string;
  showBranch?: boolean;
  big?: boolean;
}

export default function Prompt({
  cwd = "~",
  branch = "main",
  showBranch = true,
  big = false,
}: PromptProps) {
  return (
    <span className={"prompt " + (big ? "prompt-big" : "")}>
      <span className="p-user">om</span>
      <span className="p-at">@</span>
      <span className="p-host">morendha</span>
      <span className="p-colon">:</span>
      <span className="p-cwd">{cwd}</span>
      {showBranch && (
        <span className="p-git">
          {" "}
          <span className="p-paren">(</span>
          <span className="p-branch">{branch}</span>
          <span className="p-paren">)</span>
        </span>
      )}
      <span className="p-dollar"> $ </span>
    </span>
  );
}
