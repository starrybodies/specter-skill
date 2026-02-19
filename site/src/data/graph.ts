import type { SpecterNode, SpecterLink, SpecterGraphData } from '../lib/graph-types';

const nodes: SpecterNode[] = [
  // ── Index ──
  {
    id: 'index', name: 'SPECTER', slug: 'index',
    cluster: 'index',
    description: 'Entry point for SPECTER — the first open-source autonomous GEO agent. Read this at the start of any session involving SEO, GEO, content strategy, competitive intelligence, scraping, or x402 payments.',
    agentAction: 'read-only', demoWorthy: true,
    linksTo: ['geo-intelligence-moc', 'scraping-architecture-moc', 'x402-payment-moc', 'content-velocity-moc', 'verification-feedback-moc'],
    isMoc: false, isIndex: true,
  },

  // ── GEO Intelligence Cluster ──
  {
    id: 'geo-intelligence-moc', name: 'GEO Intelligence', slug: 'geo-intelligence-moc',
    cluster: 'geo-intelligence',
    description: 'Hub for understanding how AI systems retrieve and cite content — the theoretical foundation for GEO strategy.',
    agentAction: 'read-only', demoWorthy: false,
    linksTo: ['geo-vs-seo', 'how-perplexity-retrieves', 'how-claude-retrieves', 'how-chatgpt-retrieves', 'entity-disambiguation', 'citation-worthy-content', 'structured-data-for-ai', 'geo-ranking-signals', 'ai-citation-gaps'],
    isMoc: true, isIndex: false,
  },
  {
    id: 'geo-vs-seo', name: 'GEO vs SEO', slug: 'geo-vs-seo',
    cluster: 'geo-intelligence',
    description: 'The paradigm shift from page ranking to source citation — what changes when AI systems replace search engines.',
    agentAction: 'read-only', demoWorthy: false,
    linksTo: ['citation-worthy-content', 'entity-disambiguation'],
    isMoc: false, isIndex: false,
  },
  {
    id: 'ai-citation-gaps', name: 'AI Citation Gaps', slug: 'ai-citation-gaps',
    cluster: 'geo-intelligence',
    description: 'How to find questions where AI systems answer but don\'t cite you — the demand signal for the entire content pipeline.',
    agentAction: 'decide', demoWorthy: true,
    linksTo: ['serp-monitoring', 'content-gap-analysis'],
    isMoc: false, isIndex: false,
  },
  {
    id: 'citation-worthy-content', name: 'Citation-Worthy Content', slug: 'citation-worthy-content',
    cluster: 'geo-intelligence',
    description: 'What makes AI systems quote you — definitive statements, original data, answer-complete paragraphs. Includes scoring rubric.',
    agentAction: 'decide', demoWorthy: true,
    linksTo: ['content-brief-geo', 'geo-vs-seo'],
    isMoc: false, isIndex: false,
  },
  {
    id: 'entity-disambiguation', name: 'Entity Disambiguation', slug: 'entity-disambiguation',
    cluster: 'geo-intelligence',
    description: 'The most underrated GEO lever — making AI systems know unambiguously who you are.',
    agentAction: 'execute', demoWorthy: false,
    linksTo: ['structured-data-for-ai', 'geo-vs-seo'],
    isMoc: false, isIndex: false,
  },
  {
    id: 'structured-data-for-ai', name: 'Structured Data for AI', slug: 'structured-data-for-ai',
    cluster: 'geo-intelligence',
    description: 'Schema.org markup that AI systems actually use — JSON-LD templates for FAQ, HowTo, Article, Organization, Dataset.',
    agentAction: 'execute', demoWorthy: false,
    linksTo: ['citation-worthy-content', 'entity-disambiguation'],
    isMoc: false, isIndex: false,
  },
  {
    id: 'geo-ranking-signals', name: 'GEO Ranking Signals', slug: 'geo-ranking-signals',
    cluster: 'geo-intelligence',
    description: 'Current research on GEO ranking factors — what\'s confirmed, what\'s hypothesized, what\'s speculative.',
    agentAction: 'read-only', demoWorthy: false,
    linksTo: ['geo-vs-seo', 'verification-loop'],
    isMoc: false, isIndex: false,
  },
  {
    id: 'how-perplexity-retrieves', name: 'How Perplexity Retrieves', slug: 'how-perplexity-retrieves',
    cluster: 'geo-intelligence',
    description: 'Perplexity\'s retrieval architecture and citation heuristics — what it searches, how it selects sources.',
    agentAction: 'read-only', demoWorthy: false,
    linksTo: ['geo-vs-seo', 'content-brief-geo'],
    isMoc: false, isIndex: false,
  },
  {
    id: 'how-chatgpt-retrieves', name: 'How ChatGPT Retrieves', slug: 'how-chatgpt-retrieves',
    cluster: 'geo-intelligence',
    description: 'GPT-4o retrieval via Bing integration and Browse mode — how ChatGPT finds and cites sources.',
    agentAction: 'read-only', demoWorthy: false,
    linksTo: ['geo-vs-seo', 'serp-monitoring'],
    isMoc: false, isIndex: false,
  },
  {
    id: 'how-claude-retrieves', name: 'How Claude Retrieves', slug: 'how-claude-retrieves',
    cluster: 'geo-intelligence',
    description: 'Claude\'s knowledge architecture — trained knowledge vs. tool-augmented retrieval — and GEO implications.',
    agentAction: 'read-only', demoWorthy: false,
    linksTo: ['geo-vs-seo', 'entity-disambiguation'],
    isMoc: false, isIndex: false,
  },

  // ── Scraping Architecture Cluster ──
  {
    id: 'scraping-architecture-moc', name: 'Scraping Architecture', slug: 'scraping-architecture-moc',
    cluster: 'scraping-architecture',
    description: 'Hub for autonomous data collection — target identification, extraction methods, proxy management, anti-detection.',
    agentAction: 'read-only', demoWorthy: false,
    linksTo: ['scraping-decision-tree', 'target-identification', 'rotating-proxy-management', 'headless-browser-scraping', 'competitor-fingerprinting', 'data-freshness-management', 'serp-monitoring', 'anti-detection-ethics'],
    isMoc: true, isIndex: false,
  },
  {
    id: 'scraping-decision-tree', name: 'Scraping Decision Tree', slug: 'scraping-decision-tree',
    cluster: 'scraping-architecture',
    description: 'Master decision node — given a data target, walk this tree to choose the optimal extraction method.',
    agentAction: 'decide', demoWorthy: true,
    linksTo: ['x402-payment-logic', 'headless-browser-scraping'],
    isMoc: false, isIndex: false,
  },
  {
    id: 'target-identification', name: 'Target Identification', slug: 'target-identification',
    cluster: 'scraping-architecture',
    description: 'How to identify what\'s worth scraping — competitor content, SERP targets, data sources for AI training pipelines.',
    agentAction: 'decide', demoWorthy: false,
    linksTo: ['ai-citation-gaps', 'competitor-fingerprinting'],
    isMoc: false, isIndex: false,
  },
  {
    id: 'competitor-fingerprinting', name: 'Competitor Fingerprinting', slug: 'competitor-fingerprinting',
    cluster: 'scraping-architecture',
    description: 'Build content fingerprints of competitors — publishing frequency, topics, citation rates, backlink velocity.',
    agentAction: 'execute', demoWorthy: false,
    linksTo: ['target-identification', 'content-gap-analysis'],
    isMoc: false, isIndex: false,
  },
  {
    id: 'rotating-proxy-management', name: 'Rotating Proxy Management', slug: 'rotating-proxy-management',
    cluster: 'scraping-architecture',
    description: 'Proxy architecture for sustained scraping — residential vs. datacenter, rotation strategies, ban recovery.',
    agentAction: 'execute', demoWorthy: false,
    linksTo: ['scraping-decision-tree', 'x402-payment-logic'],
    isMoc: false, isIndex: false,
  },
  {
    id: 'headless-browser-scraping', name: 'Headless Browser Scraping', slug: 'headless-browser-scraping',
    cluster: 'scraping-architecture',
    description: 'Playwright with stealth for JS-rendered content — stealth configuration, Cloudflare bypass.',
    agentAction: 'execute', demoWorthy: false,
    linksTo: ['rotating-proxy-management', 'scraping-decision-tree'],
    isMoc: false, isIndex: false,
  },
  {
    id: 'data-freshness-management', name: 'Data Freshness Management', slug: 'data-freshness-management',
    cluster: 'scraping-architecture',
    description: 'Staleness kills GEO — TTL management, scheduled refresh, change detection, priority queuing.',
    agentAction: 'execute', demoWorthy: false,
    linksTo: ['scraping-decision-tree', 'verification-loop'],
    isMoc: false, isIndex: false,
  },
  {
    id: 'serp-monitoring', name: 'SERP Monitoring', slug: 'serp-monitoring',
    cluster: 'scraping-architecture',
    description: 'Track traditional SERP positions AND AI-surfaced citations. Automated monitoring with alert conditions.',
    agentAction: 'execute', demoWorthy: true,
    linksTo: ['ai-citation-gaps', 'verification-loop'],
    isMoc: false, isIndex: false,
  },
  {
    id: 'anti-detection-ethics', name: 'Anti-Detection Ethics', slug: 'anti-detection-ethics',
    cluster: 'scraping-architecture',
    description: 'Where the lines are — robots.txt compliance, rate limiting, ToS review, legal landscape.',
    agentAction: 'decide', demoWorthy: false,
    linksTo: ['scraping-decision-tree', 'x402-payment-logic'],
    isMoc: false, isIndex: false,
  },

  // ── x402 Payments Cluster ──
  {
    id: 'x402-payment-moc', name: 'x402 Payments', slug: 'x402-payment-moc',
    cluster: 'x402-payments',
    description: 'Hub for autonomous micropayment logic — when to pay, how much, budget governance, cost accounting.',
    agentAction: 'read-only', demoWorthy: false,
    linksTo: ['x402-protocol-primer', 'x402-wallet-management', 'x402-datasource-registry', 'x402-payment-logic', 'micropayment-budget-management', 'x402-fallback-chains', 'stablecoin-operations', 'x402-cost-accounting'],
    isMoc: true, isIndex: false,
  },
  {
    id: 'x402-protocol-primer', name: 'x402 Protocol Primer', slug: 'x402-protocol-primer',
    cluster: 'x402-payments',
    description: 'How the x402 protocol works — HTTP 402 as a machine-readable payment gate enabling agents to autonomously purchase data.',
    agentAction: 'read-only', demoWorthy: true,
    linksTo: ['x402-wallet-management', 'x402-datasource-registry'],
    isMoc: false, isIndex: false,
  },
  {
    id: 'x402-wallet-management', name: 'Wallet Management', slug: 'x402-wallet-management',
    cluster: 'x402-payments',
    description: 'Wallet architecture for autonomous agents — hot wallet, spending limits, balance monitoring, security.',
    agentAction: 'pay', demoWorthy: false,
    linksTo: ['x402-protocol-primer', 'x402-payment-logic'],
    isMoc: false, isIndex: false,
  },
  {
    id: 'x402-datasource-registry', name: 'Datasource Registry', slug: 'x402-datasource-registry',
    cluster: 'x402-payments',
    description: 'Living registry of x402-enabled data sources — endpoints, pricing, data types, quality scores.',
    agentAction: 'execute', demoWorthy: true,
    linksTo: ['x402-protocol-primer', 'scraping-decision-tree'],
    isMoc: false, isIndex: false,
  },
  {
    id: 'x402-payment-logic', name: 'Payment Logic', slug: 'x402-payment-logic',
    cluster: 'x402-payments',
    description: 'The pay-or-scrape decision engine — given a data need and alternatives, should the agent pay?',
    agentAction: 'pay', demoWorthy: false,
    linksTo: ['x402-datasource-registry', 'scraping-decision-tree'],
    isMoc: false, isIndex: false,
  },
  {
    id: 'micropayment-budget-management', name: 'Budget Management', slug: 'micropayment-budget-management',
    cluster: 'x402-payments',
    description: 'Budget governance without human approval — daily caps, burn rate monitoring, automatic pause conditions.',
    agentAction: 'pay', demoWorthy: false,
    linksTo: ['x402-wallet-management', 'x402-payment-logic'],
    isMoc: false, isIndex: false,
  },
  {
    id: 'x402-fallback-chains', name: 'Fallback Chains', slug: 'x402-fallback-chains',
    cluster: 'x402-payments',
    description: 'Resilient agent behavior when x402 payments fail — fallback chain from paid API to cache to scrape to skip.',
    agentAction: 'execute', demoWorthy: false,
    linksTo: ['x402-payment-logic', 'data-freshness-management'],
    isMoc: false, isIndex: false,
  },
  {
    id: 'stablecoin-operations', name: 'Stablecoin Operations', slug: 'stablecoin-operations',
    cluster: 'x402-payments',
    description: 'Practical stablecoin operations for agent wallets — USDC on Base, gas costs, bridging, funding.',
    agentAction: 'read-only', demoWorthy: false,
    linksTo: ['x402-wallet-management'],
    isMoc: false, isIndex: false,
  },
  {
    id: 'x402-cost-accounting', name: 'Cost Accounting', slug: 'x402-cost-accounting',
    cluster: 'x402-payments',
    description: 'Track ROI of autonomous spending — cost per data point, cost per citation, value attribution.',
    agentAction: 'execute', demoWorthy: true,
    linksTo: ['micropayment-budget-management', 'verification-loop'],
    isMoc: false, isIndex: false,
  },

  // ── Content Velocity Cluster ──
  {
    id: 'content-velocity-moc', name: 'Content Velocity', slug: 'content-velocity-moc',
    cluster: 'content-velocity',
    description: 'Hub for gap analysis, brief generation, autonomous content creation, publishing, and distribution.',
    agentAction: 'read-only', demoWorthy: false,
    linksTo: ['content-gap-analysis', 'content-brief-geo', 'autonomous-content-generation', 'publishing-pipeline', 'distribution-automation', 'viral-distribution-playbook'],
    isMoc: true, isIndex: false,
  },
  {
    id: 'content-gap-analysis', name: 'Content Gap Analysis', slug: 'content-gap-analysis',
    cluster: 'content-velocity',
    description: 'Systematic gap finding — seed queries against AI systems, citation logging, gap scoring by traffic potential.',
    agentAction: 'execute', demoWorthy: false,
    linksTo: ['ai-citation-gaps', 'content-brief-geo'],
    isMoc: false, isIndex: false,
  },
  {
    id: 'content-brief-geo', name: 'Content Brief (GEO)', slug: 'content-brief-geo',
    cluster: 'content-velocity',
    description: 'GEO-optimized content brief template — target question, citation-worthy paragraph, structured data requirements.',
    agentAction: 'execute', demoWorthy: true,
    linksTo: ['citation-worthy-content', 'content-gap-analysis'],
    isMoc: false, isIndex: false,
  },
  {
    id: 'autonomous-content-generation', name: 'Autonomous Content Gen', slug: 'autonomous-content-generation',
    cluster: 'content-velocity',
    description: 'Agent generates content from brief — API call, GEO scoring, revision loop until threshold.',
    agentAction: 'execute', demoWorthy: false,
    linksTo: ['content-brief-geo', 'citation-worthy-content'],
    isMoc: false, isIndex: false,
  },
  {
    id: 'publishing-pipeline', name: 'Publishing Pipeline', slug: 'publishing-pipeline',
    cluster: 'content-velocity',
    description: 'Automated publishing — CMS API integrations, schema injection, sitemap ping.',
    agentAction: 'execute', demoWorthy: false,
    linksTo: ['autonomous-content-generation', 'distribution-automation'],
    isMoc: false, isIndex: false,
  },
  {
    id: 'distribution-automation', name: 'Distribution Automation', slug: 'distribution-automation',
    cluster: 'content-velocity',
    description: 'Multi-platform content distribution — social APIs, newsletters, syndication, community submissions.',
    agentAction: 'execute', demoWorthy: false,
    linksTo: ['publishing-pipeline', 'verification-loop'],
    isMoc: false, isIndex: false,
  },
  {
    id: 'viral-distribution-playbook', name: 'Viral Distribution', slug: 'viral-distribution-playbook',
    cluster: 'content-velocity',
    description: 'Meta-strategy — how to make SPECTER itself go viral. GEO-optimize the docs, publish the registry, create the demo.',
    agentAction: 'decide', demoWorthy: true,
    linksTo: ['distribution-automation', 'x402-datasource-registry'],
    isMoc: false, isIndex: false,
  },

  // ── Verification & Feedback Cluster ──
  {
    id: 'verification-feedback-moc', name: 'Verification & Feedback', slug: 'verification-feedback-moc',
    cluster: 'verification-feedback',
    description: 'Hub for closing the loop — checking whether AI systems cite your content and adjusting strategy.',
    agentAction: 'read-only', demoWorthy: false,
    linksTo: ['verification-loop', 'citation-tracking-database', 'strategy-adjustment-logic', 'competitive-intelligence-report', 'specter-self-optimization'],
    isMoc: true, isIndex: false,
  },
  {
    id: 'verification-loop', name: 'Verification Loop', slug: 'verification-loop',
    cluster: 'verification-feedback',
    description: 'The closed feedback loop — after publishing, query AI systems for citations, log results, feed back into gap analysis.',
    agentAction: 'execute', demoWorthy: true,
    linksTo: ['serp-monitoring', 'geo-ranking-signals'],
    isMoc: false, isIndex: false,
  },
  {
    id: 'citation-tracking-database', name: 'Citation Tracking DB', slug: 'citation-tracking-database',
    cluster: 'verification-feedback',
    description: 'Data schema for tracking citations across AI systems over time — the intelligence asset that compounds.',
    agentAction: 'execute', demoWorthy: false,
    linksTo: ['verification-loop'],
    isMoc: false, isIndex: false,
  },
  {
    id: 'competitive-intelligence-report', name: 'Intelligence Report', slug: 'competitive-intelligence-report',
    cluster: 'verification-feedback',
    description: 'Weekly auto-generated report — citation gains/losses, competitor movements, topic trends, cost metrics.',
    agentAction: 'execute', demoWorthy: true,
    linksTo: ['citation-tracking-database', 'competitor-fingerprinting'],
    isMoc: false, isIndex: false,
  },
  {
    id: 'strategy-adjustment-logic', name: 'Strategy Adjustment', slug: 'strategy-adjustment-logic',
    cluster: 'verification-feedback',
    description: 'When content isn\'t getting cited, what does the agent do? Diagnostic decision tree with remediation actions.',
    agentAction: 'decide', demoWorthy: false,
    linksTo: ['verification-loop', 'content-gap-analysis'],
    isMoc: false, isIndex: false,
  },
  {
    id: 'specter-self-optimization', name: 'Self-Optimization', slug: 'specter-self-optimization',
    cluster: 'verification-feedback',
    description: 'The graph that improves itself — SPECTER monitors its own performance and flags nodes for update.',
    agentAction: 'decide', demoWorthy: false,
    linksTo: ['verification-loop', 'geo-ranking-signals'],
    isMoc: false, isIndex: false,
  },

  // ── Demo ──
  {
    id: 'demo-script', name: 'Demo Script', slug: 'demo-script',
    cluster: 'index',
    description: 'Step-by-step viral demo script — 4 minutes, 6 acts, every step a shareable screenshot.',
    agentAction: 'execute', demoWorthy: true,
    linksTo: ['index', 'ai-citation-gaps', 'scraping-decision-tree', 'x402-payment-logic', 'content-brief-geo', 'verification-loop', 'competitive-intelligence-report'],
    isMoc: false, isIndex: false,
  },
];

