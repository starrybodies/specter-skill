import type { SpecterNode } from '../lib/graph-types';
import { getClusterColor } from '../lib/colors';
import { CLUSTER_COLORS } from '../lib/colors';
import { getConnectedNodeIds, getNodeById } from '../data/graph';
import { AsciiBox } from './AsciiBox';

interface NodeDetailProps {
  node: SpecterNode;
  onClose: () => void;
  onNavigate: (nodeId: string) => void;
}

const ACTION_LABELS: Record<string, string> = {
  'read-only': 'READ-ONLY',
  'decide': 'DECIDE',
  'execute': 'EXECUTE',
  'pay': 'PAY',
};

const ACTION_ICONS: Record<string, string> = {
  'read-only': '◉',
  'decide': '◇',
  'execute': '⬡',
  'pay': '◎',
};

export function NodeDetail({ node, onClose, onNavigate }: NodeDetailProps) {
  const color = getClusterColor(node.cluster);
  const clusterLabel = CLUSTER_COLORS[node.cluster]?.label ?? node.cluster;
  const connectedIds = getConnectedNodeIds(node.id);
  const connectedNodes = Array.from(connectedIds)
    .filter(id => id !== node.id)
    .map(id => getNodeById(id))
    .filter((n): n is SpecterNode => n != null);

  return (
    <div className="flex h-full w-80 flex-col border-l border-[#1e1e2e] bg-[#0a0a0f] animate-slide-in-right">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#1e1e2e] px-4 py-3">
        <span className="text-[10px] uppercase tracking-[0.15em] text-[#6b7280]">
          ┌─ node detail
        </span>
        <button
          onClick={onClose}
          className="text-[#6b7280] transition-colors hover:text-white"
        >
          ✕
        </button>
      </div>

      {/* Content */}
      <div className="detail-scroll flex-1 overflow-y-auto p-4">
        {/* Name */}
        <h2
          className="text-lg font-bold"
          style={{ color }}
        >
          {node.name}
        </h2>

        {/* Badges */}
        <div className="mt-2 flex flex-wrap gap-2">
          <span
            className="rounded px-2 py-0.5 text-[10px] font-semibold uppercase"
            style={{ backgroundColor: `${color}20`, color, border: `1px solid ${color}40` }}
          >
            {clusterLabel}
          </span>
          <span className="rounded bg-[#12121a] px-2 py-0.5 text-[10px] font-semibold text-[#c0c8d8] border border-[#1e1e2e]">
            {ACTION_ICONS[node.agentAction]} {ACTION_LABELS[node.agentAction]}
          </span>
          {node.demoWorthy && (
            <span className="rounded bg-[#ffc40020] px-2 py-0.5 text-[10px] font-semibold text-[#ffc400] border border-[#ffc40040]">
              ✦ DEMO
            </span>
          )}
          {node.isIndex && (
            <span className="rounded bg-[#ffffff15] px-2 py-0.5 text-[10px] font-semibold text-white border border-[#ffffff30]">
              INDEX
            </span>
          )}
          {node.isMoc && (
            <span className="rounded bg-[#ffffff10] px-2 py-0.5 text-[10px] font-semibold text-[#c0c8d8] border border-[#ffffff20]">
              MOC HUB
            </span>
          )}
        </div>

        {/* Description */}
        <AsciiBox title="description" className="mt-4">
          <p className="text-xs leading-relaxed text-[#c0c8d8]">
            {node.description}
          </p>
        </AsciiBox>

        {/* Connected nodes */}
        <AsciiBox title={`connections (${connectedNodes.length})`} className="mt-3">
          <div className="flex flex-col gap-1">
            {connectedNodes.map(cn => (
              <button
                key={cn.id}
                onClick={() => onNavigate(cn.id)}
                className="flex items-center gap-2 rounded px-2 py-1.5 text-left text-xs transition-colors hover:bg-[#1e1e2e]"
              >
                <span
                  className="h-2 w-2 shrink-0 rounded-full"
                  style={{ backgroundColor: getClusterColor(cn.cluster) }}
                />
                <span className="truncate text-[#c0c8d8]">{cn.name}</span>
                <span className="ml-auto shrink-0 text-[10px] text-[#6b7280]">
                  {ACTION_ICONS[cn.agentAction]}
                </span>
              </button>
            ))}
          </div>
        </AsciiBox>

        {/* Slug */}
        <div className="mt-3 rounded bg-[#12121a] border border-[#1e1e2e] px-3 py-2">
          <span className="text-[10px] text-[#6b7280]">slug: </span>
          <code className="text-[10px] text-[#c0c8d8]">{node.slug}</code>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-[#1e1e2e] px-4 py-2">
        <span className="text-[10px] text-[#6b7280]">
          └─ click connected node to navigate
        </span>
      </div>
    </div>
  );
}
