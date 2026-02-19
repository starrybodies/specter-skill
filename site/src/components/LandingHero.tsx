import { useEffect, useState } from 'react';
import { CLUSTER_COLORS } from '../lib/colors';
import type { ClusterId } from '../lib/graph-types';

const LOOP_STEPS = [
  { label: 'Monitor', color: '#00e5ff', desc: 'Find where AI isn\'t citing you' },
  { label: 'Scrape', color: '#76ff03', desc: 'Acquire competitive intelligence' },
  { label: 'Pay', color: '#ffc400', desc: 'Buy data via x402 micropayments' },
  { label: 'Generate', color: '#e040fb', desc: 'Produce citation-worthy content' },
  { label: 'Publish', color: '#e040fb', desc: 'Push to CMS at machine speed' },
  { label: 'Verify', color: '#ff6e40', desc: 'Confirm AI citations appeared' },
] as const;

const CLUSTER_ORDER: ClusterId[] = [
  'geo-intelligence', 'scraping-architecture', 'x402-payments',
  'content-velocity', 'verification-feedback',
];

const CLUSTER_NODE_COUNTS: Record<string, number> = {
  'geo-intelligence': 10,
  'scraping-architecture': 9,
  'x402-payments': 9,
  'content-velocity': 7,
  'verification-feedback': 6,
};

interface LandingHeroProps {
  onScrollToGraph: () => void;
}

export function LandingHero({ onScrollToGraph }: LandingHeroProps) {
  const [activeStep, setActiveStep] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep(prev => (prev + 1) % LOOP_STEPS.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(
      '/plugin marketplace add starrybodies/specter-skill\n/plugin install specter'
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 hero-scanline overflow-hidden">
      {/* Ambient glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-[0.03]"
        style={{ background: 'radial-gradient(circle, #00e5ff 0%, transparent 70%)' }} />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-[0.03]"
        style={{ background: 'radial-gradient(circle, #e040fb 0%, transparent 70%)' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.02]"
        style={{ background: 'radial-gradient(circle, #ffc400 0%, transparent 70%)' }} />

      {/* Ghost ASCII */}
      <pre
        className="text-[#6b7280] text-[10px] leading-[1.15] select-none mb-6 animate-fade-in-up"
        style={{ animationDelay: '100ms' }}
        aria-hidden
      >
{`     ▄████▄
    █░░▀▀░░█
    █░░░░░░█
    █░░░░░░█
     ▀█▀▀█▀
      ▀  ▀`}
      </pre>

      {/* Title */}
      <h1
        className="text-5xl md:text-7xl font-bold tracking-[0.3em] text-white animate-fade-in-up"
        style={{
          textShadow: '0 0 40px rgba(255,255,255,0.2), 0 0 80px rgba(255,255,255,0.05)',
          animationDelay: '200ms',
        }}
      >
        SPECTER
      </h1>

      {/* Subtitle */}
      <p
        className="mt-3 text-[10px] md:text-xs uppercase tracking-[0.25em] text-[#6b7280] animate-fade-in-up"
        style={{ animationDelay: '350ms' }}
      >
        Self-Paying Engine for Content Targeting, Extraction &amp; Ranking
      </p>

      {/* Pitch */}
      <p
        className="mt-8 max-w-xl text-center text-sm md:text-base leading-relaxed text-[#c0c8d8] animate-fade-in-up"
        style={{ animationDelay: '500ms' }}
      >
        The first open-source autonomous{' '}
        <span className="text-[#00e5ff]">GEO</span> agent.{' '}
        42 skill nodes that teach AI agents how to get your content{' '}
        <span className="text-white font-semibold">cited</span> by Perplexity, ChatGPT, and Claude.
      </p>

      {/* The Loop — animated */}
      <div
        className="mt-10 flex flex-wrap items-center justify-center gap-2 md:gap-0 animate-fade-in-up"
        style={{ animationDelay: '650ms' }}
      >
        {LOOP_STEPS.map((step, i) => (
          <div key={step.label} className="flex items-center">
            <button
              className="group relative px-3 py-1.5 text-xs transition-all duration-300"
              style={{
                color: activeStep === i ? step.color : '#6b7280',
                textShadow: activeStep === i ? `0 0 12px ${step.color}40` : 'none',
              }}
              onMouseEnter={() => setActiveStep(i)}
            >
              {step.label}
              {/* Tooltip on active */}
              <span
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[9px] transition-opacity duration-300"
                style={{
                  color: step.color,
                  opacity: activeStep === i ? 0.7 : 0,
                }}
              >
                {step.desc}
              </span>
            </button>
            {i < LOOP_STEPS.length - 1 && (
              <span
                className="text-[10px] mx-1 transition-colors duration-300 hidden md:inline"
                style={{ color: activeStep === i ? step.color : '#1e1e2e' }}
              >
                →
              </span>
            )}
          </div>
        ))}
        {/* Loop-back arrow */}
        <span className="text-[10px] ml-1 hidden md:inline" style={{ color: '#ff6e40', opacity: 0.4 }}>↺</span>
      </div>

      {/* Cluster badges */}
      <div
        className="mt-14 flex flex-wrap justify-center gap-3 animate-fade-in-up"
        style={{ animationDelay: '800ms' }}
      >
        {CLUSTER_ORDER.map(cluster => {
          const c = CLUSTER_COLORS[cluster];
          return (
            <div
              key={cluster}
              className="flex items-center gap-2 rounded border px-3 py-1.5"
              style={{
                borderColor: c.hex + '20',
                background: c.hex + '08',
              }}
            >
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: c.hex, boxShadow: `0 0 6px ${c.glow}` }}
              />
              <span className="text-[10px]" style={{ color: c.hex }}>{c.label}</span>
              <span className="text-[10px] text-[#6b7280]">{CLUSTER_NODE_COUNTS[cluster]}</span>
            </div>
          );
        })}
      </div>

      {/* Install block */}
      <div
        className="mt-12 w-full max-w-md animate-fade-in-up"
        style={{ animationDelay: '950ms' }}
      >
        <div className="terminal-box rounded overflow-hidden">
          <div className="terminal-box-header flex items-center justify-between">
            <span>install</span>
            <button
              onClick={handleCopy}
              className="text-[10px] px-2 py-0.5 rounded border border-[#1e1e2e] text-[#6b7280] hover:text-white hover:border-[#c0c8d8] transition-colors"
            >
              {copied ? '✓ copied' : 'copy'}
            </button>
          </div>
          <pre className="px-4 py-3 text-[11px] leading-relaxed">
            <span className="text-[#6b7280]">{'>'}</span>{' '}
            <span className="text-[#76ff03]">/plugin marketplace add</span>{' '}
            <span className="text-[#c0c8d8]">starrybodies/specter-skill</span>
            {'\n'}
            <span className="text-[#6b7280]">{'>'}</span>{' '}
            <span className="text-[#76ff03]">/plugin install</span>{' '}
            <span className="text-white">specter</span>
          </pre>
        </div>
      </div>

      {/* Scroll CTA */}
      <button
        onClick={onScrollToGraph}
        className="mt-16 flex flex-col items-center gap-2 text-[#6b7280] hover:text-[#00e5ff] transition-colors animate-fade-in-up group"
        style={{ animationDelay: '1100ms' }}
      >
        <span className="text-[10px] uppercase tracking-[0.2em]">Explore the graph</span>
        <span className="text-lg group-hover:translate-y-1 transition-transform">↓</span>
      </button>
    </section>
  );
}
