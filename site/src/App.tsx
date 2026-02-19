import { useState, useCallback, useEffect } from 'react';
import { useSpecterGraph } from './hooks/useSpecterGraph';
import { SpecterGraph } from './components/SpecterGraph';
import { GhostHeader } from './components/GhostHeader';
import { NodeDetail } from './components/NodeDetail';
import { ClusterLegend } from './components/ClusterLegend';
import { StatsBar } from './components/StatsBar';
import { InfoPanel } from './components/InfoPanel';
import type { SpecterNode } from './lib/graph-types';
import { getClusterColor } from './lib/colors';

export function App() {
  const graph = useSpecterGraph();
  const [tooltip, setTooltip] = useState<{ node: SpecterNode; x: number; y: number } | null>(null);
  const [showInfo, setShowInfo] = useState(false);

  const handleHoverNode = useCallback((node: SpecterNode | null, x?: number, y?: number) => {
    if (node && x !== undefined && y !== undefined) {
      setTooltip({ node, x, y });
    } else {
      setTooltip(null);
    }
  }, []);

  const toggleInfo = useCallback(() => setShowInfo(prev => !prev), []);

  // Keyboard: ? toggles info, Escape closes it
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === '?' && !e.ctrlKey && !e.metaKey) {
        setShowInfo(prev => !prev);
      }
      if (e.key === 'Escape') {
        setShowInfo(false);
        if (graph.selectedNodeId) graph.selectNode(null);
      }
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [graph.selectedNodeId, graph.selectNode]);

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-[#0a0a0f]">
      <GhostHeader onToggleInfo={toggleInfo} />

      <div className="flex flex-1 overflow-hidden">
        {/* Center — Graph */}
        <div className="relative flex-1">
          <SpecterGraph
            nodes={graph.filteredData.nodes}
            links={graph.filteredData.links}
            selectedNodeId={graph.selectedNodeId}
            onSelectNode={graph.selectNode}
            onHoverNode={handleHoverNode}
          />

          {/* Cluster legend overlay */}
          <ClusterLegend
            hiddenClusters={graph.hiddenClusters}
            onToggle={graph.toggleCluster}
          />

          {/* Info panel overlay */}
          {showInfo && <InfoPanel onClose={() => setShowInfo(false)} />}

          {/* Tooltip */}
          {tooltip && !showInfo && (
            <div
              className="pointer-events-none fixed z-50 max-w-[260px] rounded border border-[#1e1e2e] bg-[#12121a]/95 px-3 py-2.5 backdrop-blur-sm"
              style={{
                left: Math.min(tooltip.x + 14, window.innerWidth - 280),
                top: Math.min(tooltip.y - 12, window.innerHeight - 120),
              }}
            >
              <div className="font-semibold text-sm" style={{ color: getClusterColor(tooltip.node.cluster) }}>
                {tooltip.node.name}
              </div>
              <div className="mt-1 text-[11px] text-[#c0c8d8] leading-relaxed line-clamp-2">
                {tooltip.node.description}
              </div>
              <div className="mt-1.5 text-[10px] text-[#6b7280]">
                {tooltip.node.agentAction} &middot; click to select
              </div>
            </div>
          )}
        </div>

        {/* Right panel — Node Details */}
        {graph.selectedNode && (
          <NodeDetail
            node={graph.selectedNode}
            onClose={() => graph.selectNode(null)}
            onNavigate={graph.navigateToNode}
          />
        )}
      </div>

      <StatsBar stats={graph.stats} />
    </div>
  );
}
