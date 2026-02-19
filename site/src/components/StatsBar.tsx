import type { SpecterStats } from '../hooks/useSpecterGraph';

interface StatsBarProps {
  stats: SpecterStats;
}

export function StatsBar({ stats }: StatsBarProps) {
  return (
    <div className="flex items-center gap-6 border-t border-[#1e1e2e] bg-[#0a0a0f] px-5 py-1.5">
      <span className="text-[10px] text-[#6b7280]">
        nodes: <span className="text-[#c0c8d8]">{stats.visibleNodes}</span>
        <span className="text-[#1e1e2e]"> / </span>
        <span className="text-[#6b7280]">{stats.totalNodes}</span>
      </span>
      <span className="text-[10px] text-[#6b7280]">
        links: <span className="text-[#c0c8d8]">{stats.visibleLinks}</span>
        <span className="text-[#1e1e2e]"> / </span>
        <span className="text-[#6b7280]">{stats.totalLinks}</span>
      </span>
      <span className="text-[10px] text-[#6b7280]">
        clusters: <span className="text-[#c0c8d8]">5</span>
      </span>
      <span className="ml-auto text-[10px] text-[#6b7280]">
        scroll to zoom &middot; drag to pan &middot; click node for details
      </span>
    </div>
  );
}