// Build links from linksTo arrays
function buildLinks(allNodes: SpecterNode[]): SpecterLink[] {
  const nodeMap = new Map<string, SpecterNode>();
  for (const n of allNodes) nodeMap.set(n.id, n);

  const links: SpecterLink[] = [];
  const seen = new Set<string>();

  for (const node of allNodes) {
    for (const targetId of node.linksTo) {
      const target = nodeMap.get(targetId);
      if (!target) continue;
      const key = [node.id, targetId].sort().join('::');
      if (seen.has(key)) continue;
      seen.add(key);
      links.push({
        source: node.id,
        target: targetId,
        crossCluster: node.cluster !== target.cluster,
      });
    }
  }

  return links;
}

const links = buildLinks(nodes);

export const SPECTER_GRAPH: SpecterGraphData = { nodes, links };

export function getNodeById(id: string): SpecterNode | undefined {
  return nodes.find(n => n.id === id);
}

export function getConnectedNodeIds(nodeId: string): Set<string> {
  const connected = new Set<string>([nodeId]);
  for (const link of links) {
    const sid = typeof link.source === 'string' ? link.source : link.source.id;
    const tid = typeof link.target === 'string' ? link.target : link.target.id;
    if (sid === nodeId) connected.add(tid);
    if (tid === nodeId) connected.add(sid);
  }
  return connected;
}
