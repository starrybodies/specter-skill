import type { ClusterId, AgentAction } from './graph-types';

export interface ClusterColor {
  hex: string;
  glow: string;
  label: string;
}

export const CLUSTER_COLORS: Record<ClusterId, ClusterColor> = {
  'index':                   { hex: '#ffffff', glow: '#ffffff60', label: 'Index / SPECTER' },
  'geo-intelligence':        { hex: '#00e5ff', glow: '#00e5ff50', label: 'GEO Intelligence' },
  'scraping-architecture':   { hex: '#76ff03', glow: '#76ff0350', label: 'Scraping Architecture' },
  'x402-payments':           { hex: '#ffc400', glow: '#ffc40050', label: 'x402 Payments' },
  'content-velocity':        { hex: '#e040fb', glow: '#e040fb50', label: 'Content Velocity' },
  'verification-feedback':   { hex: '#ff6e40', glow: '#ff6e4050', label: 'Verification & Feedback' },
};

export const EDGE_COLORS = {
  default: '#1e1e2e',
  sameCluster: '#2a2a3a',
  crossCluster: '#1a1a28',
  highlighted: '#667eea',
  selected: '#ffeb3b',
};

export const ACTION_GLOW: Record<AgentAction, { intensity: number; animation: string | null }> = {
  'read-only': { intensity: 0.4, animation: null },
  'decide':    { intensity: 0.7, animation: 'decidePulse' },
  'execute':   { intensity: 0.9, animation: null },
  'pay':       { intensity: 0.6, animation: null },
};

export function getClusterColor(cluster: ClusterId): string {
  return CLUSTER_COLORS[cluster]?.hex ?? '#ffffff';
}

export function getClusterGlow(cluster: ClusterId): string {
  return CLUSTER_COLORS[cluster]?.glow ?? '#ffffff40';
}

export function nodeRadius(node: { isIndex: boolean; isMoc: boolean }): number {
  if (node.isIndex) return 28;
  if (node.isMoc) return 18;
  return 10;
}
