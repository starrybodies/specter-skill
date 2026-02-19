import { useEffect, useRef, useCallback } from 'react';
import * as d3 from 'd3';
import type { SpecterNode, SpecterLink } from '../lib/graph-types';
import { getClusterColor, nodeRadius } from '../lib/colors';
import { CLUSTER_COLORS } from '../lib/colors';

interface SpecterGraphProps {
  nodes: SpecterNode[];
  links: SpecterLink[];
  selectedNodeId: string | null;
  onSelectNode: (node: SpecterNode | null) => void;
  onHoverNode: (node: SpecterNode | null, x?: number, y?: number) => void;
}

// Draw node shapes by agent_action
function drawNodeShape(
  g: d3.Selection<SVGGElement, SpecterNode, SVGGElement, unknown>,
) {
  // read-only → circle
  g.filter(d => d.agentAction === 'read-only')
    .append('circle')
    .attr('class', 'node-shape')
    .attr('r', d => nodeRadius(d))
    .attr('fill', d => getClusterColor(d.cluster))
    .attr('fill-opacity', d => d.isIndex ? 0.95 : 0.7)
    .attr('stroke', d => getClusterColor(d.cluster))
    .attr('stroke-width', 1.5)
    .attr('stroke-opacity', 0.3);

  // decide → diamond (rotated square)
  g.filter(d => d.agentAction === 'decide')
    .append('rect')
    .attr('class', 'node-shape')
    .attr('width', d => nodeRadius(d) * 1.6)
    .attr('height', d => nodeRadius(d) * 1.6)
    .attr('x', d => -nodeRadius(d) * 0.8)
    .attr('y', d => -nodeRadius(d) * 0.8)
    .attr('rx', 2)
    .attr('transform', 'rotate(45)')
    .attr('fill', d => getClusterColor(d.cluster))
    .attr('fill-opacity', 0.7)
    .attr('stroke', d => getClusterColor(d.cluster))
    .attr('stroke-width', 1.5)
    .attr('stroke-opacity', 0.3);

  // execute → hexagon
  g.filter(d => d.agentAction === 'execute')
    .append('polygon')
    .attr('class', 'node-shape')
    .attr('points', d => {
      const r = nodeRadius(d);
      return Array.from({ length: 6 }, (_, i) => {
        const angle = (Math.PI / 3) * i - Math.PI / 6;
        return `${r * Math.cos(angle)},${r * Math.sin(angle)}`;
      }).join(' ');
    })
    .attr('fill', d => getClusterColor(d.cluster))
    .attr('fill-opacity', 0.8)
    .attr('stroke', d => getClusterColor(d.cluster))
    .attr('stroke-width', 1.5)
    .attr('stroke-opacity', 0.3);

  // pay → circle + dashed outer ring
  g.filter(d => d.agentAction === 'pay')
    .append('circle')
    .attr('class', 'node-shape')
    .attr('r', d => nodeRadius(d))
    .attr('fill', d => getClusterColor(d.cluster))
    .attr('fill-opacity', 0.7)
    .attr('stroke', d => getClusterColor(d.cluster))
    .attr('stroke-width', 1.5)
    .attr('stroke-opacity', 0.3);

  g.filter(d => d.agentAction === 'pay')
    .append('circle')
    .attr('class', 'pay-ring')
    .attr('r', d => nodeRadius(d) + 5)
    .attr('fill', 'none')
    .attr('stroke', d => getClusterColor(d.cluster))
    .attr('stroke-width', 1)
    .attr('stroke-dasharray', '3 3')
    .attr('stroke-opacity', 0.5);
}

