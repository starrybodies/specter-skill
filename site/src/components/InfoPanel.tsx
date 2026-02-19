import { AsciiBox } from './AsciiBox';
import { CLUSTER_COLORS } from '../lib/colors';
import type { ClusterId } from '../lib/graph-types';

interface InfoPanelProps {
  onClose: () => void;
}

const CLUSTER_ORDER: ClusterId[] = [
  'geo-intelligence', 'scraping-architecture', 'x402-payments',
  'content-velocity', 'verification-feedback',
];

export function InfoPanel({ onClose }: InfoPanelProps) {
  return (
    <div className="absolute inset-0 z-30 flex items-center justify-center bg-[#0a0a0f]/80 backdrop-blur-sm">
      <div className="detail-scroll max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded border border-[#1e1e2e] bg-[#0a0a0f]">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#1e1e2e] px-6 py-4">
          <div className="flex items-center gap-3">
            <pre className="text-[8px] leading-[1.1] text-[#6b7280] select-none" aria-hidden>
{`  ▄██▄
 █░▀▀░█
 █░░░░█
  ▀█▀█▀`}
            </pre>
            <div>
              <h2
                className="text-xl font-bold tracking-[0.2em] text-white"
                style={{ textShadow: '0 0 20px rgba(255,255,255,0.3)' }}
              >
                SPECTER
              </h2>
              <span className="text-[10px] uppercase tracking-[0.15em] text-[#6b7280]">
                Skill Graph Visualizer
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded px-3 py-1 text-sm text-[#6b7280] transition-colors hover:bg-[#1e1e2e] hover:text-white"
          >
            esc / close
          </button>
        </div>

        <div className="space-y-4 p-6">
          {/* What is this */}
          <AsciiBox title="what is this?">
            <p className="text-xs leading-relaxed text-[#c0c8d8]">
              SPECTER is the first open-source autonomous GEO (Generative Engine Optimization)
              agent. This visualizer maps its skill graph — the knowledge architecture that
              teaches an AI agent to <span className="text-[#76ff03]">scrape</span>,{' '}
              <span className="text-[#ffc400]">pay</span>,{' '}
              <span className="text-[#e040fb]">publish</span>, and{' '}
              <span className="text-[#ff6e40]">verify</span> content for AI citation
              without human intervention at each step.
            </p>
            <p className="mt-2 text-xs leading-relaxed text-[#c0c8d8]">
              The graph has <span className="text-white font-semibold">43 nodes</span> across{' '}
              <span className="text-white font-semibold">5 clusters</span>, connected by ~85
              edges. Each node is a discrete skill — a piece of knowledge the agent loads when
              it needs to act.
            </p>
          </AsciiBox>

          {/* Clusters */}
          <AsciiBox title="clusters">
            <div className="space-y-2">
              {CLUSTER_ORDER.map(cluster => {
                const c = CLUSTER_COLORS[cluster];
                return (
                  <div key={cluster} className="flex items-start gap-3">
                    <span
                      className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full"
                      style={{ backgroundColor: c.hex, boxShadow: `0 0 6px ${c.glow}` }}
                    />
                    <div>
                      <span className="text-xs font-semibold" style={{ color: c.hex }}>{c.label}</span>
                      <p className="text-[11px] text-[#6b7280]">
                        {cluster === 'geo-intelligence' && 'How AI systems retrieve and cite content — the theoretical foundation.'}
                        {cluster === 'scraping-architecture' && 'Autonomous data collection — targets, extraction, proxies, ethics.'}
                        {cluster === 'x402-payments' && 'Micropayment logic — when to pay, budget governance, cost tracking.'}
                        {cluster === 'content-velocity' && 'Gap analysis, brief generation, autonomous publishing, distribution.'}
                        {cluster === 'verification-feedback' && 'Citation tracking, strategy adjustment, self-optimization.'}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </AsciiBox>

          {/* Node shapes */}
          <AsciiBox title="node shapes">
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center gap-2">
                <span className="text-sm text-[#c0c8d8]">◉</span>
                <div>
                  <span className="text-[11px] text-[#c0c8d8]">Circle</span>
                  <span className="ml-1 text-[10px] text-[#6b7280]">— read-only</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-[#c0c8d8]">◇</span>
                <div>
                  <span className="text-[11px] text-[#c0c8d8]">Diamond</span>
                  <span className="ml-1 text-[10px] text-[#6b7280]">— decide</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-[#c0c8d8]">⬡</span>
                <div>
                  <span className="text-[11px] text-[#c0c8d8]">Hexagon</span>
                  <span className="ml-1 text-[10px] text-[#6b7280]">— execute</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-[#c0c8d8]">◎</span>
                <div>
                  <span className="text-[11px] text-[#c0c8d8]">Ringed</span>
                  <span className="ml-1 text-[10px] text-[#6b7280]">— pay</span>
                </div>
              </div>
            </div>
            <p className="mt-2 text-[10px] text-[#6b7280]">
              Nodes with ✦ are <span className="text-[#ffc400]">demo-worthy</span> — key skills for showcasing SPECTER.
            </p>
          </AsciiBox>

          {/* Interactions */}
          <AsciiBox title="interactions">
            <div className="space-y-1.5 text-xs text-[#c0c8d8]">
              <div className="flex gap-3">
                <span className="w-20 shrink-0 text-[#6b7280]">click</span>
                <span>Select node, highlight connections, open detail panel</span>
              </div>
              <div className="flex gap-3">
                <span className="w-20 shrink-0 text-[#6b7280]">hover</span>
                <span>Tooltip with name and description</span>
              </div>
              <div className="flex gap-3">
                <span className="w-20 shrink-0 text-[#6b7280]">drag</span>
                <span>Reposition nodes</span>
              </div>
              <div className="flex gap-3">
                <span className="w-20 shrink-0 text-[#6b7280]">scroll</span>
                <span>Zoom in/out (0.2x – 6x)</span>
              </div>
              <div className="flex gap-3">
                <span className="w-20 shrink-0 text-[#6b7280]">legend</span>
                <span>Toggle entire clusters on/off (bottom-left)</span>
              </div>
              <div className="flex gap-3">
                <span className="w-20 shrink-0 text-[#6b7280]">panel</span>
                <span>Click connected nodes in the detail panel to navigate</span>
              </div>
            </div>
          </AsciiBox>

          {/* Install */}
          <AsciiBox title="install the skill">
            <div className="space-y-3">
              <div>
                <p className="text-[10px] uppercase tracking-wider text-[#6b7280]">claude code plugin</p>
                <pre className="mt-1 rounded bg-[#12121a] border border-[#1e1e2e] px-3 py-2 text-[11px] text-[#76ff03]">
{`/plugin marketplace add starrybodies/specter-skill
/plugin install specter`}
                </pre>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-[#6b7280]">what you get</p>
                <p className="mt-1 text-xs text-[#c0c8d8]">
                  A single SKILL.md with all 42 nodes inline — the complete GEO agent
                  knowledge graph loaded into Claude Code on demand.
                </p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-[#6b7280]">repo</p>
                <pre className="mt-1 rounded bg-[#12121a] border border-[#1e1e2e] px-3 py-2 text-[11px] text-[#00e5ff]">
{`github.com/starrybodies/specter-skill`}
                </pre>
              </div>
            </div>
          </AsciiBox>

          {/* Footer */}
          <div className="text-center text-[10px] text-[#6b7280]">
            <a href="https://github.com/starrybodies/specter-skill" className="text-[#00e5ff] hover:underline">starrybodies/specter-skill</a> &middot; press <span className="rounded bg-[#1e1e2e] px-1.5 py-0.5 text-[#c0c8d8]">?</span> to toggle this panel
          </div>
        </div>
      </div>
    </div>
  );
}
