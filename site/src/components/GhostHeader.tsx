interface GhostHeaderProps {
  onToggleInfo: () => void;
}

export function GhostHeader({ onToggleInfo }: GhostHeaderProps) {
  return (
    <header className="flex items-center gap-4 border-b border-[#1e1e2e] bg-[#0a0a0f] px-5 py-2">
      {/* ASCII ghost — compact inline */}
      <pre className="text-[8px] leading-[1.1] text-[#6b7280] select-none" aria-hidden>
{`  ▄██▄
 █░▀▀░█
 █░░░░█
  ▀█▀█▀`}
      </pre>

      {/* Title with glow */}
      <div className="flex flex-col">
        <h1
          className="text-lg font-bold tracking-[0.2em] text-white"
          style={{ textShadow: '0 0 20px rgba(255,255,255,0.3), 0 0 40px rgba(255,255,255,0.1)' }}
        >
          SPECTER
        </h1>
        <span className="text-[10px] uppercase tracking-[0.15em] text-[#6b7280]">
          Skill Graph Visualizer
        </span>
      </div>

      {/* Separator + subtitle */}
      <span className="text-[#1e1e2e]">│</span>
      <span className="text-xs text-[#6b7280]">
        43 nodes &middot; 5 clusters &middot; autonomous GEO agent
      </span>

      {/* Info button */}
      <button
        onClick={onToggleInfo}
        className="ml-auto flex h-7 w-7 items-center justify-center rounded border border-[#1e1e2e] text-sm text-[#6b7280] transition-colors hover:border-[#c0c8d8] hover:text-white"
        title="About SPECTER (press ?)"
      >
        ?
      </button>
    </header>
  );
}