export function SpecterGraph({ nodes, links, selectedNodeId, onSelectNode, onHoverNode }: SpecterGraphProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const simulationRef = useRef<d3.Simulation<SpecterNode, SpecterLink> | null>(null);
  const gRef = useRef<d3.Selection<SVGGElement, unknown, null, undefined> | null>(null);
  const zoomRef = useRef<d3.ZoomBehavior<SVGSVGElement, unknown> | null>(null);
  const d3NodesRef = useRef<SpecterNode[]>([]);
  const selectedRef = useRef<string | null>(null);

  // Keep selectedRef in sync
  useEffect(() => {
    selectedRef.current = selectedNodeId;
  }, [selectedNodeId]);

  const focusOnNode = useCallback((nodeId: string) => {
    if (!svgRef.current || !zoomRef.current) return;
    const svg = d3.select(svgRef.current);
    const rect = svgRef.current.getBoundingClientRect();
    const target = d3NodesRef.current.find(n => n.id === nodeId);
    if (!target || target.x == null || target.y == null) return;

    const scale = 2.5;
    const x = -target.x * scale + rect.width / 2;
    const y = -target.y * scale + rect.height / 2;

    svg.transition().duration(750).call(
      zoomRef.current.transform,
      d3.zoomIdentity.translate(x, y).scale(scale),
    );
  }, []);

  // Main D3 render
  useEffect(() => {
    if (!svgRef.current || nodes.length === 0) return;

    const svg = d3.select(svgRef.current);
    const rect = svgRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Deep-copy for D3 mutation
    const simNodes: SpecterNode[] = nodes.map(n => ({ ...n }));
    const simLinks: SpecterLink[] = links.map(l => ({
      ...l,
      source: typeof l.source === 'string' ? l.source : l.source.id,
      target: typeof l.target === 'string' ? l.target : l.target.id,
    }));

    d3NodesRef.current = simNodes;

    if (simulationRef.current) simulationRef.current.stop();

    // Force simulation with orbital clustering
    const simulation = d3
      .forceSimulation<SpecterNode>(simNodes)
      .force('link', d3.forceLink<SpecterNode, SpecterLink>(simLinks)
        .id(d => d.id)
        .distance(l => {
          const src = l.source as SpecterNode;
          const tgt = l.target as SpecterNode;
          if (src.isIndex || tgt.isIndex) return 120;
          if (src.isMoc || tgt.isMoc) return 90;
          return 140;
        }))
      .force('charge', d3.forceManyBody<SpecterNode>().strength(d => {
        if (d.isIndex) return -800;
        if (d.isMoc) return -400;
        return -150;
      }))
      .force('center', d3.forceCenter(width / 2, height / 2).strength(0.05))
      .force('collide', d3.forceCollide<SpecterNode>().radius(d => nodeRadius(d) + 8))
      .force('radial', d3.forceRadial<SpecterNode>(
        d => d.isIndex ? 0 : d.isMoc ? 200 : 350,
        width / 2,
        height / 2,
      ).strength(d => d.isIndex ? 0 : d.isMoc ? 0.3 : 0.08))
      .alphaDecay(0.012);

    simulationRef.current = simulation;

    // Clear & rebuild SVG
    svg.selectAll('*').remove();

    // Defs — glow filters per cluster
    const defs = svg.append('defs');

    for (const [clusterId, config] of Object.entries(CLUSTER_COLORS)) {
      const filter = defs.append('filter')
        .attr('id', `glow-${clusterId}`)
        .attr('x', '-50%').attr('y', '-50%')
        .attr('width', '200%').attr('height', '200%');
      filter.append('feGaussianBlur')
        .attr('stdDeviation', 4)
        .attr('result', 'blur');
      filter.append('feFlood')
        .attr('flood-color', config.hex)
        .attr('flood-opacity', 0.4)
        .attr('result', 'color');
      filter.append('feComposite')
        .attr('in', 'color')
        .attr('in2', 'blur')
        .attr('operator', 'in')
        .attr('result', 'glow');
      const merge = filter.append('feMerge');
      merge.append('feMergeNode').attr('in', 'glow');
      merge.append('feMergeNode').attr('in', 'SourceGraphic');
    }

    // Zoom container
    const g = svg.append('g');
    gRef.current = g;

    const zoom = d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.2, 6])
      .on('zoom', event => g.attr('transform', event.transform));
    svg.call(zoom);
    zoomRef.current = zoom;

    // Edge group
    const linkG = g.append('g').attr('class', 'links');
    const linkSel = linkG
      .selectAll<SVGLineElement, SpecterLink>('line')
      .data(simLinks)
      .join('line')
      .attr('stroke', d => d.crossCluster ? '#1a1a28' : '#2a2a3a')
      .attr('stroke-width', d => d.crossCluster ? 0.8 : 1.2)
      .attr('stroke-opacity', d => d.crossCluster ? 0.2 : 0.35);

    // Edge particles — ~20% of links
    const particleLinks = simLinks.filter(() => Math.random() < 0.2);
    const particleG = g.append('g').attr('class', 'particles');

    function animateParticles() {
      for (const link of particleLinks) {
        const src = link.source as SpecterNode;
        const tgt = link.target as SpecterNode;
        if (src.x == null || tgt.x == null || src.y == null || tgt.y == null) continue;

        const particle = particleG.append('circle')
          .attr('r', 1.5)
          .attr('fill', getClusterColor((src as SpecterNode).cluster))
          .attr('opacity', 0);

        particle
          .transition()
          .duration(2000 + Math.random() * 2000)
          .ease(d3.easeLinear)
          .attrTween('cx', () => {
            const sx = src.x!, tx = tgt.x!;
            return (t: number) => String(sx + (tx - sx) * t);
          })
          .attrTween('cy', () => {
            const sy = src.y!, ty = tgt.y!;
            return (t: number) => String(sy + (ty - sy) * t);
          })
          .attrTween('opacity', () => {
            return (t: number) => {
              if (t < 0.1) return String(t / 0.1);
              if (t > 0.9) return String((1 - t) / 0.1);
              return '1';
            };
          })
          .on('end', function () { d3.select(this).remove(); });
      }
    }

    const particleInterval = setInterval(animateParticles, 3000);
    setTimeout(animateParticles, 500);

    // Node groups
    const nodeG = g.append('g').attr('class', 'nodes');
    const nodeSel = nodeG
      .selectAll<SVGGElement, SpecterNode>('g')
      .data(simNodes, d => d.id)
      .join(enter => {
        const group = enter.append('g')
          .attr('cursor', 'pointer')
          .attr('opacity', 0);

        // Staggered apparition fade-in by cluster
        const clusterOrder: Record<string, number> = {
          'index': 0, 'geo-intelligence': 1, 'scraping-architecture': 2,
          'x402-payments': 3, 'content-velocity': 4, 'verification-feedback': 5,
        };
        group.transition()
          .delay(d => (clusterOrder[d.cluster] ?? 0) * 100 + Math.random() * 200)
          .duration(600)
          .attr('opacity', 1);

        return group;
      });

    // Apply glow filters
    nodeSel
      .attr('filter', d => {
        if (d.agentAction === 'decide') return `url(#glow-${d.cluster})`;
        if (d.agentAction === 'execute' || d.isIndex) return `url(#glow-${d.cluster})`;
        return 'none';
      });

    // Draw shapes
    drawNodeShape(nodeSel);

    // Demo worthy sparkle
    nodeSel.filter(d => d.demoWorthy)
      .append('text')
      .attr('class', 'sparkle')
      .attr('text-anchor', 'middle')
      .attr('dy', d => -(nodeRadius(d) + 6))
      .attr('font-size', 10)
      .attr('fill', d => getClusterColor(d.cluster))
      .text('\u2726');

    // Labels for index + MOC nodes
    const labelG = g.append('g').attr('class', 'labels');
    const labelSel = labelG
      .selectAll<SVGTextElement, SpecterNode>('text')
      .data(simNodes.filter(d => d.isIndex || d.isMoc))
      .join('text')
      .attr('text-anchor', 'start')
      .attr('dx', d => nodeRadius(d) + 8)
      .attr('dy', 4)
      .attr('font-size', d => d.isIndex ? 14 : 11)
      .attr('font-weight', d => d.isIndex ? 700 : 600)
      .attr('font-family', "'JetBrains Mono', monospace")
      .attr('fill', d => getClusterColor(d.cluster))
      .attr('fill-opacity', 0.9)
      .attr('pointer-events', 'none')
      .text(d => d.name);

    // Drag
    const drag = d3.drag<SVGGElement, SpecterNode>()
      .on('start', (event, d) => {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x; d.fy = d.y;
      })
      .on('drag', (event, d) => { d.fx = event.x; d.fy = event.y; })
      .on('end', (event, d) => {
        if (!event.active) simulation.alphaTarget(0);
        d.fx = null; d.fy = null;
      });
    nodeSel.call(drag);

    // Selection ripple helper
    const addRipple = (node: SpecterNode) => {
      if (node.x == null || node.y == null) return;
      const ripple = g.append('circle')
        .attr('cx', node.x)
        .attr('cy', node.y)
        .attr('r', 0)
        .attr('fill', 'none')
        .attr('stroke', getClusterColor(node.cluster))
        .attr('stroke-width', 2)
        .attr('opacity', 0.6);
      ripple.transition()
        .duration(500)
        .attr('r', 60)
        .attr('opacity', 0)
        .attr('stroke-width', 0.5)
        .on('end', function () { d3.select(this).remove(); });
    };

    // Apply highlight to connected nodes
    const applyHighlight = (nodeId: string | null) => {
      if (!nodeId) {
        nodeSel.attr('opacity', 1);
        linkSel
          .attr('stroke', d => d.crossCluster ? '#1a1a28' : '#2a2a3a')
          .attr('stroke-width', d => d.crossCluster ? 0.8 : 1.2)
          .attr('stroke-opacity', d => d.crossCluster ? 0.2 : 0.35);
        labelSel.attr('opacity', 0.9);
        return;
      }

      const connected = new Set<string>([nodeId]);
      simLinks.forEach(l => {
        const sid = typeof l.source === 'object' ? l.source.id : l.source;
        const tid = typeof l.target === 'object' ? l.target.id : l.target;
        if (sid === nodeId) connected.add(tid as string);
        if (tid === nodeId) connected.add(sid as string);
      });

      nodeSel.attr('opacity', n => connected.has(n.id) ? 1 : 0.08);
      linkSel
        .attr('stroke-opacity', l => {
          const sid = typeof l.source === 'object' ? l.source.id : l.source;
          const tid = typeof l.target === 'object' ? l.target.id : l.target;
          return sid === nodeId || tid === nodeId ? 0.8 : 0.03;
        })
        .attr('stroke', l => {
          const sid = typeof l.source === 'object' ? l.source.id : l.source;
          const tid = typeof l.target === 'object' ? l.target.id : l.target;
          if (sid === nodeId || tid === nodeId) {
            const node = simNodes.find(n => n.id === nodeId);
            return node ? getClusterColor(node.cluster) : '#667eea';
          }
          return l.crossCluster ? '#1a1a28' : '#2a2a3a';
        })
        .attr('stroke-width', l => {
          const sid = typeof l.source === 'object' ? l.source.id : l.source;
          const tid = typeof l.target === 'object' ? l.target.id : l.target;
          return sid === nodeId || tid === nodeId ? 2 : (l.crossCluster ? 0.8 : 1.2);
        });
      labelSel.attr('opacity', n => connected.has(n.id) ? 0.9 : 0.1);
    };

    // Interactions
    nodeSel
      .on('click', (event, d) => {
        event.stopPropagation();
        onSelectNode(d);
        addRipple(d);
        applyHighlight(d.id);
      })
      .on('mouseenter', (event, d) => {
        onHoverNode(d, event.clientX, event.clientY);
        if (!selectedRef.current) {
          applyHighlight(d.id);
        }
      })
      .on('mouseleave', () => {
        onHoverNode(null);
        if (!selectedRef.current) {
          applyHighlight(null);
        } else {
          applyHighlight(selectedRef.current);
        }
      });

    // Click background to deselect
    svg.on('click', () => {
      onSelectNode(null);
      applyHighlight(null);
    });

    // Tick
    simulation.on('tick', () => {
      linkSel
        .attr('x1', d => (d.source as SpecterNode).x!)
        .attr('y1', d => (d.source as SpecterNode).y!)
        .attr('x2', d => {
          const src = d.source as SpecterNode; const tgt = d.target as SpecterNode;
          const dx = tgt.x! - src.x!; const dy = tgt.y! - src.y!;
          const dist = Math.sqrt(dx * dx + dy * dy) || 1;
          return tgt.x! - (dx / dist) * nodeRadius(tgt);
        })
        .attr('y2', d => {
          const src = d.source as SpecterNode; const tgt = d.target as SpecterNode;
          const dx = tgt.x! - src.x!; const dy = tgt.y! - src.y!;
          const dist = Math.sqrt(dx * dx + dy * dy) || 1;
          return tgt.y! - (dy / dist) * nodeRadius(tgt);
        });

      nodeSel.attr('transform', d => `translate(${d.x},${d.y})`);
      labelSel.attr('x', d => d.x!).attr('y', d => d.y!);
    });

    // If there's already a selection, apply highlight
    if (selectedRef.current) {
      // Delay so simulation has initial positions
      setTimeout(() => {
        applyHighlight(selectedRef.current);
        if (selectedRef.current) focusOnNode(selectedRef.current);
      }, 100);
    }

    return () => {
      simulation.stop();
      clearInterval(particleInterval);
    };
  }, [nodes, links, onSelectNode, onHoverNode, focusOnNode]);

  return (
    <div className="relative h-full w-full animate-ambient-breathe">
      <svg
        ref={svgRef}
        className="h-full w-full"
        style={{ display: 'block', background: '#0a0a0f' }}
      />
    </div>
  );
}
