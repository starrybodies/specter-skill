import { useState, useMemo, useCallback } from 'react';
import { SPECTER_GRAPH, getConnectedNodeIds } from '../data/graph';
import type { SpecterNode, SpecterGraphData, ClusterId } from '../lib/graph-types';

export interface SpecterStats {
  totalNodes: number;
  totalLinks: number;
  visibleNodes: number;
  visibleLinks: number;
  clusterCounts: Record<ClusterId, number>;
}

export function useSpecterGraph() {
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
  const [hiddenClusters, setHiddenClusters] = useState<Set<ClusterId>>(new Set());

  const selectedNode = useMemo(
    () => selectedNodeId ? SPECTER_GRAPH.nodes.find(n => n.id === selectedNodeId) ?? null : null,
    [selectedNodeId],
  );

  const connectedNodeIds = useMemo(
    () => selectedNodeId ? getConnectedNodeIds(selectedNodeId) : new Set<string>(),
    [selectedNodeId],
  );

  const filteredData = useMemo<SpecterGraphData>(() => {
    if (hiddenClusters.size === 0) return SPECTER_GRAPH;

    const visibleNodes = SPECTER_GRAPH.nodes.filter(n => !hiddenClusters.has(n.cluster));
    const visibleIds = new Set(visibleNodes.map(n => n.id));
    const visibleLinks = SPECTER_GRAPH.links.filter(l => {
      const sid = typeof l.source === 'string' ? l.source : l.source.id;
      const tid = typeof l.target === 'string' ? l.target : l.target.id;
      return visibleIds.has(sid) && visibleIds.has(tid);
    });

    return { nodes: visibleNodes, links: visibleLinks };
  }, [hiddenClusters]);

  const stats = useMemo<SpecterStats>(() => {
    const clusterCounts = {} as Record<ClusterId, number>;
    for (const n of SPECTER_GRAPH.nodes) {
      clusterCounts[n.cluster] = (clusterCounts[n.cluster] || 0) + 1;
    }
    return {
      totalNodes: SPECTER_GRAPH.nodes.length,
      totalLinks: SPECTER_GRAPH.links.length,
      visibleNodes: filteredData.nodes.length,
      visibleLinks: filteredData.links.length,
      clusterCounts,
    };
  }, [filteredData]);

  const toggleCluster = useCallback((cluster: ClusterId) => {
    setHiddenClusters(prev => {
      const next = new Set(prev);
      if (next.has(cluster)) next.delete(cluster);
      else next.add(cluster);
      return next;
    });
  }, []);

  const selectNode = useCallback((node: SpecterNode | null) => {
    setSelectedNodeId(node?.id ?? null);
  }, []);

  const navigateToNode = useCallback((nodeId: string) => {
    setSelectedNodeId(nodeId);
  }, []);

  return {
    filteredData,
    selectedNode,
    selectedNodeId,
    connectedNodeIds,
    hiddenClusters,
    stats,
    toggleCluster,
    selectNode,
    navigateToNode,
  };
}
