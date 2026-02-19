import { useState, useCallback, useEffect, useRef } from 'react';
import { useSpecterGraph } from './hooks/useSpecterGraph';
import { SpecterGraph } from './components/SpecterGraph';
import { LandingHero } from './components/LandingHero';
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
  const graphRef = useRef<HTMLDivElement>(null);

  const handleHoverNode = useCallback((node: SpecterNode | null, x?: number, y?: number) => {
    if (node && x !== undefined && y !== undefined) {
      setTooltip({ node, x, y });
    } else {
      setTooltip(null);
    }
  }, []);

  const toggleInfo = useCallback(() => setShowInfo(prev => !prev), []);

  const scrollToGraph = useCallback(() => {
    graphRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

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
    <div className="bg-[#0a0a0f]">
      {/* Landing Hero */}
      <LandingHero onScrollToGraph={scrollToGraph} />

      {/* Graph Section */}
      <div ref={graphRef} className="h-screen flex flex-col overflow-hidden">
        {/* Minimal header for graph section */}
        <header className="flex items-center gap-4 border-b border-[#1e1e2e] bg-[#0a0a0f] px-5 py-2 shrink-0">
          <pre className="text-[8px] leading-[1.1] text-[#6b7280] select-none" aria-hidden>
{`  ▄██▄
 █░▀▀░█
 █░░░░█
  ▀█▀█▀`}
          </pre>
          <div className="flex flex-col">
            <h2
              className="text-lg font-bold tracking-[0.2em] text-white"
              style={{ textShadow: '0 0 20px rgba(255,255,255,0.3), 0 0 40px rgba(255,255,255,0.1)' }}
            >
              SPECTER
            </h2>
            <span className="text-[10px] uppercase tracking-[0.15em] text-[#6b7280]">
              Skill Graph Visualizer
            </span>
          </div>
          <span className="text-[#1e1e2e]">│</span>
          <span className="text-xs text-[#6b7280]">
            43 nodes &middot; 5 clusters &middot; autonomous GEO agent
          </span>
          <button
            onClick={toggleInfo}
            className="ml-auto flex h-7 w-7 items-center justify-center rounded border border-[#1e1e2e] text-sm text-[#6b7280] transition-colors hover:border-[#c0c8d8] hover:text-white"
            title="About SPECTER (press ?)"
          >
            ?
          </button>
        </header>

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
    </div>
  );
}
