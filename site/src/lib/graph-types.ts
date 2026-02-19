import type * as d3 from 'd3';

export type ClusterId =
  | 'index'
  | 'geo-intelligence'
  | 'scraping-architecture'
  | 'x402-payments'
  | 'content-velocity'
  | 'verification-feedback';

export type AgentAction = 'read-only' | 'decide' | 'execute' | 'pay';

export interface SpecterNode extends d3.SimulationNodeDatum {
  id: string;
  name: string;
  slug: string;
  cluster: ClusterId;
  description: string;
  agentAction: AgentAction;
  demoWorthy: boolean;
  linksTo: string[];
  isMoc: boolean;
  isIndex: boolean;
}

export interface SpecterLink extends d3.SimulationLinkDatum<SpecterNode> {
  source: string | SpecterNode;
  target: string | SpecterNode;
  crossCluster: boolean;
}

export interface SpecterGraphData {
  nodes: SpecterNode[];
  links: SpecterLink[];
}
