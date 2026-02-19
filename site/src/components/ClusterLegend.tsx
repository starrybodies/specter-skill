import type { ClusterId } from '../lib/graph-types';
import { CLUSTER_COLORS } from '../lib/colors';

interface ClusterLegendProps {
  hiddenClusters: Set<ClusterId>;
  onToggle: (cluster: ClusterId) => void;
}

const CLUSTER_ORDER: ClusterId[] = [
  'index',
  'geo-intelligence',
  'scraping-architecture',
  'x402-payments',
  'content-velocity',
  'verification-feedback',
];

const ACTION_SHAPES: { action: string; label: string; icon: string }[] = [
  { action: 'read-only', label: 'Read-Only', icon: '◉' },
  { action: 'decide', label: 'Decide', icon: '◇' },
  { action: 'execute', label: 'Execute', icon: '⬡' },
  { action: 'pay', label: 'Pay', icon: '◎' },
];

export function ClusterLegend({ hiddenClusters, onToggle }: ClusterLegendProps) {
  return (
    <div className="absolute bottom-4 left-4 z-10 rounded border border-[#1e1e2e] bg-[#0a0a0f]/90 backdrop-blur-sm">
      <div className="border-b border-[#1e1e2e] px-3 py-1.5">
        <span className="text-[10px] uppercase tracking-[0.15em] text-[#6b7280]">
          ┌─ clusters
        </span>
      </div>
      <div className="flex flex-col gap-0.5 px-2 py-2">
        {CLUSTER_ORDER.map(cluster => {
          const config = CLUSTER_COLORS[cluster];
          const hidden = hiddenClusters.has(cluster);
          return (
            <button
              key={cluster}
              onClick={() => onToggle(cluster)}
              className="flex items-center gap-2 rounded px-2 py-1 text-left transition-all hover:bg-[#1e1e2e]"
              style={{ opacity: hidden ? 0.3 : 1 }}
            >
              <span
                className="h-2.5 w-2.5 shrink-0 rounded-full"
                style={{
                  backgroundColor: config.hex,
                  boxShadow: hidden ? 'none' : `0 0 6px ${config.glow}`,
                }}
              />
              <span className="text-[11px] text-[#c0c8d8]">
                {config.label}
              </span>
            </button>
          );
        })}
      </div>
      {/* Shape legend */}
      <div className="border-t border-[#1e1e2e] px-3 py-2">
        <span className="text-[10px] uppercase tracking-[0.15em] text-[#6b7280]">
          ├─ shapes
        </span>
        <div className="mt-1.5 flex flex-col gap-0.5">
          {ACTION_SHAPES.map(s => (
            <div key={s.action} className="flex items-center gap-2 px-2">
              <span className="w-4 text-center text-xs text-[#c0c8d8]">{s.icon}</span>
              <span className="text-[10px] text-[#6b7280]">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-[#1e1e2e] px-3 py-1.5">
        <span className="text-[10px] text-[#6b7280]">
          └─ click to toggle
        </span>
      </div>
    </div>
  );
}
