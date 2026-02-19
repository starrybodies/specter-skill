# SPECTER

**Self-Paying Engine for Content Targeting, Extraction and Ranking**

SPECTER is the first open-source autonomous GEO (Generative Engine Optimization) agent. It's a 42-node skill graph that teaches AI agents how to win at AI citation — getting your content cited by Perplexity, ChatGPT, Claude, and other AI systems. Traditional SEO ranks pages; GEO gets you cited. SPECTER automates the entire loop: monitor what AI systems are pulling from, scrape competitor sources, generate gap-filling content, publish it, and verify citations — paying for data access along the way using agent micropayments.

## Install

```bash
# Add the marketplace
/plugin marketplace add starrybodies/specter-skill

# Install the plugin
/plugin install specter
```

Or load locally for testing:

```bash
claude --plugin-dir /path/to/specter-skill
```

## What's Inside

43 nodes across 5 clusters plus an index and a demo script:

| Cluster | Nodes | Purpose |
|---|---|---|
| GEO Intelligence | 10 | How AI systems retrieve and cite content |
| Scraping Architecture | 9 | Autonomous data collection pipelines |
| x402 Payments | 9 | Micropayment logic for agent wallets |
| Content Velocity | 7 | Gap analysis → content generation → publishing |
| Verification & Feedback | 6 | Citation tracking and strategy adjustment |

Plus 1 index node and 1 demo script = 43 total nodes.

## The SPECTER Loop

```
Monitor → Scrape → Pay → Generate → Publish → Verify → Repeat
```

- **Monitor** — Track which sources AI systems are citing in your niche
- **Scrape** — Collect content from those sources using autonomous pipelines
- **Pay** — Use x402 micropayments to unlock paywalled or metered data
- **Generate** — Identify citation gaps and produce content that fills them
- **Publish** — Deploy content to the right surfaces at the right velocity
- **Verify** — Confirm citations appeared and measure AI visibility lift
- **Repeat** — Feed results back into the monitor to close the loop

## Usage

When you're working on GEO, content strategy, AI visibility, or related tasks, Claude Code will automatically suggest the SPECTER skill. The skill includes a router that directs you to the relevant cluster based on your task.

## License

MIT
