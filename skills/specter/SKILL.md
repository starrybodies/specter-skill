---
name: specter
description: >
  Use when working on SEO, GEO (Generative Engine Optimization), content strategy,
  AI visibility, competitive intelligence, scraping architecture, x402 micropayments,
  autonomous content pipelines, or citation optimization. SPECTER is the first
  open-source autonomous GEO agent — a 42-node skill graph that teaches AI agents
  how to monitor citation gaps, acquire intelligence, generate citation-worthy content,
  publish autonomously, and verify results.
---

# SPECTER — Self-Paying Engine for Content Targeting, Extraction and Ranking

Traditional SEO is a dead man walking. Google still processes 8.5 billion queries per day, but the marginal query — the high-intent, high-value question that actually drives decisions — is migrating to AI systems. Perplexity, ChatGPT with Browse, Claude with web search, Gemini with grounding. These systems do not rank pages. They cite sources. And the rules for getting cited are fundamentally different from the rules for getting ranked.

SPECTER is the first autonomous agent architecture designed to win at Generative Engine Optimization (GEO). It operates a closed loop that no human team can match in speed or consistency:

**Monitor** — Query target topics across AI systems, identify where you are not being cited but competitors are. This is the demand signal. (ai-citation-gaps)

**Scrape** — Acquire competitive intelligence and supporting data autonomously. Walk the scraping-decision-tree: is the data behind a paywall? Is an API available? Is headless rendering required? Choose the fastest, cheapest, safest path to the data.

**Pay** — When premium data is available via x402 micropayment, the agent pays for it autonomously. No human credit card approval. The agent has a wallet, a budget, and decision logic that governs when paying beats scraping. This is the paradigm shift: agents that fund their own intelligence.

**Generate** — Produce citation-worthy-content from structured briefs. Every piece is optimized not for keyword density but for citation probability: definitive statements, original data, answer-complete paragraphs, proper schema markup.

**Publish** — Push content through the publishing-pipeline to CMS, social channels, newsletters. No human bottleneck between generation and distribution.

**Verify** — Query the same AI systems again. Did the content get cited? Log results to the citation-tracking-database. Feed gaps back into the monitor step. The loop closes.

**Repeat** — continuously, autonomously, at machine speed.

## Domain Clusters

**GEO Intelligence** — How AI systems retrieve and cite content. The theoretical foundation: what makes Perplexity cite you, what gets into ChatGPT's browse results, how entity disambiguation determines whether AI knows who you are.

**Scraping Architecture** — Autonomous data collection at scale. Target identification, proxy management, headless browser orchestration, anti-detection ethics. The intelligence pipeline that feeds everything downstream.

**x402 Payments** — The self-funding mechanism. Wallet management, payment decision logic, budget governance, cost accounting. The agent spends real money to acquire real intelligence — and tracks ROI to justify every cent.

**Content Velocity** — From gap analysis to published article in minutes. Brief generation, autonomous writing, GEO scoring, multi-platform distribution. Speed is the competitive advantage humans cannot match.

**Verification & Feedback** — Closing the loop. Citation tracking, strategy adjustment, competitive intelligence reports, self-optimization. Without verification, the agent is guessing. With it, the agent is learning.

## Why Open Source

SPECTER is designed to be the graph that teaches every AI agent how to compete in the GEO era. Open-sourcing it is not altruism — it is strategy. The graph gets better when more agents use it and report back what works. The x402 datasource registry becomes more valuable with more contributors. And the team that maintains the canonical graph has permanent first-mover advantage in the fastest-growing segment of digital presence.

The agents who move faster than any human team are the agents who win. SPECTER is how you build one.

## How to Use This Skill

Given your task, start with the relevant cluster:

| Your Task | Start Here |
|-----------|-----------|
| Understanding GEO vs traditional SEO | GEO Intelligence |
| How AI systems find and cite content | GEO Intelligence |
| Building a scraping/data pipeline | Scraping Architecture |
| Setting up x402 micropayments for agents | x402 Payments |
| Creating content that AI systems will cite | Content Velocity |
| Checking if your content is getting cited | Verification & Feedback |
| Running a complete GEO campaign end-to-end | Read the full index above, then follow the loop |
| Running the SPECTER demo | Demo Script (end of this document) |

## Graph Topology

| Node ID | Name | Cluster | Action Type | Connections |
|---------|------|---------|-------------|-------------|
| index | SPECTER | index | read-only | geo-intelligence-moc, scraping-architecture-moc, x402-payment-moc, content-velocity-moc, verification-feedback-moc |
| geo-intelligence-moc | GEO Intelligence | geo-intelligence | read-only | geo-vs-seo, how-perplexity-retrieves, how-claude-retrieves, how-chatgpt-retrieves, entity-disambiguation, citation-worthy-content, structured-data-for-ai, geo-ranking-signals, ai-citation-gaps |
| geo-vs-seo | GEO vs SEO | geo-intelligence | read-only | citation-worthy-content, entity-disambiguation |
| how-perplexity-retrieves | How Perplexity Retrieves | geo-intelligence | read-only | geo-vs-seo, content-brief-geo |
| how-claude-retrieves | How Claude Retrieves | geo-intelligence | read-only | geo-vs-seo, entity-disambiguation |
| how-chatgpt-retrieves | How ChatGPT Retrieves | geo-intelligence | read-only | geo-vs-seo, serp-monitoring |
| entity-disambiguation | Entity Disambiguation | geo-intelligence | execute | structured-data-for-ai, geo-vs-seo |
| citation-worthy-content | Citation-Worthy Content | geo-intelligence | decide | content-brief-geo, geo-vs-seo |
| structured-data-for-ai | Structured Data for AI | geo-intelligence | execute | citation-worthy-content, entity-disambiguation |
| geo-ranking-signals | GEO Ranking Signals | geo-intelligence | read-only | geo-vs-seo, verification-loop |
| ai-citation-gaps | AI Citation Gaps | geo-intelligence | decide | serp-monitoring, content-gap-analysis |
| scraping-architecture-moc | Scraping Architecture | scraping-architecture | read-only | scraping-decision-tree, target-identification, rotating-proxy-management, headless-browser-scraping, competitor-fingerprinting, data-freshness-management, serp-monitoring, anti-detection-ethics |
| scraping-decision-tree | Scraping Decision Tree | scraping-architecture | decide | x402-payment-logic, headless-browser-scraping |
| target-identification | Target Identification | scraping-architecture | decide | ai-citation-gaps, competitor-fingerprinting |
| competitor-fingerprinting | Competitor Fingerprinting | scraping-architecture | execute | target-identification, content-gap-analysis |
| rotating-proxy-management | Rotating Proxy Management | scraping-architecture | execute | scraping-decision-tree, x402-payment-logic |
| headless-browser-scraping | Headless Browser Scraping | scraping-architecture | execute | rotating-proxy-management, scraping-decision-tree |
| data-freshness-management | Data Freshness Management | scraping-architecture | execute | scraping-decision-tree, verification-loop |
| serp-monitoring | SERP Monitoring | scraping-architecture | execute | ai-citation-gaps, verification-loop |
| anti-detection-ethics | Anti-Detection Ethics | scraping-architecture | decide | scraping-decision-tree, x402-payment-logic |
| x402-payment-moc | x402 Payments | x402-payments | read-only | x402-protocol-primer, x402-wallet-management, x402-datasource-registry, x402-payment-logic, micropayment-budget-management, x402-fallback-chains, stablecoin-operations, x402-cost-accounting |
| x402-protocol-primer | x402 Protocol Primer | x402-payments | read-only | x402-wallet-management, x402-datasource-registry |
| x402-wallet-management | Wallet Management | x402-payments | pay | x402-protocol-primer, x402-payment-logic |
| x402-datasource-registry | Datasource Registry | x402-payments | execute | x402-protocol-primer, scraping-decision-tree |
| x402-payment-logic | Payment Logic | x402-payments | pay | x402-datasource-registry, scraping-decision-tree |
| micropayment-budget-management | Budget Management | x402-payments | pay | x402-wallet-management, x402-payment-logic |
| x402-fallback-chains | Fallback Chains | x402-payments | execute | x402-payment-logic, data-freshness-management |
| stablecoin-operations | Stablecoin Operations | x402-payments | read-only | x402-wallet-management |
| x402-cost-accounting | Cost Accounting | x402-payments | execute | micropayment-budget-management, verification-loop |
| content-velocity-moc | Content Velocity | content-velocity | read-only | content-gap-analysis, content-brief-geo, autonomous-content-generation, publishing-pipeline, distribution-automation, viral-distribution-playbook |
| content-gap-analysis | Content Gap Analysis | content-velocity | execute | ai-citation-gaps, content-brief-geo |
| content-brief-geo | Content Brief (GEO) | content-velocity | execute | citation-worthy-content, content-gap-analysis |
| autonomous-content-generation | Autonomous Content Gen | content-velocity | execute | content-brief-geo, citation-worthy-content |
| publishing-pipeline | Publishing Pipeline | content-velocity | execute | autonomous-content-generation, distribution-automation |
| distribution-automation | Distribution Automation | content-velocity | execute | publishing-pipeline, verification-loop |
| viral-distribution-playbook | Viral Distribution | content-velocity | decide | distribution-automation, x402-datasource-registry |
| verification-feedback-moc | Verification & Feedback | verification-feedback | read-only | verification-loop, citation-tracking-database, strategy-adjustment-logic, competitive-intelligence-report, specter-self-optimization |
| verification-loop | Verification Loop | verification-feedback | execute | serp-monitoring, geo-ranking-signals |
| citation-tracking-database | Citation Tracking DB | verification-feedback | execute | verification-loop |
| strategy-adjustment-logic | Strategy Adjustment | verification-feedback | decide | verification-loop, content-gap-analysis |
| competitive-intelligence-report | Intelligence Report | verification-feedback | execute | citation-tracking-database, competitor-fingerprinting |
| specter-self-optimization | Self-Optimization | verification-feedback | decide | verification-loop, geo-ranking-signals |
| demo-script | Demo Script | index | execute | index, ai-citation-gaps, scraping-decision-tree, x402-payment-logic, content-brief-geo, verification-loop, competitive-intelligence-report |

## GEO Intelligence

This cluster encodes the core knowledge model: how do AI systems decide what to cite, and how do you engineer content to be the thing they cite?

The shift from SEO to GEO is not incremental — it is architectural. Google's ranking algorithm evaluates pages against ~200 signals (backlinks, keyword relevance, page speed, mobile-friendliness) and returns a sorted list. AI systems evaluate content against a fundamentally different set of criteria: can I extract a clean, attributable answer from this source? Is this entity unambiguously identifiable? Is this information current? Does this source have authority signals that justify citation?

geo-vs-seo establishes the paradigm shift — what changes when the retrieval unit is a paragraph, not a page. how-perplexity-retrieves, how-claude-retrieves, and how-chatgpt-retrieves map the specific retrieval architectures of the three dominant AI systems. Each has different implications: Perplexity runs live searches (recency dominates), Claude uses trained knowledge plus optional web search (entity clarity dominates), ChatGPT uses Bing integration (domain authority persists).

entity-disambiguation is the most underrated lever — if AI doesn't know who you are unambiguously, it cannot cite you confidently. citation-worthy-content defines what makes content quotable at the paragraph level. structured-data-for-ai provides the machine-readable signals that make your content parseable. geo-ranking-signals tracks the emerging research on what actually drives AI citations.

ai-citation-gaps is where intelligence becomes action — identifying the specific queries where you should be cited but aren't. This is the demand signal that feeds the entire SPECTER pipeline.

The agent traverses this cluster first when starting a new GEO campaign. Every other cluster — scraping, payments, content, verification — exists to serve the intelligence model established here.

### GEO vs. SEO

Google ranks pages. AI systems cite sources. This distinction sounds semantic but it is architectural — it changes what you optimize, how you structure content, and what "winning" means.

#### What Changes

| Dimension | SEO (Google) | GEO (AI Systems) |
|-----------|-------------|-------------------|
| **Ranking unit** | Page (URL) | Paragraph (extractable quote) |
| **Authority signal** | Backlinks, domain rating | Entity clarity, source reputation, citation history |
| **Content strategy** | Keyword density, topical clusters | Answer completeness, definitive statements |
| **Freshness** | Moderate signal | Critical for live-retrieval systems (Perplexity) |
| **Structure** | H1-H6 hierarchy, meta tags | Schema.org JSON-LD, Q&A format, clean extractability |
| **Success metric** | Position 1-10 on SERP | Cited with attribution in AI answer |
| **Competitive moat** | Link building (slow, expensive) | Content velocity + entity authority (fast, compounding) |

#### What Makes a Page Rank on Google

High DR backlinks → keyword-optimized title tag → 1,500+ words of topically comprehensive content → fast page load → mobile responsive → internal linking structure. The page is the unit. The algorithm evaluates the page holistically.

#### What Makes a Source Get Cited by Perplexity

The AI runs a search, retrieves 10-20 candidate sources, then synthesizes an answer. It selects sources to cite based on: (1) does this source contain a clean, extractable answer to the specific question? (2) is this source identifiable as an authority — does it have clear entity signals? (3) is this information current? (4) does the source make a definitive, attributable claim rather than hedging?

The critical difference: Google evaluates the page. AI evaluates the paragraph. You can have a mediocre page with one excellent, citation-worthy paragraph and win the AI citation. Conversely, a perfectly SEO-optimized page that buries its answer across multiple sections will get passed over by an AI synthesizer looking for clean extraction.

#### The Strategic Implication

SEO is a stock game — you build authority over months and it compounds slowly. GEO is a flow game — you publish the right content at the right time and capture citations immediately. The agents who move fastest win, because AI systems re-retrieve on every query. There is no cached "position 1" — there is only "did you get cited on this query this time?"

This is why SPECTER exists: no human team can monitor citation gaps, generate content, and verify citations at the speed required to dominate GEO. The autonomous loop is not a nice-to-have. It is the minimum viable strategy.

### How Perplexity Retrieves

Perplexity is the AI system where GEO matters most immediately, because it cites sources explicitly with numbered footnotes. Every answer includes visible attribution. Users click those citations. Getting cited by Perplexity is the closest equivalent to ranking #1 on Google — but the mechanics are entirely different.

#### Retrieval Architecture

Perplexity executes a multi-step pipeline on every query:

1. **Query analysis** — decompose the user query into search intents. A complex question may generate 3-5 sub-searches.
2. **Live web search** — execute searches via its own index and/or Bing API. Retrieves 10-20 candidate pages per sub-search.
3. **Content extraction** — parse each candidate page, extract relevant passages. Markdown-structured content parses cleanly; complex JS-rendered layouts often don't.
4. **Synthesis** — LLM generates an answer using extracted passages as grounding context. Sources are cited inline where their content was used.
5. **Citation selection** — final pass selects which sources to display as numbered footnotes. Not every source in the context window gets cited — only those the model explicitly attributes claims to.

#### Known Citation Heuristics

Based on empirical observation (not official documentation — Perplexity does not publish its ranking algorithm):

**Recency dominates.** Perplexity heavily favors recently published or recently updated content. A mediocre article from this week beats an excellent article from last year on most queries. Implication: publish fast, update often, use `dateModified` in schema.

**Domain authority persists.** Despite being an AI system, Perplexity still weights traditional authority signals. Wikipedia, major news outlets, established industry publications get citation preference over unknown blogs. Implication: earn domain-level authority through backlinks and brand mentions, or get your content on authoritative domains.

**Q&A format increases citation probability.** Content structured as explicit question-then-answer gets extracted more cleanly. An `<h2>` that is a question followed by a 2-3 sentence definitive answer is the ideal extraction unit. FAQPage schema.org markup reinforces this signal.

**Definitive > hedged.** "The average cost is $X according to Y" gets cited. "The cost may vary depending on various factors" does not. Perplexity's synthesizer prefers sources that make clear, attributable claims.

**First-mover on fresh topics.** When a new topic emerges (product launch, policy change, breaking event), the first source to publish a comprehensive answer captures the citation and tends to hold it. Speed-to-publish is the primary competitive variable for trending queries.

#### Optimization Checklist

```
□ Publish date visible and recent (or update dateModified)
□ Target question appears as H2 heading
□ Answer appears in first 2-3 sentences after heading
□ Answer contains specific data (numbers, names, dates)
□ Answer is self-contained (no "as mentioned above")
□ Schema.org Article or FAQPage markup present
□ Page loads without JavaScript rendering requirements
□ Domain has existing authority (DA 30+ preferred)
```

#### What Perplexity Ignores

Keyword stuffing, meta descriptions, internal linking structure, page speed (beyond basic accessibility), image alt text, social signals. These are Google signals that have zero observed impact on Perplexity citation selection. Do not waste optimization effort on them for GEO purposes.

### How Claude Retrieves

Claude operates in two distinct modes that require different GEO strategies:

#### Mode 1: Trained Knowledge (No Tools)

Base Claude without web search draws entirely from training data. There is no live retrieval — the model generates from patterns learned during pre-training and RLHF. GEO implications:

**You're optimizing for the next training run.** Content that exists on the web at scale, is widely referenced, and is clearly attributed to an identifiable entity has the highest probability of being absorbed into future training data. This is long-game GEO: make your content so widely cited by other sources that it becomes part of the model's "common knowledge."

**Entity clarity is paramount.** When Claude mentions a company, product, or person, it draws from entity representations learned during training. If your entity is ambiguous — multiple organizations with similar names, inconsistent branding across sources — Claude may confuse you with others or avoid mentioning you entirely. entity-disambiguation is the primary lever for trained-knowledge GEO.

**Authoritative, widely-replicated content wins.** Claude's training data is weighted toward high-quality sources (academic papers, established publications, well-maintained documentation). Content on personal blogs with no backlinks is unlikely to significantly influence model weights. Getting your content cited by authoritative sources creates training-data amplification.

**Specific, factual claims compound.** If 20 different sources on the web state "Company X was founded in 2019 and has 500 employees," Claude will confidently reproduce this. If only your About page states these facts, the signal is weak. Ensuring your key facts are replicated across multiple authoritative sources (Wikipedia, Crunchbase, press releases, industry directories) maximizes training-data absorption.

#### Mode 2: Web Search Tool Enabled

When Claude has web search enabled, it operates similarly to Perplexity but with important differences:

**Search is selective.** Claude decides whether to search based on query analysis. Factual questions about recent events trigger search. Questions within Claude's confident training knowledge may not. Implication: GEO for Claude web search matters most for recent, dynamic, or specialized topics where the model knows its training data may be stale.

**Synthesis style differs.** Claude tends to synthesize more heavily than Perplexity — integrating multiple sources into a coherent narrative rather than quoting sources sequentially. This means your content is more likely to be paraphrased than directly quoted. Implication: optimize for unique data points and specific claims that Claude must attribute even when paraphrasing. "According to X's 2024 report, the market grew 34%" survives synthesis; generic descriptions do not.

**Citation format is inline.** Claude uses markdown-style inline citations `[Source](url)` rather than footnotes. Sources that provide clean, extractable facts with clear attribution get linked.

#### Dual Strategy

For maximum Claude GEO coverage, optimize on both fronts:

1. **Long game (training):** Ensure entity disambiguation across 10+ authoritative sources. Get your key facts on Wikipedia, Crunchbase, LinkedIn, industry databases. Make your content reference-worthy so other sites cite it, amplifying training signal.

2. **Short game (web search):** Publish timely, fact-dense content with clear attribution and schema.org markup. Target queries where Claude is likely to invoke search — recent events, specific data requests, comparisons that require current information.

The compound effect: content optimized for web search citations today becomes training data that influences base model knowledge tomorrow.

### How ChatGPT Retrieves

ChatGPT's retrieval behavior is the most complex of the major AI systems because it operates through multiple pathways: base model knowledge, Bing-powered web browsing, and the increasingly prominent ChatGPT search experience that is replacing traditional search for many users.

#### Browse Mode (GPT-4o with Search)

When ChatGPT decides a query needs live information, it executes a Bing search and retrieves results. The pipeline:

1. **Search decision** — GPT-4o evaluates whether the query requires current information. Queries about recent events, prices, availability, or comparisons trigger browse. General knowledge questions often don't.
2. **Bing query generation** — The model generates one or more Bing search queries (often rephrased from the user's input for better retrieval).
3. **Result retrieval** — Top 5-10 Bing results are fetched. Bing's ranking algorithm (domain authority, backlinks, content relevance) directly determines what ChatGPT sees.
4. **Content extraction** — Pages are parsed for relevant content. Clean HTML with clear heading structure parses best.
5. **Synthesis and citation** — GPT-4o synthesizes an answer with inline citations linking to source URLs.

#### Bing Dependency Implications

This is the critical insight: **ChatGPT's browse mode inherits Bing's ranking biases.** If you rank well on Bing, you're more likely to appear in ChatGPT's retrieval context. Bing's ranking factors overlap heavily with Google's but with key differences:

- Bing weights domain authority more heavily than Google
- Bing uses social signals (Facebook shares, X engagement) as ranking factors
- Bing favors well-structured HTML with clear `<article>` and heading hierarchy
- Bing indexes social content (X posts, LinkedIn articles) more aggressively than Google

Implication: Bing SEO is ChatGPT GEO. If you've been ignoring Bing because it has 3% search market share, you're now ignoring the retrieval backend for the AI system with 200M+ weekly users.

#### ChatGPT Search

The standalone search experience (search.chatgpt.com and the search toggle in chat) is evolving into a direct Google competitor. It uses the same Bing-powered retrieval but with a more persistent search-oriented UX. Sources appear as visual cards with site favicons. Getting displayed as a source card is the ChatGPT equivalent of a SERP feature.

Key optimization points for ChatGPT Search:
- `Organization` schema.org markup for brand display
- Open Graph and Twitter Card meta tags for visual previews
- Favicon properly configured (appears in source cards)
- Content that directly answers the query in the first 200 words

#### Monitoring ChatGPT Citations

Unlike Perplexity, ChatGPT does not have a public API for checking citations. Monitoring requires:

```python
# Approach: programmatic ChatGPT query via browser automation
# Use Playwright to query chat.openai.com with search enabled
# Parse response for citation URLs
# Log to citation_tracking_database

# Key fields to capture:
citation = {
    "query": str,
    "ai_system": "chatgpt",
    "search_enabled": True,
    "cited_urls": list[str],
    "cited_domains": list[str],
    "response_excerpt": str,
    "timestamp": datetime
}
```

serp-monitoring covers the implementation details for automated citation checking across all AI systems including ChatGPT.

#### Dual Optimization Strategy

Optimize for both Bing ranking (which determines retrieval) and citation-worthiness (which determines whether GPT-4o cites you after retrieval). A page can appear in the retrieval context but not get cited if it lacks definitive, extractable claims. You need both the door open (Bing ranking) and the goods inside (citation-worthy content).

### Entity Disambiguation

If an AI system cannot unambiguously identify your entity — your brand, your product, your founder — it will either confuse you with something else or avoid citing you entirely. Entity disambiguation is the foundation layer of GEO. Without it, everything else you do (content, structured data, publishing velocity) is built on sand.

#### Why It Matters

AI systems maintain internal entity representations learned from training data and/or knowledge graphs. When they encounter your brand name, they need to resolve it to a specific entity. If "Alva Energy" could refer to three different companies, the model either picks the wrong one or hedges by not mentioning any of them. The disambiguation signal must be strong enough that the model confidently maps your name to your entity without ambiguity.

#### Entity Establishment Protocol

Execute these steps for any brand or entity that needs AI visibility:

##### Step 1: Knowledge Graph Presence

```
□ Wikidata entry created with:
  - Label, description, aliases in relevant languages
  - Instance of: company/product/person
  - Official website (P856)
  - Founded date, founders, headquarters
  - Industry classification
□ Google Knowledge Panel claimed (search your brand → claim panel)
□ Crunchbase profile complete with all fields
□ LinkedIn Company page with verified domain
```

##### Step 2: Consistent NAP (Name, Address, Phone)

Ensure identical entity information across these 10 minimum sources:
1. Your website's About page
2. Google Business Profile
3. LinkedIn Company page
4. Crunchbase
5. Twitter/X bio
6. GitHub organization (if applicable)
7. Industry directories relevant to your sector
8. Press releases (via PRWeb, BusinessWire, or similar)
9. Local business directories (if applicable)
10. AngelList / PitchBook (if applicable)

Every instance must use the exact same entity name, not variations. "Alva Energy" everywhere, not "Alva" in some places and "Alva Energy Inc." in others.

##### Step 3: Schema.org Organization Markup

Deploy on your homepage:

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Alva Energy",
  "url": "https://alva.energy",
  "logo": "https://alva.energy/logo.png",
  "sameAs": [
    "https://www.linkedin.com/company/alva-energy",
    "https://twitter.com/alvaenergy",
    "https://www.crunchbase.com/organization/alva-energy",
    "https://www.wikidata.org/wiki/Q..."
  ],
  "foundingDate": "2024",
  "founder": {
    "@type": "Person",
    "name": "..."
  },
  "description": "Commercial battery storage in the Texas ERCOT market."
}
```

The `sameAs` array is the machine-readable equivalent of "these are all me" — it explicitly links your entity across platforms.

##### Step 4: Cross-Reference Amplification

Your entity's facts must be replicated across independent sources. If only your own website says you were founded in 2024, the signal is weak. If your website, Crunchbase, a press release, and a news article all state the same founding date, the signal is strong.

Target: minimum 5 independent sources stating your core entity facts (name, founding date, location, industry, key product/service).

##### Step 5: Wikipedia (Optional but High-Impact)

A Wikipedia article is the single strongest entity disambiguation signal for AI systems. Both Claude and ChatGPT weight Wikipedia heavily in entity resolution. But: Wikipedia has strict notability requirements. Pursue this only if you have significant press coverage, revenue, or other verifiable notability criteria. Do not create a promotional article — it will be deleted and harm your credibility.

#### Verification

After completing the protocol, test disambiguation by querying each major AI system: "What is [Brand Name]?" — the response should unambiguously describe your entity. If it confuses you with another entity or says it doesn't know you, trace back through the steps to find the gap.

### Citation-Worthy Content

AI systems cite content that solves a specific problem for their synthesis pipeline: the content provides a clean, extractable, attributable answer to a question. If your content does this better than competing sources, you get cited. If it doesn't, you don't. Everything else is secondary.

#### The Five Properties of Citation-Worthy Content

**1. Definitive statements.** "The average US household emits 7.5 tonnes CO2e per year" gets cited. "Household emissions vary widely depending on many factors" does not. AI systems need quotable claims, not hedged generalities. Make the claim. Back it with a source or original data. Let the AI extract it cleanly.

**2. Original data or statistics.** Content that presents data not available elsewhere is citation-magnetic. "Our analysis of 10,000 customer records shows X" is uncopyable and must be attributed. If you have proprietary data, publishing key statistics from it is the single highest-ROI GEO action you can take.

**3. Answer-complete paragraphs.** The full answer to a question must exist in a single paragraph — not spread across a page with headers between parts. An AI synthesizer extracts passages, not pages. If your answer requires combining text from three different sections, it will cite the competitor whose answer is self-contained in one paragraph.

**4. Clear attribution signals.** The content makes clear who is making the claim. "According to Alva Energy's 2024 ERCOT analysis..." is more citable than an anonymous passive voice. Entity markers in the prose itself (not just the byline) increase citation probability because the AI can attribute the claim in its synthesis.

**5. Structured extractability.** Q&A format (heading is a question, first paragraph is the answer), numbered lists, definition patterns ("X is defined as..."), comparison tables. These structures parse cleanly through content extraction pipelines. A wall of prose does not.

#### Citation-Worthiness Scoring Rubric

Score each property 0-2 (0 = absent, 1 = partial, 2 = strong). Total out of 10.

```
Content URL: _______________
Target query: _______________

Definitive statements:    [ ] 0  [ ] 1  [ ] 2
  - Contains specific numbers, dates, or claims?
  - Statements are direct, not hedged?

Original data:            [ ] 0  [ ] 1  [ ] 2
  - Includes data not found in other sources?
  - Data is quantified (not just qualitative)?

Answer completeness:      [ ] 0  [ ] 1  [ ] 2
  - Full answer exists in a single paragraph?
  - Answer is self-contained (no "see above/below")?

Attribution signals:      [ ] 0  [ ] 1  [ ] 2
  - Entity name appears near key claims?
  - Author/org is clearly identified?

Structured extractability: [ ] 0  [ ] 1  [ ] 2
  - Q&A or definition format used?
  - Schema.org markup present?

TOTAL: ___/10
Threshold: ≥7 to publish, ≥8 for high-priority topics

Revision notes:
```

#### The Anti-Patterns

Content that actively repels AI citation:
- **Clickbait titles** with no answer delivery — AI sees the mismatch
- **Thin content** that paraphrases competitors without adding value
- **Gated content** behind email capture — AI can't extract, won't cite
- **Heavy JavaScript rendering** — extraction fails, content is invisible
- **Duplicate content** — AI systems deduplicate aggressively; the original source wins

#### Implementation

When the agent generates content via content-brief-geo, it scores the output against this rubric before publishing. If the score is below 7, the agent rewrites. If it's below 5, the agent rejects the brief and returns to content-gap-analysis to find a better target. The rubric is the quality gate that prevents the velocity pipeline from publishing garbage at speed.

### Structured Data for AI

Schema.org JSON-LD is the machine-readable layer that makes your content parseable by AI retrieval systems. Not all schema types matter for GEO — many were designed for Google's SERP features and have no observed impact on AI citation. This node covers only the types that demonstrably improve AI extractability.

#### High-Impact Schema Types

##### FAQPage

The highest-impact schema for GEO. It explicitly structures content as question-answer pairs — exactly what AI systems are looking for.

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the average cost of battery storage in ERCOT?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "As of 2025, utility-scale battery storage in ERCOT costs $250-350/kWh installed for 4-hour lithium iron phosphate (LFP) systems. This includes equipment, installation, and grid interconnection, but excludes land and permitting costs which vary by site."
      }
    }
  ]
}
```

Implementation note: the `text` field in `acceptedAnswer` should be the answer-complete paragraph — the same text that appears on the page. Do not put a different or abbreviated version in the schema.

##### Article

Provides publication metadata that helps AI systems assess recency and authority.

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "ERCOT Battery Storage Economics: 2025 Analysis",
  "author": {
    "@type": "Person",
    "name": "Samu",
    "url": "https://symbai.dev/team/samu"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Alva Energy",
    "logo": { "@type": "ImageObject", "url": "https://alva.energy/logo.png" }
  },
  "datePublished": "2025-11-15",
  "dateModified": "2025-12-01",
  "description": "Comprehensive analysis of battery storage revenue potential in ERCOT for 2025, including arbitrage, ancillary services, and PCM credit projections."
}
```

Critical field: `dateModified`. Update this whenever content is refreshed. AI systems use this as a freshness signal. Perplexity in particular favors recently modified content.

##### Dataset

For content that presents original data — the strongest citation magnet. Marking your data with Dataset schema signals to AI systems that this is a primary source.

```json
{
  "@context": "https://schema.org",
  "@type": "Dataset",
  "name": "ERCOT Battery Storage Revenue Model 2025",
  "description": "Monthly revenue projections for 100MW/400MWh BESS in ERCOT based on historical LMP data",
  "creator": { "@type": "Organization", "name": "Alva Energy" },
  "datePublished": "2025-11-15",
  "temporalCoverage": "2020/2025",
  "spatialCoverage": { "@type": "Place", "name": "ERCOT, Texas" },
  "distribution": {
    "@type": "DataDownload",
    "encodingFormat": "text/csv",
    "contentUrl": "https://alva.energy/data/ercot-bess-revenue-2025.csv"
  }
}
```

##### HowTo

For procedural content. Less impactful than FAQPage but useful for "how do I" queries.

```json
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Evaluate a Battery Storage Site in ERCOT",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Check transmission capacity",
      "text": "Query ERCOT's planning portal for available transmission capacity at the target node. Minimum 50MW available capacity required for utility-scale BESS."
    }
  ]
}
```

#### Implementation Pattern

Inject schema as `<script type="application/ld+json">` in the `<head>` of every published page. The publishing-pipeline should auto-generate schema from content metadata at publish time — not require manual markup for each article.

#### Schema Types to Skip for GEO

`BreadcrumbList`, `WebPage`, `SiteNavigationElement`, `LocalBusiness` (unless you have a physical location) — these are Google SERP feature optimizations with no observed GEO impact. Don't waste implementation effort on them.

### GEO Ranking Signals

GEO is a nascent field. Unlike traditional SEO, which has 25+ years of empirical testing and published research, GEO ranking signals are being mapped in real time. This node tracks the current state of knowledge, distinguishing confirmed signals from hypothesized ones.

#### Confirmed Signals (Empirically Tested)

**Source: Aggarwal et al., "GEO: Generative Engine Optimization" (2023)**

The foundational GEO research paper tested optimization strategies on the BrightLM generative engine and found:

- **Cite Sources** (+30-40% visibility): Adding citations and references within your content increases the probability that AI systems cite you. This is recursive — AI trusts sources that demonstrate their own sourcing rigor.
- **Statistics Inclusion** (+25-35% visibility): Specific, quantified claims outperform qualitative descriptions. "Revenue increased 34% YoY" beats "revenue grew significantly."
- **Quotation Addition** (+15-20% visibility): Including expert quotes with attribution increases citation probability. The AI can extract and attribute the quote directly.
- **Fluency Optimization** (+10-15% visibility): Grammatically clean, well-structured prose outperforms messy content. AI systems' extraction pipelines work better on clean text.
- **Authoritative Tone** (+10-15% visibility): Definitive, confident prose outperforms hedged language. This aligns with the citation-worthy-content principle.

Paper limitations: tested on BrightLM (a research engine), not on Perplexity/ChatGPT/Claude directly. Results are directionally useful but magnitude may differ across production systems.

#### Strong Hypotheses (Consistent Observation, Not Formally Tested)

**Recency signal.** Perplexity demonstrably favors recently published content. ChatGPT browse mode retrieves from Bing, which factors freshness. Mechanism: `dateModified` schema, HTTP Last-Modified headers, publication dates in content.

**Domain authority persistence.** Despite the GEO paradigm shift, domain-level authority signals (backlinks, brand mentions, domain age) still influence retrieval. The mechanism differs — in GEO, authority likely affects whether a source enters the retrieval context, while content quality determines whether it gets cited from that context.

**Entity clarity.** Sources with unambiguous entity signals (schema.org Organization markup, Wikidata entries, consistent NAP) get cited more frequently than ambiguous sources. Mechanism: the AI system can confidently attribute claims to a specific entity.

**Answer completeness.** Self-contained answer paragraphs are cited more than content requiring multi-passage extraction. Mechanism: LLM synthesis operates on passages, and complete passages are easier to attribute.

#### Speculative Signals (Limited or Anecdotal Evidence)

**Content length.** Some practitioners report that longer, more comprehensive content gets cited more. Unclear whether this is a direct signal or a proxy for topical depth.

**Internal linking structure.** No evidence this affects AI citation, but it may improve overall indexing which indirectly affects retrieval.

**Social signals.** Bing uses social signals, so ChatGPT browse mode may inherit this. Perplexity and Claude show no observed social signal dependency.

**Publication frequency.** Sites that publish frequently may get crawled more often, leading to faster inclusion in retrieval indexes. Mechanism is plausible but not tested.

#### What the Agent Should Do With This

When generating content via the velocity pipeline, optimize for confirmed and strongly hypothesized signals. Ignore speculative signals unless testing them deliberately. When the verification-loop reveals that a piece of content isn't getting cited despite high confidence, check it against this signal list systematically to diagnose the failure point.

This node should be reviewed quarterly. As GEO research matures and SPECTER's own citation-tracking-database accumulates data, update signal confidence levels based on observed evidence.

### AI Citation Gaps

A citation gap is a query where an AI system answers a question in your domain but does not cite you — or cites a competitor instead. Citation gaps are the demand signal for the entire SPECTER pipeline. Every gap is an opportunity: a question being asked, an answer being synthesized, and your content not being part of it.

#### Gap Discovery Methodology

##### Step 1: Define Seed Queries

Generate 50-100 queries that your target audience would ask AI systems about your domain. Sources for seed queries:

- Your existing keyword research (SEO → GEO translation)
- "People Also Ask" boxes on Google SERPs
- Perplexity's "Related" questions after an answer
- Reddit/forum threads where your audience asks questions
- Customer support tickets and sales call transcripts
- Competitor FAQ pages

##### Step 2: Query AI Systems Programmatically

For each seed query, run against all three major systems:

```python
import json
from datetime import datetime

async def audit_citation_gap(query: str, your_domain: str) -> dict:
    results = {
        "query": query,
        "timestamp": datetime.utcnow().isoformat(),
        "your_domain": your_domain,
        "systems": {}
    }

    # Perplexity — use API (pplx-api)
    pplx = await query_perplexity(query)
    results["systems"]["perplexity"] = {
        "cited_domains": extract_domains(pplx.citations),
        "you_cited": your_domain in extract_domains(pplx.citations),
        "competitor_citations": [
            d for d in extract_domains(pplx.citations)
            if d != your_domain
        ]
    }

    # ChatGPT — browser automation (see serp-monitoring)
    # Claude — API with web search tool enabled

    return results
```

##### Step 3: Score and Prioritize Gaps

Not all gaps are equal. Score each by:

```
gap_score = (
    citation_frequency    # How often is this query asked? (1-5)
    × competitor_count    # How many competitors are cited? (1-5)
    × topic_relevance     # How central is this to your business? (1-5)
    × answer_quality      # How poor is the current AI answer? (1-5)
) / fill_difficulty       # How hard is it for you to create better content? (1-5)
```

High gap_score = high priority. The best gaps are: frequently asked, multiple competitors cited (proving demand), central to your business, with mediocre current AI answers, and easy for you to answer better.

##### Step 4: Classify Gap Type

Each gap falls into one of these categories, which determines the response:

| Gap Type | Description | Action |
|----------|-------------|--------|
| **Absent** | You have no content on this topic | Create from scratch via content-gap-analysis |
| **Present but not cited** | You have content but AI doesn't cite it | Optimize existing content for citation-worthiness |
| **Cited but losing** | You're cited but competitor ranks above you | Strengthen your content with original data |
| **Emerging** | New query pattern, no one cited yet | First-mover opportunity — publish immediately |

##### Step 5: Feed the Pipeline

Each scored and classified gap becomes an input to content-gap-analysis:

```json
{
  "query": "What is the average cost of battery storage in ERCOT?",
  "gap_type": "absent",
  "gap_score": 18.5,
  "competitor_citations": ["utilitydive.com", "energystorage.org"],
  "target_ai_systems": ["perplexity", "chatgpt"],
  "priority": "high",
  "action": "create_new_content"
}
```

#### Automation Schedule

Run the full gap audit weekly on the complete seed query set. Run a targeted audit daily on the top 20 priority queries. After any content publication, run the target query within 24 hours via verification-loop to check if the gap was filled.

#### The Compounding Effect

Every gap filled adds to your citation footprint. Every citation earned increases your entity authority. Increased entity authority makes future citations more likely. This is the flywheel that SPECTER drives: the more gaps you fill, the easier it becomes to fill the next one.

## Scraping Architecture

The intelligence pipeline. Every decision SPECTER makes — what content to generate, which competitor to analyze, where citation gaps exist — depends on data the agent acquires autonomously. This cluster governs how that acquisition happens: what to scrape, how to scrape it, when to pay instead of scraping, and how to stay on the right side of ethics and law.

The master node is scraping-decision-tree — a decision flowchart the agent walks for every data target. It routes to the appropriate extraction method based on the target's properties: API availability, paywall status, JavaScript rendering requirements, rate limiting, and x402 payment option.

Upstream of scraping sits target-identification — how the agent decides what is worth scraping in the first place. Targets are scored by citation frequency × data freshness × acquisition cost. High-citation, frequently-updated, cheap-to-acquire targets get priority. competitor-fingerprinting is the specialized case: building complete profiles of who is getting cited in your niche and reverse-engineering their content strategy.

The execution layer has two primary nodes. rotating-proxy-management handles IP rotation, ban detection, and proxy economics for high-volume HTTP scraping. headless-browser-scraping handles JavaScript-rendered content using Playwright with stealth configuration. The choice between them is speed vs. necessity — never use a headless browser when a simple HTTP request suffices.

data-freshness-management ensures scraped data doesn't go stale. TTL assignment, change detection via hash comparison, and priority refresh queuing keep the intelligence pipeline current. serp-monitoring is the specialized scraping case for search results — both traditional Google SERPs and AI-generated answers.

anti-detection-ethics is the governance node. It defines where the lines are: robots.txt compliance, rate limiting as citizenship, ToS review, and the critical decision of when to pay for data instead of scraping it. The agent loads this node before any scraping session to calibrate its behavior.

### Scraping Decision Tree

This is the routing function for every data acquisition in SPECTER. Given a target URL or data need, the agent walks this tree to determine the fastest, cheapest, safest path to the data.

#### The Decision Tree

```
START: I need data from [target]
│
├─ Does an x402 source exist for this data type?
│  ├─ YES → Check price against budget (see x402-payment-logic)
│  │  ├─ Within budget → PAY via x402 ✓
│  │  └─ Over budget → Continue tree ↓
│  └─ NO → Continue tree ↓
│
├─ Does a public API exist?
│  ├─ YES → Is rate limit sufficient?
│  │  ├─ YES → Use API directly ✓
│  │  └─ NO → Need multiple keys or throttled schedule
│  └─ NO → Continue tree ↓
│
├─ Is the target behind authentication/paywall?
│  ├─ YES → Is there an x402 alternative? (re-check registry)
│  │  ├─ YES → Pay ✓
│  │  └─ NO → Can we ethically access it?
│  │     ├─ YES (free tier, trial) → Use authenticated session
│  │     └─ NO → SKIP — do not scrape paywalled content ✗
│  └─ NO → Continue tree ↓
│
├─ Does the page require JavaScript rendering?
│  ├─ YES → Use headless browser (see headless-browser-scraping)
│  │  ├─ Cloudflare/bot protection? → Add stealth plugins
│  │  └─ No protection → Standard Playwright
│  └─ NO → Continue tree ↓
│
├─ Is the target rate-limited or ban-prone?
│  ├─ YES → Use rotating proxies (see rotating-proxy-management)
│  └─ NO → Continue tree ↓
│
├─ Is this a one-time or recurring need?
│  ├─ Recurring → Set up scheduled job with TTL refresh
│  └─ One-time → Simple HTTP request ✓
│
└─ DEFAULT: Simple HTTP GET with requests + parsing ✓
```

#### Implementation Router

```python
async def acquire_data(target: Target) -> AcquisitionResult:
    """Route data acquisition through the decision tree."""

    # Step 1: Check x402 registry
    x402_source = registry.find(target.data_type)
    if x402_source:
        decision = payment_logic.decide(target, x402_source, budget)
        if decision == Action.PAY:
            return await x402_fetch(x402_source, target)

    # Step 2: Check for public API
    api = api_registry.find(target.domain)
    if api and api.rate_limit_remaining > 0:
        return await api_fetch(api, target)

    # Step 3: Check robots.txt and ToS
    if not await check_robots_txt(target.url):
        log("robots.txt disallows scraping", target.url)
        return AcquisitionResult(data=None, source="skip")

    # Step 4: Determine scraping method
    if target.requires_js:
        return await headless_scrape(target, stealth=target.has_bot_protection)
    elif target.is_rate_limited:
        return await proxied_scrape(target)
    else:
        return await simple_scrape(target)


async def simple_scrape(target: Target) -> AcquisitionResult:
    """Basic HTTP scrape with BeautifulSoup parsing."""
    import httpx
    from bs4 import BeautifulSoup

    async with httpx.AsyncClient(timeout=30) as client:
        resp = await client.get(target.url, headers={
            "User-Agent": "Mozilla/5.0 (compatible; research bot)",
            "Accept": "text/html,application/xhtml+xml"
        })
        resp.raise_for_status()

    soup = BeautifulSoup(resp.text, "html.parser")
    # Extract based on target.extraction_rules
    return AcquisitionResult(
        data=extract(soup, target.extraction_rules),
        source="scrape",
        cost_usd=0,
        quality_score=6
    )
```

#### Decision Logging

Every routing decision is logged:

```json
{
  "target": "competitor.com/pricing",
  "data_type": "competitor_pricing",
  "tree_path": ["x402_check:miss", "api_check:miss", "robots:allow", "js:no", "rate_limit:no"],
  "method_selected": "simple_scrape",
  "timestamp": "2026-02-18T14:30:00Z"
}
```

This log trains the decision tree over time — if a target consistently requires headless despite initially attempting simple scrape, the agent updates the target profile to skip the failed step.

#### The Visual

The decision tree is the single most shareable diagram in SPECTER. Render it as a flowchart for documentation, presentations, and the README. Every technical founder who sees it immediately understands the system's intelligence.

### Target Identification

Not everything is worth scraping. The agent needs a systematic method for identifying which data targets produce the highest return on acquisition effort. This node defines the target identification process and scoring matrix.

#### Target Categories

**1. Competitor content** — Pages that currently get cited in AI answers for your target queries. These are the sources you need to displace. Identified via ai-citation-gaps analysis.

**2. SERP intelligence** — Google and Bing search results for your target queries. Traditional SERP data reveals what content is indexed, ranked, and accessible to AI retrieval pipelines.

**3. Training pipeline sources** — High-authority sites that AI systems are likely trained on or retrieve from: Wikipedia, major news outlets, industry publications, government databases. Understanding what these sources say about your domain reveals what AI "knows."

**4. Community intelligence** — Reddit, Stack Overflow, Quora, HackerNews, industry forums. These reveal what questions your audience actually asks and how they phrase them — invaluable for seed query generation.

**5. Data enrichment sources** — Company profiles, person data, market statistics, pricing databases. Raw data that feeds into content generation and competitive analysis.

#### Target Scoring Matrix

Score each potential target 1-5 on each dimension:

```
Target: _______________
URL/Source: _______________

Citation Impact    [1-5]: How often does this source appear in AI answers?
Data Freshness     [1-5]: How frequently does the underlying data change?
Acquisition Cost   [1-5]: 5=free/cheap, 1=expensive/difficult
Data Quality       [1-5]: Accuracy, completeness, structure of the data
Strategic Value    [1-5]: How central is this data to your GEO strategy?

Target Score = (Citation × Freshness × Quality × Strategic) / Acquisition Cost

Score: ___
Priority: High (>50) / Medium (20-50) / Low (<20)
```

#### Example Scoring

```
Target: UtilityDive.com articles on ERCOT battery storage
Citation Impact:    4  (cited frequently by Perplexity for energy queries)
Data Freshness:     4  (publishes 2-3x/week on this topic)
Data Quality:       4  (professional journalism, fact-checked)
Strategic Value:    5  (directly in our target domain)
Acquisition Cost:   3  (no paywall, simple HTML, moderate rate limiting)

Score: (4 × 4 × 4 × 5) / 3 = 106.7 → HIGH PRIORITY
Action: Set up scheduled scrape, daily frequency, extract article text + metadata
```

#### Target Profile Schema

```json
{
  "target_id": "utilitydive_ercot",
  "name": "Utility Dive — ERCOT Coverage",
  "url_pattern": "https://www.utilitydive.com/topic/ERCOT/*",
  "data_type": "competitor_content",
  "score": 106.7,
  "priority": "high",
  "acquisition_method": "simple_scrape",
  "refresh_frequency": "daily",
  "extraction_rules": {
    "title": "h1.article-title",
    "body": "div.article-body",
    "date": "time[datetime]",
    "author": "span.author-name"
  },
  "last_scraped": null,
  "total_scrapes": 0,
  "citations_attributed": 0
}
```

#### Building the Target List

Start with 20-30 targets across all five categories. Score each. Sort by score. The top 10 become the initial scraping pipeline. Review and rescore weekly based on actual citation impact observed via competitor-fingerprinting and ai-citation-gaps.

### Competitor Fingerprinting

A competitor fingerprint is a structured profile of a competing source's content strategy, publishing behavior, and AI citation performance. Building fingerprints for the top 5-10 competitors in your niche reveals exactly where they're strong, where they're weak, and what they'll likely publish next.

#### Fingerprint Schema

```json
{
  "competitor_id": "utilitydive_energy_storage",
  "domain": "utilitydive.com",
  "niche": "energy_storage_ercot",
  "last_updated": "2026-02-18",

  "publishing_profile": {
    "frequency": "3-4 articles/week",
    "avg_word_count": 1200,
    "content_types": ["news", "analysis", "data_reports"],
    "authors": ["Robert Walton", "Ethan Howland"],
    "publishing_days": ["Mon", "Tue", "Wed", "Thu"],
    "avg_time_to_publish_after_event": "4-8 hours"
  },

  "topic_coverage": {
    "primary_topics": ["ERCOT policy", "battery deployments", "grid reliability"],
    "secondary_topics": ["solar+storage", "demand response", "EV charging"],
    "gaps": ["BESS revenue modeling", "site-specific LMP analysis", "PCM credit projections"],
    "topic_frequency": {
      "ercot_policy": 12,
      "battery_deployment": 8,
      "grid_reliability": 6
    }
  },

  "ai_citation_performance": {
    "perplexity_citation_rate": 0.34,
    "chatgpt_citation_rate": 0.21,
    "claude_citation_rate": 0.15,
    "top_cited_articles": [
      {"url": "...", "query": "ERCOT battery storage cost", "ai_system": "perplexity"}
    ],
    "citation_trend": "stable"
  },

  "authority_metrics": {
    "domain_rating": 78,
    "referring_domains": 12400,
    "backlink_velocity": "+45/month",
    "social_following": {"twitter": 52000, "linkedin": 38000}
  },

  "weaknesses": [
    "No original data or proprietary analysis",
    "Content is news-reactive, not predictive",
    "Weak schema.org markup (Article only, no FAQ/Dataset)",
    "Slow to cover new PUCT regulatory filings"
  ]
}
```

#### Building the Fingerprint

##### Step 1: Content Inventory

Scrape the competitor's recent content (last 90 days). Extract: titles, publication dates, word counts, topics, authors. Use the scraping-decision-tree to determine method.

```python
# Extract publishing pattern from scraped article metadata
from collections import Counter
from datetime import datetime

articles = scrape_competitor_articles("utilitydive.com", days=90)

publishing_days = Counter(a["date"].strftime("%A") for a in articles)
avg_word_count = sum(a["word_count"] for a in articles) / len(articles)
frequency = len(articles) / 13  # articles per week (90 days = ~13 weeks)
```

##### Step 2: AI Citation Audit

Run the competitor's primary topics through ai-citation-gaps methodology, but tracking their citations instead of yours:

```python
for query in competitor_topic_queries:
    citations = await query_perplexity(query)
    if competitor_domain in citations:
        fingerprint["ai_citation_performance"]["citations"].append({
            "query": query,
            "cited": True,
            "position": citations.index(competitor_domain)
        })
```

##### Step 3: Gap Analysis

Compare their coverage against your target topic list. Where they don't publish is your opportunity. Where they publish but lack depth is your quality gap. Where they publish with depth but poor GEO optimization is your technical gap.

##### Step 4: Predictive Modeling

Based on their publishing pattern, predict what they'll cover next:
- Upcoming regulatory events → they'll publish reactive coverage
- Recurring report cycles (quarterly earnings, monthly data releases) → they'll publish on schedule
- Gap topics they haven't covered yet → lower probability but high value if you get there first

#### Update Cadence

Refresh competitor fingerprints monthly for top 5 competitors, quarterly for the next 10. The verification-loop automatically captures citation rate changes, which updates the AI citation performance section continuously.

### Rotating Proxy Management

When scraping at volume or targeting sites with anti-bot measures, IP rotation prevents bans and maintains access. This node covers the proxy architecture: when to use proxies, which type, how to rotate, and when to pay for clean data instead.

#### When Proxies Are Needed

- Target returns 403/429 after N requests from same IP
- Target uses IP-based rate limiting (common on news sites, social platforms)
- Target blocks datacenter IP ranges (common on e-commerce, social)
- You need geo-specific results (SERP data varies by location)

When proxies are NOT needed: public APIs with key-based auth, x402 endpoints (paying legitimately), low-volume one-time scrapes (<100 requests).

#### Proxy Types

| Type | Cost/GB | Detection Risk | Speed | Use Case |
|------|---------|---------------|-------|----------|
| Datacenter | $0.50-2 | High | Fast | High-volume, non-protected targets |
| Residential | $5-15 | Low | Medium | Protected targets, social platforms |
| ISP/Static Residential | $2-5 | Very Low | Fast | Sustained sessions, login-required |
| Mobile | $15-30 | Very Low | Slow | Highest anti-detection (rarely needed) |

#### Provider Benchmarks (as of 2025-2026)

- **Bright Data**: Largest network, best geo-coverage. Residential from $8.40/GB. API-first.
- **Oxylabs**: Strong for SERP scraping. Residential from $8/GB. Dedicated SERP API.
- **Smartproxy**: Best value for mid-volume. Residential from $7/GB. Simple rotation.
- **IPRoyal**: Budget option. Residential from $5.50/GB. Smaller network.

#### Implementation: Rotating Proxy with httpx

```python
import httpx
import random
from itertools import cycle

class ProxyRotator:
    def __init__(self, proxy_list: list[str]):
        """
        proxy_list: ["http://user:pass@gate.smartproxy.com:7777", ...]
        For rotating residential, providers give a single gateway
        that auto-rotates on each request.
        """
        self.proxies = cycle(proxy_list)
        self.ban_count = {}

    async def fetch(self, url: str, max_retries: int = 3) -> httpx.Response:
        for attempt in range(max_retries):
            proxy = next(self.proxies)
            try:
                async with httpx.AsyncClient(
                    proxy=proxy,
                    timeout=30,
                    headers=self._random_headers(),
                    follow_redirects=True
                ) as client:
                    resp = await client.get(url)

                    if resp.status_code == 429:
                        # Rate limited — rotate and backoff
                        await asyncio.sleep(2 ** attempt + random.random())
                        continue

                    if resp.status_code == 403:
                        # Banned — log and rotate
                        self.ban_count[proxy] = self.ban_count.get(proxy, 0) + 1
                        continue

                    return resp

            except (httpx.ProxyError, httpx.ConnectTimeout):
                continue

        raise ScrapeError(f"All {max_retries} proxy attempts failed for {url}")

    def _random_headers(self) -> dict:
        agents = [
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
            "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36",
        ]
        return {
            "User-Agent": random.choice(agents),
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9",
            "Accept-Language": "en-US,en;q=0.9",
            "Accept-Encoding": "gzip, deflate, br",
        }
```

#### The Pay-vs-Proxy Decision

Proxies cost money too. A residential proxy scraping session that consumes 500MB costs $4-7.50. If the same data is available via x402 for $0.005/call × 100 calls = $0.50, paying is 10x cheaper and produces cleaner data. Always compare proxy costs against x402-payment-logic before committing to proxy-based scraping.

Rule of thumb: if total proxy cost for a scraping task exceeds $1, check the x402 registry first.

### Headless Browser Scraping

Some targets render content client-side with JavaScript. No amount of HTTP request crafting will retrieve what isn't in the initial HTML response. For these targets, a headless browser — an automated browser running without a visible window — is necessary. Playwright is the recommended tool.

#### When Headless Is Required

- Target returns empty `<div id="app"></div>` in raw HTML
- Content loads via XHR/fetch after initial page load (SPAs)
- Target uses client-side rendering frameworks (React, Vue, Angular)
- Infinite scroll or lazy-loaded content
- Content behind JavaScript-based access controls

#### When Headless Is Overkill

- Target serves server-rendered HTML (check with `curl -s URL | grep "content"`)
- API endpoint is available (many SPAs have public API routes)
- x402 source provides the same data (always cheaper than headless)

#### Playwright Stealth Setup

```python
# pip install playwright playwright-stealth
# playwright install chromium

from playwright.async_api import async_playwright
from playwright_stealth import stealth_async
import random
import asyncio

async def stealth_scrape(url: str, selector: str = "body") -> str:
    """Scrape a JS-rendered page with stealth anti-detection."""

    async with async_playwright() as p:
        browser = await p.chromium.launch(
            headless=True,
            args=[
                "--disable-blink-features=AutomationControlled",
                "--no-sandbox",
                "--disable-dev-shm-usage",
            ]
        )

        context = await browser.new_context(
            viewport={"width": 1920, "height": 1080},
            user_agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
                       "AppleWebKit/537.36 (KHTML, like Gecko) "
                       "Chrome/120.0.0.0 Safari/537.36",
            locale="en-US",
            timezone_id="America/Chicago",
        )

        page = await context.new_page()
        await stealth_async(page)  # Apply stealth patches

        # Human-like behavior
        await page.goto(url, wait_until="networkidle")
        await asyncio.sleep(random.uniform(1.5, 3.0))  # Random delay

        # Simulate scroll (triggers lazy loading)
        await page.evaluate("window.scrollTo(0, document.body.scrollHeight / 2)")
        await asyncio.sleep(random.uniform(0.5, 1.5))

        # Extract content
        content = await page.query_selector(selector)
        text = await content.inner_text() if content else ""

        await browser.close()
        return text
```

#### Handling Cloudflare

Cloudflare's bot detection (Turnstile, JS Challenge, Under Attack Mode) is the most common barrier. Stealth strategies:

1. **playwright-stealth**: Patches `navigator.webdriver`, `chrome.runtime`, and other automation markers. Handles basic Cloudflare JS challenges.

2. **Undetected Chromium**: Use `playwright` with extra args that match a real Chrome installation more closely. The key args are `--disable-blink-features=AutomationControlled` and realistic viewport/UA combinations.

3. **Wait for challenge completion**: Cloudflare challenges take 2-5 seconds. Wait explicitly:
```python
await page.wait_for_selector("div.main-content", timeout=10000)
```

4. **When stealth fails**: Consider the x402 Firecrawl endpoint (`enrichx402.com/api/firecrawl`) which handles rendering and extraction server-side for $0.005/page. Cleaner and more reliable than maintaining stealth infrastructure.

#### Resource Management

Headless browsers are expensive computationally:
- Each Chromium instance uses ~100-300MB RAM
- CPU-intensive JavaScript execution
- Network bandwidth for full page loads (images, CSS, fonts)

Limit concurrent headless sessions to 3-5 on a standard machine. For higher volume, use a browser pool:

```python
class BrowserPool:
    def __init__(self, max_browsers: int = 3):
        self.semaphore = asyncio.Semaphore(max_browsers)

    async def scrape(self, url: str, selector: str) -> str:
        async with self.semaphore:
            return await stealth_scrape(url, selector)
```

#### Decision Heuristic

Before launching a headless browser, ask:
1. Did you check if an API endpoint exists? (`/api/`, GraphQL, XHR inspection)
2. Did you check the x402 registry for this data type?
3. Does the page actually need JS rendering, or just specific content?

Headless is the last resort for extraction, not the first. It is slower, more resource-intensive, and more detectable than every alternative.

### Data Freshness Management

Stale data is wrong data in GEO. Perplexity favors recent content. ChatGPT Browse retrieves from Bing's fresh index. AI training runs incorporate recent web crawls. If your competitive intelligence is a month old, your content strategy is targeting yesterday's gaps. This node governs how SPECTER keeps its data current.

#### TTL Assignment by Data Type

Every piece of acquired data gets a time-to-live (TTL) based on its volatility:

```python
TTL_CONFIG = {
    # High velocity — refresh frequently
    "serp_data": 86400,              # 1 day — search results change daily
    "social_intelligence": 3600,      # 1 hour — social is real-time
    "competitor_new_content": 86400,   # 1 day — check for new publications daily
    "ai_citation_check": 86400,       # 1 day — citation status changes daily
    "trending_topics": 3600,          # 1 hour — trends are ephemeral

    # Medium velocity — refresh periodically
    "competitor_profile": 604800,      # 7 days — profiles change slowly
    "company_enrichment": 604800,      # 7 days
    "market_data": 259200,            # 3 days
    "regulatory_filings": 86400,      # 1 day — check daily for new filings

    # Low velocity — refresh infrequently
    "person_profile": 1209600,        # 14 days
    "domain_authority": 2592000,      # 30 days
    "historical_content": 7776000,    # 90 days — old articles don't change
}
```

#### Change Detection

For targets where TTL-based refresh wastes resources (the page hasn't changed), use content hashing:

```python
import hashlib

def detect_change(url: str, cache: Cache) -> bool:
    """Compare current page hash against cached hash."""
    current_content = fetch(url)
    current_hash = hashlib.sha256(current_content.encode()).hexdigest()

    cached_entry = cache.get_hash(url)
    if cached_entry and cached_entry == current_hash:
        return False  # No change — skip full re-scrape

    cache.update_hash(url, current_hash)
    return True  # Changed — trigger full re-scrape and re-process
```

For efficiency, run change detection on a broader set of targets (every 6 hours) and only trigger full re-scrape + re-processing when a change is detected. This reduces scraping volume by 60-80% for most targets.

#### Priority Queue Architecture

Not all refresh tasks have equal urgency. The refresh scheduler uses a priority queue:

```python
import heapq
from dataclasses import dataclass, field
from datetime import datetime

@dataclass(order=True)
class RefreshTask:
    priority: int = field(compare=True)  # Lower = higher priority
    scheduled_at: datetime = field(compare=False)
    target_id: str = field(compare=False)
    data_type: str = field(compare=False)
    url: str = field(compare=False)

# Priority levels:
# 1 — Critical: citation verification for newly published content
# 2 — High: competitor new content detection, trending topics
# 3 — Medium: SERP monitoring, market data refresh
# 4 — Low: competitor profiles, domain authority checks
# 5 — Background: historical content, person profiles
```

#### Scheduled Refresh Cadence

```
Every 1 hour:
  - Social intelligence for tracked topics
  - Trending topic detection
  - Citation verification for content published <24h ago

Every 6 hours:
  - Change detection pass on all high-priority targets
  - SERP monitoring for top 20 target queries

Every 24 hours:
  - Full competitor new content check
  - AI citation gap audit on seed query set
  - Regulatory filing check (PUCT, SEC, etc.)

Every 7 days:
  - Full competitor fingerprint refresh
  - Domain authority and backlink velocity update
  - Company/person enrichment data refresh
```

#### Integration with Verification Loop

The verification-loop is the highest-priority consumer of fresh data. When the agent publishes new content, the verification schedule accelerates: check for citations at 1 hour, 4 hours, 24 hours, and 72 hours post-publication. This fast-frequency verification window is the most important freshness requirement in the entire system — it determines how quickly the agent learns whether its content strategy is working.

### SERP Monitoring

SERP monitoring in the GEO era tracks two parallel universes: traditional Google/Bing search rankings AND AI system citations. Both matter — traditional SERP positions affect what AI browse modes retrieve, and AI citations directly affect brand visibility in the growing AI-first search segment.

#### Traditional SERP Monitoring

Use SerpAPI (or similar: ValueSERP, ScaleSerp) for automated SERP tracking:

```python
import httpx

async def check_serp(query: str, domain: str, engine: str = "google") -> dict:
    """Check SERP position for a query and domain."""
    params = {
        "api_key": os.environ["SERPAPI_KEY"],
        "engine": engine,
        "q": query,
        "num": 20,
        "gl": "us",
        "hl": "en"
    }
    async with httpx.AsyncClient() as client:
        resp = await client.get("https://serpapi.com/search", params=params)
        data = resp.json()

    results = data.get("organic_results", [])
    for i, result in enumerate(results):
        if domain in result.get("link", ""):
            return {
                "query": query,
                "engine": engine,
                "position": i + 1,
                "url": result["link"],
                "title": result["title"],
                "featured_snippet": data.get("answer_box", {}).get("link", "") == result["link"]
            }

    return {"query": query, "engine": engine, "position": None, "url": None}
```

#### AI Citation Monitoring

This is the novel and more valuable monitoring layer. For each target query, check whether your content gets cited in AI answers:

```python
async def check_ai_citations(query: str, your_domain: str) -> list[dict]:
    """Check AI citation across major systems."""
    results = []

    # 1. Perplexity — via API (pplx-api)
    pplx_response = await query_perplexity_api(query)
    pplx_citations = extract_citation_urls(pplx_response)
    results.append({
        "ai_system": "perplexity",
        "query": query,
        "cited": any(your_domain in url for url in pplx_citations),
        "your_urls": [u for u in pplx_citations if your_domain in u],
        "competitor_urls": [u for u in pplx_citations if your_domain not in u],
        "total_citations": len(pplx_citations),
        "timestamp": datetime.utcnow().isoformat()
    })

    # 2. ChatGPT — via browser automation or API
    # Note: Requires ChatGPT Plus or API with web search enabled
    # Implementation depends on access method

    # 3. Claude — via API with web_search tool
    # claude_response = await anthropic_client.messages.create(
    #     model="claude-sonnet-4-5-20250929",
    #     tools=[{"type": "web_search_20250305"}],
    #     messages=[{"role": "user", "content": query}]
    # )

    return results
```

#### Alert Conditions

The monitoring system fires alerts on these conditions:

```python
ALERT_CONDITIONS = {
    "competitor_gained_citation": {
        "description": "A competitor appeared in AI answer where they weren't before",
        "severity": "medium",
        "action": "Run content gap analysis for this query"
    },
    "you_lost_citation": {
        "description": "You were cited before but aren't now",
        "severity": "high",
        "action": "Check content freshness, update dateModified, review content quality"
    },
    "new_high_volume_query": {
        "description": "A new query pattern detected with high citation frequency",
        "severity": "medium",
        "action": "Add to seed query list, run gap analysis"
    },
    "serp_position_dropped": {
        "description": "Traditional SERP position dropped >5 places",
        "severity": "low",
        "action": "Log for review — may affect ChatGPT Browse retrieval"
    },
    "featured_snippet_lost": {
        "description": "Lost Google featured snippet (affects AI retrieval)",
        "severity": "medium",
        "action": "Review content format, update answer-complete paragraph"
    }
}
```

#### Monitoring Schedule

```
Frequency    Queries          Systems           Purpose
─────────────────────────────────────────────────────────────
Daily        Top 20 priority  Perplexity, Google Citation tracking for key terms
3x/week      Full seed set    Perplexity         Gap detection
Weekly       Full seed set    All (Pplx+GPT+C)   Comprehensive audit
Post-publish Target queries   All                 Verification (1h, 4h, 24h, 72h)
```

#### Dashboard Output

```
SERP + AI Citation Monitor — Feb 18, 2026
══════════════════════════════════════════

Query: "battery storage cost ERCOT 2025"
  Google:     #4 (↑2)  alva.energy/analysis/ercot-bess-cost
  Perplexity: CITED ✓  [2nd citation of 4]
  ChatGPT:    CITED ✓  [inline link in answer]
  Claude:     NOT CITED ✗ → Action: check entity disambiguation

Query: "ERCOT PCM credit mechanism"
  Google:     #12 (—)
  Perplexity: NOT CITED ✗ → Competitor: utilitydive.com CITED
  ChatGPT:    NOT CITED ✗
  Claude:     NOT CITED ✗
  → GAP DETECTED: High priority content target
```

This dashboard is the daily operational view that drives SPECTER's content priorities.

### Anti-Detection Ethics

SPECTER is an autonomous agent that acquires data at scale. With that capability comes responsibility. This node defines the ethical and legal boundaries for scraping operations — not as a compliance checkbox but as a genuine constraint the agent loads before every scraping session.

#### The Ethical Framework

**Principle 1: Respect robots.txt.** If a site's `robots.txt` disallows crawling a path, the agent does not crawl that path. Period. This is not a legal requirement in all jurisdictions but it is an ethical one — it is the site owner's explicit statement of preference.

```python
from urllib.robotparser import RobotFileParser

def check_robots(url: str, user_agent: str = "*") -> bool:
    """Return True if scraping is allowed."""
    rp = RobotFileParser()
    rp.set_url(f"{urlparse(url).scheme}://{urlparse(url).netloc}/robots.txt")
    rp.read()
    return rp.can_fetch(user_agent, url)
```

**Principle 2: Rate limit as citizenship.** Even when robots.txt allows access, hammering a server with hundreds of requests per second is destructive. The agent enforces minimum delays:

```python
RATE_LIMITS = {
    "default": 2.0,           # 2 seconds between requests to same domain
    "small_sites": 5.0,       # 5 seconds for sites with limited infrastructure
    "api_endpoints": 1.0,     # 1 second for APIs (usually have their own limits)
    "large_platforms": 1.5,   # 1.5 seconds for sites that expect bot traffic
}
```

**Principle 3: Review Terms of Service.** Before adding a target to the recurring scrape list, review their ToS for explicit prohibitions on automated access. Sites that explicitly prohibit scraping should be marked as "ToS-restricted" in the target registry and handled via alternative channels (x402 payment, manual research, or skip).

**Principle 4: Pay when appropriate.** The most ethical approach to data acquisition is paying for it. When an x402 endpoint exists for the data you need, paying is not just economically rational — it is the right thing to do. It compensates the data provider, funds infrastructure maintenance, and creates a legitimate transaction record. x402-payment-logic operationalizes this principle.

#### The Legal Landscape

**hiQ Labs v. LinkedIn (2022, 9th Circuit):** Scraping publicly accessible data is not a violation of the Computer Fraud and Abuse Act (CFAA). The court found that accessing publicly available LinkedIn profiles did not constitute "unauthorized access." This is the strongest US precedent supporting legal scraping of public data.

**Limitations:** The hiQ ruling applies to publicly accessible data. It does not apply to:
- Data behind authentication (logging in to scrape = different legal territory)
- Circumventing technical access controls (bypassing CAPTCHAs may violate DMCA)
- Violating contractual obligations (ToS agreements you've accepted)
- EU GDPR considerations for personal data (separate legal framework)

**Safe harbor:** Public data, no authentication bypass, robots.txt compliance, reasonable rate limiting, and no personal data storage without legitimate purpose. SPECTER operates within this safe harbor.

#### Decision Matrix

| Scenario | Action |
|----------|--------|
| Public data, robots.txt allows, no ToS prohibition | Scrape freely with rate limiting |
| Public data, robots.txt disallows | Do not scrape. Check for API or x402 alternative |
| Data behind login, free tier available | Use authenticated session within ToS |
| Data behind paywall | Do NOT circumvent. Use x402 if available, else skip |
| Personal data (names, emails, phones) | Only via legitimate API/x402 with privacy compliance |
| Competitor content for analysis | Scrape published content (public), do not republish |

#### Agent Pre-Flight Check

Before any scraping session, the agent runs:

```
□ Target URL robots.txt checked — scraping allowed?
□ Domain rate limit configured in rate_limits?
□ ToS reviewed (or flagged for human review)?
□ Data type classified — is this personal data?
□ x402 alternative checked — can we pay instead?
□ Purpose documented — why are we acquiring this data?
```

If any check fails, the agent does not proceed. It logs the failure reason and moves to the next target. Ethical operation is not optional — it is a hard constraint that protects the system from legal exposure and maintains the community trust that makes open-source viable.

## x402 Payments

This is the cluster that makes SPECTER self-funding — the architectural innovation that separates an autonomous agent from a sophisticated cron job. The agent has a wallet, a budget, and decision logic that governs when paying for data is smarter than scraping it. No human approves each transaction. The agent decides, pays, and accounts for the spend automatically.

The foundation is x402-protocol-primer — how HTTP 402 Payment Required works as a machine-readable payment gate. An agent hits an endpoint, receives pricing in the 402 response, pays via stablecoin micropayment, retries with payment proof, and gets premium data. This protocol turns every API behind a paywall into an agent-accessible resource.

x402-wallet-management covers the wallet architecture: hot wallet with spending limits, environment variable conventions for key storage, balance monitoring, and auto-refill triggers. stablecoin-operations handles the practical currency layer — USDC on Base is the dominant x402 currency, and this node covers gas costs, bridging, and on-ramp logistics.

The decision layer is x402-payment-logic — the core pay-or-scrape algorithm. Given a data need, a scraping alternative, and remaining budget, should the agent pay? The decision weighs data quality, scraping risk, time cost, and price. Simple threshold: if the x402 call costs <$0.01 and scraping risk is medium or higher, always pay.

x402-datasource-registry is the living catalog of x402-enabled data sources — the community-buildable resource that becomes SPECTER's most shareable artifact. micropayment-budget-management governs spending caps, burn rate monitoring, and automatic pause conditions. x402-fallback-chains ensures the agent degrades gracefully when payments fail. x402-cost-accounting closes the financial loop: cost per data point, cost per citation gained, ROI per dollar spent.

The philosophical point: traditional SaaS charges monthly subscriptions for data access. x402 charges per request. For an autonomous agent that might need 10 requests from one source and 10,000 from another, per-request pricing is radically more efficient. The agent pays exactly for what it uses, and tracks exactly what it got.

### x402 Protocol Primer

HTTP 402 Payment Required has existed in the HTTP spec since 1997, reserved "for future use." The x402 protocol activates it: a standardized handshake that lets an agent hit a paid API, receive a machine-readable payment request, pay via stablecoin, and retry with proof of payment — all without human intervention. This is the protocol that makes autonomous intelligence acquisition possible.

#### The Request/Response Cycle

```
1. Agent → Endpoint:   GET /api/enrichment?domain=competitor.com
                        (no payment headers)

2. Endpoint → Agent:   HTTP 402 Payment Required
                        x402-price: 0.005
                        x402-currency: USDC
                        x402-network: base
                        x402-recipient: 0x1234...abcd
                        x402-accepts: exact,x402-facilitator
                        Content-Type: application/json
                        {"description": "Company enrichment data",
                         "schema": {"name": "string", "employees": "int", ...}}

3. Agent:              Reads price ($0.005 USDC), checks budget,
                        decides to pay (see x402-payment-logic),
                        signs transaction on Base network.

4. Agent → Endpoint:   GET /api/enrichment?domain=competitor.com
                        x402-payment: <signed_payment_proof>

5. Endpoint → Agent:   HTTP 200 OK
                        {"name": "Competitor Inc", "employees": 450, ...}
```

#### Why This Matters for Autonomous Agents

Traditional API monetization requires: (1) creating an account, (2) entering a credit card, (3) receiving an API key, (4) managing subscription tiers and rate limits. This workflow assumes a human operator. An autonomous agent cannot create accounts or enter credit cards.

x402 replaces all of this with a single primitive: pay per request. The agent has a wallet with a balance. The endpoint has a price. The transaction happens on-chain. No accounts, no API keys, no subscriptions, no human in the loop.

#### MCP Tool Integration

In Claude Code, x402 is available via the MCP x402 tools:

- `mcp__x402__check_endpoint_schema` — Probe an endpoint before paying. Returns pricing, input schema, payment methods. Use this to preview costs without spending.
- `mcp__x402__fetch` — Execute a request with automatic payment. Detects 402 responses, signs payment, retries with proof. Returns data + payment details (price, tx hash).
- `mcp__x402__get_wallet_info` — Check wallet address and USDC balance on Base. Call before first paid request in a session.
- `mcp__x402__discover_api_endpoints` — List available x402-protected resources on an origin.

#### Known x402 Origins

As of current knowledge:

- `https://enrichx402.com` — People/org search, Google Maps, Grok Twitter search, Exa web search, Clado LinkedIn data, Firecrawl web scrape, WhitePages, email enrichment, Hunter email verifier
- `https://stablestudio.io` — Image and video generation/editing

The x402-datasource-registry maintains a comprehensive catalog with pricing and quality scores.

#### Cost Economics

Typical x402 call prices range from $0.001 to $0.05 per request. Compare this to:
- SaaS API subscriptions: $50-500/month for limited calls
- Manual research: $25-100/hour for a human analyst
- Scraping infrastructure: $50-200/month for proxy services

An agent making 100 x402 calls/day at $0.01 average spends $1/day — $30/month. For targeted, high-quality data that would cost thousands to acquire through traditional channels. The economics are transformative for autonomous operations.

### Wallet Management

An autonomous agent that spends money needs a wallet with guardrails. This node covers the architecture: how to set up a hot wallet, enforce spending limits, monitor balances, and maintain security — all without requiring human approval for individual transactions.

#### Wallet Setup

The x402 MCP tool auto-creates a wallet on first use at `~/.x402scan-mcp/wallet.json`. For SPECTER, this is the default wallet. Key management rules:

1. **Never expose the private key in the skill graph, logs, or conversation.** Reference via environment variable: `X402_WALLET_KEY` or let the MCP tool manage it.
2. **The wallet is a hot wallet with limited funds.** Treat it like a petty cash drawer, not a savings account. Keep only the budget needed for the current cycle.
3. **Fund via Base network USDC.** Use the deposit link from `mcp__x402__get_wallet_info`. Deposit $5-20 for testing, $50-100 for sustained operation.

#### Wallet Operations Checklist

Before any session involving payments:

```python
# 1. Check wallet status
wallet = mcp__x402__get_wallet_info()
print(f"Address: {wallet.address}")
print(f"Balance: {wallet.balance} USDC")
print(f"Network: Base")

# 2. Verify sufficient balance for planned operations
planned_spend = estimate_session_spend()  # from budget allocation
if wallet.balance < planned_spend * 1.5:  # 50% buffer
    print(f"WARNING: Balance ${wallet.balance} may be insufficient")
    print(f"Planned spend: ${planned_spend}")
    print(f"Top up wallet at: {wallet.deposit_link}")

# 3. Log opening balance for cost accounting
session_log = {
    "session_start": datetime.utcnow(),
    "opening_balance": wallet.balance,
    "planned_budget": planned_spend
}
```

#### Spending Limits Architecture

The agent enforces limits at three levels:

**Per-transaction limit**: Maximum single payment. Default: $0.10. Any x402 request exceeding this triggers a pause-and-confirm. Prevents runaway spending from malformed requests or unexpected pricing.

**Per-session limit**: Maximum total spend in one agent session. Default: $5.00. When reached, the agent stops making paid requests and reports remaining gaps.

**Daily limit**: Maximum 24-hour spend. Default: $20.00. Tracked via a local ledger file.

```json
// ~/.specter/spending_limits.json
{
  "per_transaction_max_usd": 0.10,
  "per_session_max_usd": 5.00,
  "daily_max_usd": 20.00,
  "monthly_max_usd": 200.00,
  "auto_pause_on_breach": true,
  "alert_at_percentage": 80
}
```

#### Balance Monitoring

The agent checks balance:
- At session start (mandatory)
- After every 10 paid requests
- When remaining budget drops below 20% of session allocation

If balance drops below $1.00, the agent logs a warning and switches to scrape-only mode via x402-fallback-chains. If balance hits $0.00, all paid operations halt.

#### Security Model

- Private key never leaves the wallet file
- MCP tool handles signing internally — the agent never touches raw keys
- Transaction hashes are logged for audit
- Wallet address is not sensitive — it's a public address on Base
- Recovery: if wallet is compromised, create a new one and update `~/.x402scan-mcp/wallet.json`

#### Refill Strategy

For sustained operation, set up a simple monitoring script:

```bash
# Check balance and alert if low (run via cron every 6 hours)
# Actual implementation: read wallet balance via Base RPC
# Alert via email/Slack if below threshold
```

Manual refill is acceptable for early operation. Automated refill from a treasury wallet (with its own spending limits) is the path to fully autonomous long-term operation.

### Datasource Registry

This is the catalog of data sources that accept x402 micropayments. An agent consults this registry before deciding whether to scrape or pay for data. The registry is designed to be community-buildable — the more agents that contribute source evaluations, the more valuable it becomes.

#### Registry Format

```yaml
# ~/.specter/x402_datasource_registry.yaml
sources:
  - name: "EnrichX402 — Company Enrichment"
    origin: "https://enrichx402.com"
    endpoint: "/api/company"
    method: "POST"
    data_type: "company_profile"
    fields: ["name", "employees", "revenue", "industry", "location", "description"]
    price_per_call: 0.005
    currency: "USDC"
    network: "base"
    quality_score: 8  # 1-10, based on data completeness and accuracy
    freshness: "weekly"  # how often the underlying data updates
    last_verified: "2026-02-15"
    notes: "Good for US companies. International coverage patchy."

  - name: "EnrichX402 — Person Search"
    origin: "https://enrichx402.com"
    endpoint: "/api/person"
    method: "POST"
    data_type: "person_profile"
    fields: ["name", "title", "company", "email", "linkedin"]
    price_per_call: 0.008
    currency: "USDC"
    network: "base"
    quality_score: 7
    freshness: "daily"
    last_verified: "2026-02-15"

  - name: "EnrichX402 — Grok Twitter Search"
    origin: "https://enrichx402.com"
    endpoint: "/api/twitter"
    method: "POST"
    data_type: "social_intelligence"
    fields: ["tweets", "engagement", "sentiment", "trending_topics"]
    price_per_call: 0.003
    currency: "USDC"
    network: "base"
    quality_score: 9
    freshness: "real-time"
    last_verified: "2026-02-15"
    notes: "Best source for real-time social signals. Use for trending topic monitoring."

  - name: "EnrichX402 — Exa Web Search"
    origin: "https://enrichx402.com"
    endpoint: "/api/exa"
    method: "POST"
    data_type: "web_search"
    fields: ["results", "snippets", "urls", "relevance_scores"]
    price_per_call: 0.003
    currency: "USDC"
    network: "base"
    quality_score: 8
    freshness: "real-time"
    last_verified: "2026-02-15"

  - name: "EnrichX402 — Firecrawl Web Scrape"
    origin: "https://enrichx402.com"
    endpoint: "/api/firecrawl"
    method: "POST"
    data_type: "web_content"
    fields: ["markdown", "html", "metadata", "links"]
    price_per_call: 0.005
    currency: "USDC"
    network: "base"
    quality_score: 9
    freshness: "real-time"
    last_verified: "2026-02-15"
    notes: "Clean markdown extraction. Better than raw scraping for most targets."

  - name: "StableStudio — Image Generation"
    origin: "https://stablestudio.io"
    endpoint: "/api/generate"
    method: "POST"
    data_type: "image"
    fields: ["image_url", "prompt", "dimensions"]
    price_per_call: 0.02
    currency: "USDC"
    network: "base"
    quality_score: 7
    freshness: "n/a"
    last_verified: "2026-02-15"
    notes: "Useful for generating featured images for published content."
```

#### Querying the Registry

The agent queries the registry programmatically:

```python
import yaml

def find_source(data_type: str, max_price: float = 0.05) -> list[dict]:
    """Find x402 sources matching data type within budget."""
    with open("~/.specter/x402_datasource_registry.yaml") as f:
        registry = yaml.safe_load(f)

    return sorted(
        [s for s in registry["sources"]
         if s["data_type"] == data_type
         and s["price_per_call"] <= max_price],
        key=lambda s: (-s["quality_score"], s["price_per_call"])
    )
```

#### Discovery Protocol

To expand the registry, the agent uses `mcp__x402__discover_api_endpoints` on known origins and evaluates new endpoints:

1. Discover endpoints on an origin
2. Probe each with `mcp__x402__check_endpoint_schema` to get pricing and schema
3. Make a test call with `mcp__x402__fetch`
4. Score data quality (completeness, accuracy, freshness)
5. Add to registry YAML with quality score and verification date

#### Community Contribution Model

The registry is the most shareable artifact in SPECTER. Publishing it openly creates: (1) immediate value for any developer building autonomous agents, (2) network effects as contributors add new sources, (3) a trust layer as quality scores aggregate community feedback. This is the node to open-source first — it is useful standalone and draws people into the full graph.

### Payment Logic

The core decision: given a data need, should the agent pay via x402 or scrape? This is not a philosophical question — it is an optimization problem with concrete inputs and a deterministic output.

#### Decision Function

```python
from enum import Enum
from dataclasses import dataclass

class Action(Enum):
    PAY = "pay"
    SCRAPE = "scrape"
    SKIP = "skip"

@dataclass
class DataNeed:
    data_type: str
    urgency: str          # "immediate" | "can_wait" | "background"
    quality_required: str  # "high" | "medium" | "low"

@dataclass
class X402Option:
    price_usd: float
    quality_score: int     # 1-10
    available: bool

@dataclass
class ScrapeOption:
    risk_level: str        # "low" | "medium" | "high"
    estimated_time_sec: int
    success_probability: float  # 0.0-1.0
    requires_proxy: bool
    requires_headless: bool

def decide(need: DataNeed, x402: X402Option, scrape: ScrapeOption,
           budget_remaining: float) -> Action:
    """
    Pay-or-scrape decision with concrete thresholds.
    """
    # Rule 1: If no x402 source exists, scrape or skip
    if not x402.available:
        if scrape.success_probability > 0.5:
            return Action.SCRAPE
        return Action.SKIP

    # Rule 2: If x402 is cheap and scraping is risky, always pay
    if x402.price_usd < 0.01 and scrape.risk_level in ("medium", "high"):
        if budget_remaining > x402.price_usd:
            return Action.PAY

    # Rule 3: If quality requirements are high, prefer paid data
    if need.quality_required == "high" and x402.quality_score >= 7:
        if budget_remaining > x402.price_usd:
            return Action.PAY

    # Rule 4: If urgent and scraping is slow, pay
    if need.urgency == "immediate" and scrape.estimated_time_sec > 30:
        if budget_remaining > x402.price_usd:
            return Action.PAY

    # Rule 5: If scraping requires heavy infrastructure, pay if cheap
    if (scrape.requires_proxy or scrape.requires_headless) and x402.price_usd < 0.05:
        if budget_remaining > x402.price_usd:
            return Action.PAY

    # Rule 6: If budget is tight, prefer scraping for low-risk targets
    if budget_remaining < 1.00 and scrape.risk_level == "low":
        return Action.SCRAPE

    # Rule 7: Default — cost comparison
    scrape_effective_cost = (
        0.001 * scrape.estimated_time_sec  # time cost
        + (0.01 if scrape.requires_proxy else 0)  # proxy cost
        + (0.02 if scrape.requires_headless else 0)  # compute cost
        + (0.05 * (1 - scrape.success_probability))  # failure risk cost
    )

    if x402.price_usd < scrape_effective_cost:
        return Action.PAY
    elif scrape.success_probability > 0.7:
        return Action.SCRAPE
    else:
        return Action.SKIP
```

#### Quick-Reference Thresholds

| Scenario | Price | Risk | Decision |
|----------|-------|------|----------|
| x402 < $0.01, any scrape risk | cheap | any | **PAY** |
| x402 < $0.05, high scrape risk | moderate | high | **PAY** |
| x402 > $0.05, low scrape risk | expensive | low | **SCRAPE** |
| x402 unavailable, scrape possible | n/a | any | **SCRAPE** |
| x402 > $0.10, data not critical | expensive | any | **SKIP** |
| Budget < $1.00 remaining | any | low | **SCRAPE** |
| Budget < $0.50 remaining | any | any | **SKIP** unless critical |

#### Logging Decisions

Every pay-or-scrape decision is logged for x402-cost-accounting:

```json
{
  "timestamp": "2026-02-18T14:30:00Z",
  "data_type": "company_profile",
  "target": "competitor.com",
  "decision": "pay",
  "x402_price": 0.005,
  "scrape_risk": "medium",
  "scrape_time_est": 45,
  "budget_remaining_before": 4.23,
  "rationale": "rule_2: cheap x402 + medium scrape risk"
}
```

This log feeds the cost accounting system, enabling the agent to optimize its own decision thresholds over time based on actual outcomes.

### Budget Management

The agent spends real money. Without governance, it could drain a wallet in minutes. This node defines the budget architecture that enables autonomous spending while preventing runaway costs.

#### Budget Allocation Structure

```json
// ~/.specter/budget_allocation.json
{
  "daily_budget_usd": 20.00,
  "allocations": {
    "data_acquisition": {
      "percentage": 50,
      "daily_limit_usd": 10.00,
      "includes": ["company_enrichment", "person_search", "web_scrape"]
    },
    "content_distribution": {
      "percentage": 20,
      "daily_limit_usd": 4.00,
      "includes": ["social_api_costs", "syndication_fees"]
    },
    "verification_tools": {
      "percentage": 15,
      "daily_limit_usd": 3.00,
      "includes": ["serp_api", "ai_query_costs"]
    },
    "image_generation": {
      "percentage": 10,
      "daily_limit_usd": 2.00,
      "includes": ["featured_images", "social_graphics"]
    },
    "reserve": {
      "percentage": 5,
      "daily_limit_usd": 1.00,
      "includes": ["unexpected_opportunities"]
    }
  },
  "enforcement": {
    "hard_stop_on_daily_limit": true,
    "alert_at_80_percent": true,
    "rollover_unused": false
  }
}
```

#### Burn Rate Monitoring

The agent calculates burn rate after every transaction:

```python
def check_burn_rate(session_log: list[dict], session_start: datetime) -> dict:
    elapsed_minutes = (datetime.utcnow() - session_start).total_seconds() / 60
    total_spent = sum(tx["amount_usd"] for tx in session_log)
    burn_rate_per_hour = (total_spent / elapsed_minutes) * 60 if elapsed_minutes > 0 else 0

    daily_budget = load_budget()["daily_budget_usd"]
    remaining = daily_budget - get_daily_spend()
    hours_until_depleted = remaining / burn_rate_per_hour if burn_rate_per_hour > 0 else float('inf')

    return {
        "total_spent_session": total_spent,
        "burn_rate_per_hour": burn_rate_per_hour,
        "daily_remaining": remaining,
        "hours_until_depleted": hours_until_depleted,
        "status": "ok" if hours_until_depleted > 4 else "warning" if hours_until_depleted > 1 else "critical"
    }
```

#### Automatic Pause Conditions

The agent pauses paid operations when ANY of these conditions are met:

1. **Daily limit reached** — total 24h spend >= daily_budget_usd
2. **Category limit reached** — spend in any category >= that category's daily_limit_usd
3. **Burn rate critical** — projected to exhaust daily budget within 1 hour
4. **Wallet balance low** — wallet USDC balance < $1.00
5. **Transaction anomaly** — single transaction > 5x the average transaction for that data type
6. **Sequential failures** — 3+ consecutive x402 payments that returned errors or low-quality data

When paused, the agent:
- Logs the pause reason
- Switches to scrape-only mode for remaining tasks
- Reports to the human operator via the session summary
- Does NOT automatically resume spending — requires explicit re-authorization or next day's budget reset

#### Monthly Budget Review

At the end of each month (or after 30 days of operation), the agent generates a budget report:

```
SPECTER Monthly Spend Report — February 2026
═══════════════════════════════════════════════
Total Spend:           $142.30
Daily Average:          $5.08
Peak Day:              $18.90 (Feb 12 — competitor analysis sprint)

By Category:
  Data Acquisition:    $71.50 (50.3%) — 1,430 calls @ $0.05 avg
  Content Distribution: $28.20 (19.8%)
  Verification Tools:  $21.40 (15.0%)
  Image Generation:    $14.30 (10.1%)
  Reserve:              $6.90 (4.8%)

ROI Metrics (from x402-cost-accounting):
  Citations gained:     47
  Cost per citation:    $3.03
  Top ROI source:       EnrichX402 company enrichment ($0.005/call, 12 citations enabled)
```

This report feeds back into budget allocation decisions for the next cycle. Categories with high ROI get increased allocation; low-ROI categories get trimmed.

### Fallback Chains

Payment failures happen: endpoints go down, wallet balance depletes mid-session, network congestion causes transaction timeouts, price changes exceed budget thresholds. An autonomous agent cannot block on payment failures — it must degrade gracefully and continue operating.

#### The Fallback Chain

For any data acquisition attempt, the agent follows this chain:

```
1. x402 Payment (preferred)
   ↓ failure
2. Local Cache Check
   ↓ miss or stale
3. Alternative x402 Source (from registry)
   ↓ unavailable or too expensive
4. Direct Scrape
   ↓ blocked or failed
5. Public API Fallback
   ↓ unavailable
6. Log Gap and Skip
```

#### Implementation

```python
from dataclasses import dataclass
from typing import Optional
import time

@dataclass
class AcquisitionResult:
    data: Optional[dict]
    source: str           # "x402" | "cache" | "x402_alt" | "scrape" | "api" | "skip"
    cost_usd: float
    quality_score: int
    stale: bool

async def acquire_with_fallback(
    data_type: str,
    target: str,
    registry: Registry,
    cache: Cache,
    max_price: float = 0.05
) -> AcquisitionResult:
    """Execute fallback chain for data acquisition."""

    # Step 1: Try primary x402 source
    primary = registry.get_primary(data_type)
    if primary and primary.price_per_call <= max_price:
        try:
            result = await x402_fetch(primary.endpoint, target)
            if result.status == 200:
                cache.store(data_type, target, result.data)
                return AcquisitionResult(
                    data=result.data, source="x402",
                    cost_usd=result.price_paid, quality_score=primary.quality_score,
                    stale=False
                )
        except (PaymentError, TimeoutError, NetworkError) as e:
            log_fallback("x402_primary_failed", str(e))

    # Step 2: Check cache
    cached = cache.get(data_type, target)
    if cached and not cached.is_expired():
        return AcquisitionResult(
            data=cached.data, source="cache",
            cost_usd=0, quality_score=cached.quality_score,
            stale=False
        )
    # Allow stale cache if nothing else works (checked again at step 6)

    # Step 3: Try alternative x402 sources
    alternatives = registry.get_alternatives(data_type, exclude=primary)
    for alt in alternatives:
        if alt.price_per_call <= max_price:
            try:
                result = await x402_fetch(alt.endpoint, target)
                if result.status == 200:
                    cache.store(data_type, target, result.data)
                    return AcquisitionResult(
                        data=result.data, source="x402_alt",
                        cost_usd=result.price_paid, quality_score=alt.quality_score,
                        stale=False
                    )
            except Exception:
                continue

    # Step 4: Direct scrape
    scrape_config = registry.get_scrape_config(data_type, target)
    if scrape_config and scrape_config.risk_level != "high":
        try:
            data = await scrape(scrape_config)
            if data:
                cache.store(data_type, target, data)
                return AcquisitionResult(
                    data=data, source="scrape",
                    cost_usd=0, quality_score=5,
                    stale=False
                )
        except ScrapeError:
            log_fallback("scrape_failed", target)

    # Step 5: Return stale cache if available
    if cached:
        return AcquisitionResult(
            data=cached.data, source="cache",
            cost_usd=0, quality_score=max(1, cached.quality_score - 2),
            stale=True
        )

    # Step 6: Log gap and skip
    log_gap(data_type, target, "all_fallbacks_exhausted")
    return AcquisitionResult(
        data=None, source="skip",
        cost_usd=0, quality_score=0,
        stale=False
    )
```

#### Cache Architecture

The local cache sits between the agent and all data sources:

```python
# Cache key: (data_type, target_identifier)
# Cache value: {data, timestamp, source, quality_score}
# TTL by data type:
CACHE_TTL = {
    "company_profile": 7 * 86400,    # 7 days
    "person_profile": 14 * 86400,    # 14 days
    "web_content": 1 * 86400,        # 1 day
    "social_intelligence": 3600,      # 1 hour
    "serp_data": 86400,              # 1 day
}
```

SQLite is the recommended cache backend for single-agent operation. For multi-agent setups, Redis provides shared cache with TTL enforcement built in.

#### Key Principle

The fallback chain ensures the agent never blocks on a single data source failure. Speed degrades, quality may decrease, and some data needs go unfilled — but the pipeline keeps moving. A gap logged today becomes a retry target tomorrow. The agent's resilience comes not from each individual step succeeding but from the chain always producing a result, even if that result is "skip and revisit."

### Stablecoin Operations

USDC on Base is the dominant currency for x402 payments. This node covers the practical operations an agent (or its operator) needs to keep the wallet funded and operational.

#### Why USDC on Base

- **USDC**: 1:1 USD peg by Circle, widely accepted, no volatility risk. The agent's budget is denominated in dollars and pays in dollars — no FX exposure.
- **Base**: Coinbase's L2 on Ethereum. Gas costs are sub-$0.01 per transaction (typically $0.001-$0.005). Settlement is fast (~2 seconds). The economics make micropayments viable — you can pay $0.005 for data without $5 in gas fees eating the transaction.

#### Funding the Wallet

##### Option 1: Direct Transfer from Coinbase

If the operator has a Coinbase account:
1. Buy USDC on Coinbase
2. Withdraw to the agent wallet address on Base network
3. Ensure "Base" is selected as the withdrawal network (not Ethereum mainnet)
4. Typical arrival: 1-5 minutes

##### Option 2: Bridge from Ethereum Mainnet

If USDC is held on Ethereum L1:
1. Use the official Base Bridge (bridge.base.org) or Superbridge
2. Approve USDC spending, then initiate bridge
3. Wait ~10 minutes for L2 finality
4. Cost: ~$2-5 in L1 gas for the bridge transaction

##### Option 3: On-Ramp Services

For operators without crypto holdings:
- Coinbase Onramp SDK
- MoonPay / Transak for direct fiat → USDC on Base
- Typical fees: 1-3% of purchase amount

##### Option 4: Invite Code Redemption

For initial testing, the x402 MCP tools support invite code redemption:
```
mcp__x402__redeem_invite(code="YOUR_CODE")
```
This deposits free USDC on Base for evaluation — one-time use per code.

#### Gas Management

Base transactions require ETH for gas (not USDC). The agent's wallet needs a small ETH balance:

- **Minimum ETH balance**: 0.001 ETH (~$3 at current prices) — sufficient for ~1,000 transactions
- **Gas per x402 payment**: ~$0.001-0.005 depending on Base network congestion
- **Monitoring**: If ETH balance drops below 0.0005 ETH, flag for refill

Most x402 facilitators handle gas abstraction — the payment proof is signed off-chain and the facilitator pays gas. But direct on-chain USDC transfers (wallet-to-wallet) still require ETH gas. Keep a small buffer.

#### Transaction Tracking

Every x402 payment returns a transaction hash. Log these for audit:

```json
{
  "tx_hash": "0xabc123...",
  "timestamp": "2026-02-18T14:30:00Z",
  "amount_usdc": 0.005,
  "recipient": "0x1234...abcd",
  "endpoint": "https://enrichx402.com/api/company",
  "data_type": "company_profile",
  "gas_cost_eth": 0.000002
}
```

Transaction hashes are verifiable on Base block explorer (basescan.org). This provides a permanent, public audit trail of every payment the agent makes — useful for cost accounting, debugging, and demonstrating the system's transparency.

#### Operational Rhythm

- **Weekly**: Check wallet balance, top up if below $10
- **Monthly**: Review transaction log, reconcile with budget reports
- **Quarterly**: Evaluate whether USDC on Base remains the optimal chain/currency (monitor for new x402 network support)

### Cost Accounting

SPECTER spends money to make money. This node defines the accounting model that proves it works — tracking the causal chain from dollars spent on data acquisition to citations gained in AI search results.

#### The Accounting Chain

```
$0.005 spent on company enrichment (x402)
  → data used in competitive analysis
    → citation gap identified
      → content brief generated
        → article published
          → cited by Perplexity on 3 queries
            → estimated 450 impressions/month
              → brand authority increased
```

Every dollar spent should be traceable through this chain. Not every path is linear or immediate, but the accounting model captures the relationships.

#### Core Metrics

```python
@dataclass
class CostMetrics:
    # Input metrics
    total_spend_usd: float
    total_x402_calls: int
    total_scrape_operations: int

    # Output metrics
    content_pieces_published: int
    citations_gained: int
    citation_impressions: int  # estimated monthly AI query impressions

    # Derived metrics
    @property
    def cost_per_call(self) -> float:
        return self.total_spend_usd / max(1, self.total_x402_calls)

    @property
    def cost_per_content(self) -> float:
        return self.total_spend_usd / max(1, self.content_pieces_published)

    @property
    def cost_per_citation(self) -> float:
        return self.total_spend_usd / max(1, self.citations_gained)

    @property
    def cost_per_impression(self) -> float:
        return self.total_spend_usd / max(1, self.citation_impressions)
```

#### The Dashboard

```
SPECTER Cost Accounting — Week of Feb 17, 2026
══════════════════════════════════════════════════════

Spend:
  x402 data acquisition    $8.40  │  168 calls  │  $0.05/call avg
  Content distribution     $3.20  │   16 posts  │  $0.20/post avg
  Verification queries     $2.10  │  210 checks │  $0.01/check avg
  Image generation         $1.80  │    9 images │  $0.20/image avg
  ─────────────────────────────────────────────────
  Total                   $15.50

Output:
  Content pieces published     6
  AI citations gained         12
  Queries now citing us       18  (up from 11 last week)
  Estimated monthly impr.  2,400

Unit Economics:
  Cost per citation        $1.29  ← this is the number that matters
  Cost per impression      $0.006
  Cost per content piece   $2.58

Comparison:
  Human content team       ~$500/article  →  $42/citation (est.)
  SEO agency retainer      ~$5K/month     →  unknown citations
  SPECTER autonomous       $15.50/week    →  $1.29/citation

ROI Assessment: SPECTER delivers citations at 1/30th the cost
of human-produced content. Recommend increasing daily budget
from $3.00 to $5.00 to capture more gaps.
```

#### Attribution Model

Not every citation is directly attributable to a single x402 payment. The attribution model uses three levels:

**Direct attribution**: x402 data was used directly in the cited content (e.g., competitor data enriched an article that got cited). Confidence: high.

**Indirect attribution**: x402 data informed the gap analysis or strategy that led to content creation. The data didn't appear in the content but enabled its creation. Confidence: medium.

**Ambient attribution**: x402 spending on verification and monitoring accelerated the feedback loop, enabling faster iteration. Confidence: low, but still valuable.

For the dashboard, report direct attributions as the primary metric. Track indirect and ambient as supplementary context. Over time, the correlation between spend and citations will reveal the true ROI even for indirect paths.

#### The Investor Slide

This is the one-slide pitch for SPECTER's economics:

```
Traditional content marketing:  $5,000/month → 10 articles → ~3 AI citations
SPECTER autonomous operation:     $100/month → 25 articles → ~20 AI citations

Cost per AI citation:
  Traditional:  $1,667
  SPECTER:         $5

SPECTER is 333x more cost-efficient at earning AI citations.
```

The numbers will vary — calibrate with real data from verification-loop and citation-tracking-database. But the structural advantage is permanent: autonomous operation at machine speed with micropayment data acquisition will always be cheaper than human editorial teams with SaaS subscriptions.

## Content Velocity

Speed is the competitive advantage that no human team can match. The time between identifying a citation gap and publishing content that fills it determines whether you capture the AI citation or your competitor does. SPECTER compresses this cycle from weeks (human editorial process) to minutes (autonomous pipeline).

The pipeline flows linearly but operates continuously:

**Gap Analysis** — content-gap-analysis identifies specific queries where AI systems answer but don't cite you. This is the demand signal. The agent runs 50+ seed queries against Perplexity, ChatGPT, and Claude, logs every citation, and identifies where you're absent.

**Brief Generation** — content-brief-geo transforms each gap into a structured brief optimized for GEO rather than SEO. The brief specifies: the target question, the definitive answer paragraph to write first, required structured data, original data to include, competitor citations to displace. The brief is the blueprint — if the brief is right, the content almost writes itself.

**Content Generation** — autonomous-content-generation executes the brief: API call to Claude with the brief as input, GEO scoring of the output against the citation-worthiness rubric, revision loop until the score exceeds the threshold. The agent generates, evaluates, and iterates without human review.

**Publishing** — publishing-pipeline pushes content to CMS via API (WordPress, Ghost, Webflow), injects structured data at publish time, manages canonical URLs, and pings sitemaps. The content goes live the moment it passes the GEO score threshold.

**Distribution** — distribution-automation amplifies across channels: social (X API, LinkedIn API), newsletters, syndication platforms (Medium, Substack), and community submissions (Reddit, HN with anti-spam timing). Each channel gets format-optimized content, not copy-paste.

**Meta-Distribution** — viral-distribution-playbook is the recursive play — using the content velocity pipeline to distribute SPECTER itself. GEO-optimize the docs, publish the x402 registry as a public resource, create the viral demo. The system promotes itself through the same pipeline it builds for clients.

The velocity metric that matters: gap-to-publish time. If you can consistently publish citation-worthy content within 30 minutes of identifying a gap, you will outrun any human-paced competitor.

### Content Gap Analysis

Content gap analysis translates raw citation gaps into actionable content targets. While ai-citation-gaps identifies where you're not being cited, this node defines how to prioritize those gaps and convert them into content briefs.

#### The Process

##### Step 1: Ingest Citation Gap Data

Pull scored gaps from the citation gap audit:

```python
gaps = load_citation_gaps()  # from ai-citation-gaps output
# Filter to actionable gaps
actionable = [g for g in gaps if g["gap_score"] > 15 and g["gap_type"] != "skip"]
# Sort by score descending
actionable.sort(key=lambda g: g["gap_score"], reverse=True)
```

##### Step 2: Cluster Related Gaps

Multiple queries often map to the same content piece. Cluster related gaps:

```python
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.cluster import DBSCAN

queries = [g["query"] for g in actionable]
vectorizer = TfidfVectorizer(stop_words="english")
X = vectorizer.fit_transform(queries)
clusters = DBSCAN(eps=0.7, min_samples=2, metric="cosine").fit(X)

# Group gaps by cluster
gap_clusters = {}
for gap, label in zip(actionable, clusters.labels_):
    gap_clusters.setdefault(label, []).append(gap)
```

Each cluster represents one potential content piece that can fill multiple gaps simultaneously. A single comprehensive article on "ERCOT battery storage costs" might fill 5-8 related queries.

##### Step 3: Assess Your Ability to Win

For each cluster, evaluate:

- **Do we have original data?** Proprietary data = high citation probability
- **Do we have domain authority?** High DA = better retrieval ranking
- **Is the competition beatable?** Weak current answers = easier displacement
- **Can we publish faster?** For emerging topics, speed is everything

```python
def assess_winnability(cluster: list[dict]) -> float:
    """Score 0-1 for likelihood of winning AI citations."""
    has_original_data = 0.4 if check_data_availability(cluster) else 0.0
    domain_authority = min(0.2, get_domain_authority() / 100 * 0.2)
    competition_weakness = avg([1 - c["competitor_strength"] for c in cluster]) * 0.2
    topic_freshness = 0.2 if any(c["gap_type"] == "emerging" for c in cluster) else 0.1
    return has_original_data + domain_authority + competition_weakness + topic_freshness
```

##### Step 4: Generate Content Targets

Each high-scoring, winnable cluster becomes a content target:

```json
{
  "target_id": "ercot_bess_cost_2025",
  "primary_query": "What is the cost of battery storage in ERCOT?",
  "related_queries": [
    "ERCOT BESS installed cost per kWh",
    "Texas battery storage economics",
    "battery storage ROI ERCOT 2025"
  ],
  "gap_score_avg": 82.3,
  "winnability": 0.78,
  "gap_types": ["absent", "absent", "present_not_cited"],
  "competitor_citations_to_displace": ["utilitydive.com", "energystorage.org"],
  "recommended_format": "data_analysis_with_faq",
  "original_data_available": true,
  "priority": "immediate",
  "next_action": "generate_brief"
}
```

##### Step 5: Feed to Brief Generator

Top-priority targets flow to content-brief-geo for structured brief generation. The agent generates briefs for the top 3-5 targets per day, prioritized by gap score × winnability.

#### Refresh Cycle

Content gap analysis runs weekly on the full seed query set. After each publishing cycle, the verification loop updates which gaps have been filled and which remain. Unfilled gaps with rising competitor citations get priority boosts. Gaps that were filled but didn't gain citations get flagged for content quality review.

### Content Brief for GEO

A GEO content brief is fundamentally different from an SEO brief. An SEO brief says "target this keyword, write 1,500 words, include these H2s." A GEO brief says "answer this question definitively in one paragraph, make it the most citable source on the internet for this query, and wrap it in the right markup."

#### The GEO Brief Template

```markdown
# GEO Content Brief

## Target
- **Primary question:** [The exact question AI systems should cite you for]
- **Related queries:** [3-5 variations people ask]
- **Target AI systems:** [Perplexity / ChatGPT / Claude — or all]

## Competitive Landscape
- **Currently cited sources:** [URLs of sources AI currently cites for this query]
- **Their weaknesses:** [What's wrong with current answers: outdated, no data, hedged]
- **Our advantage:** [Original data, fresher, more definitive, better structured]

## The Citation-Worthy Paragraph (WRITE THIS FIRST)
[Draft the single paragraph that should get cited. This is the nucleus of the
entire piece. It must be: definitive, data-backed, self-contained, attributable.
Score it against the citation-worthiness rubric before proceeding.]

## Content Structure
1. **H1:** [Title — should contain or closely match the target question]
2. **Lede paragraph:** [= the citation-worthy paragraph, verbatim]
3. **Supporting sections:** [H2s that provide depth, each answerable standalone]
4. **Original data/table:** [Specific data to include — this is your moat]
5. **FAQ section:** [3-5 related questions with answer-complete paragraphs]

## Required Structured Data
- [ ] Article schema with datePublished and dateModified
- [ ] FAQPage schema for the FAQ section
- [ ] Dataset schema if original data is presented
- [ ] Organization schema (sameAs links for entity disambiguation)

## Publishing Target
- **CMS:** [WordPress / Ghost / Webflow / static site]
- **URL slug:** [/analysis/target-keyword-2025]
- **Publication deadline:** [Date — for trending topics, ASAP]
- **Distribution channels:** [Twitter, LinkedIn, newsletter, Reddit]

## Success Criteria
- [ ] Citation-worthiness score ≥ 7/10
- [ ] Cited by Perplexity within 72 hours of publication
- [ ] No competitor currently has equivalent content
```

#### Example: Completed Brief

```markdown
# GEO Content Brief — ERCOT Battery Storage Cost 2025

## Target
- **Primary question:** What does battery storage cost in ERCOT in 2025?
- **Related queries:** "ERCOT BESS cost per kWh", "Texas battery storage pricing",
  "utility-scale battery cost 2025"
- **Target AI systems:** All (Perplexity primary)

## Competitive Landscape
- **Currently cited:** utilitydive.com (general article, 2024 data),
  eia.gov (national averages, not ERCOT-specific)
- **Their weaknesses:** No ERCOT-specific cost breakdown, no revenue modeling,
  data is 6+ months old
- **Our advantage:** Proprietary ERCOT LMP analysis, site-specific cost model,
  2025 projections based on recent interconnection data

## The Citation-Worthy Paragraph
"As of Q1 2025, utility-scale battery energy storage systems in ERCOT cost
$280-340/kWh installed for 4-hour lithium iron phosphate (LFP) configurations,
according to Alva Energy's analysis of 12 recent Texas projects. This represents
a 15% decrease from 2023 pricing, driven by LFP cell cost reductions and
increased installer competition in the ERCOT interconnection queue. Revenue
potential ranges from $180-260/kW-year from combined energy arbitrage and
ancillary services, implying a 4-6 year payback period at current ERCOT
price spreads."

Score: Definitive (2), Original data (2), Answer-complete (2),
Attribution (2), Structured (1) = 9/10 ✓

## Content Structure
1. H1: "Battery Storage Cost in ERCOT: 2025 Analysis"
2. Lede: citation-worthy paragraph
3. H2: "Installed Cost Breakdown" — table with component costs
4. H2: "Revenue Potential by Region" — LMP analysis with map
5. H2: "Payback Period Modeling" — scenario analysis
6. H2: "Cost Trend 2022-2025" — chart with original data
7. FAQ: 5 questions with standalone answers
```

#### Brief Generation Automation

The agent generates briefs from content-gap-analysis targets:

```python
async def generate_brief(target: ContentTarget) -> str:
    """Generate a GEO content brief from a content target."""
    prompt = f"""Generate a GEO content brief following this template:
    [template above]

    Target: {target.primary_query}
    Related queries: {target.related_queries}
    Competitors currently cited: {target.competitor_citations}
    Our domain: {target.our_domain}
    Original data available: {target.original_data_description}

    Write the citation-worthy paragraph FIRST.
    Score it against the 5-point rubric.
    Only proceed if score >= 7."""

    return await claude_generate(prompt)
```

The brief is the quality gate. If the brief scores below 7 on the citation-worthiness rubric, the target is sent back to gap analysis for reassessment. The agent does not write bad content fast — it writes good content fast.

### Autonomous Content Generation

The agent generates draft content from a GEO brief, scores it against the citation-worthy-content rubric, and revises until the score exceeds the publish threshold. No human reviews the content before publishing. The quality gate is the scoring function, not a human editor.

#### Generation Pipeline

```python
import anthropic

async def generate_content(brief: ContentBrief) -> GeneratedContent:
    """Generate GEO-optimized content from brief with scoring loop."""

    client = anthropic.AsyncAnthropic()

    system_prompt = """You are a GEO-optimized content writer. Your content will be
evaluated for AI citation-worthiness. Prioritize:
1. Definitive, specific claims with numbers and sources
2. Answer-complete paragraphs (full answer in one paragraph)
3. Clear entity attribution ("According to [Brand]...")
4. Q&A format with headings as questions
5. Original data presentation with proper context

Do NOT hedge. Do NOT use filler phrases. Every sentence should carry information."""

    user_prompt = f"""Write a complete article based on this GEO content brief:

{brief.to_markdown()}

Requirements:
- Start with the citation-worthy paragraph from the brief (verbatim or improved)
- Each H2 section should be independently citable
- Include the FAQ section with 3-5 questions
- Use specific numbers, dates, and attributable claims
- Total length: 800-1500 words (quality > quantity)
- End with a structured data recommendation section (hidden from readers, for implementation)"""

    # Generation attempt
    response = await client.messages.create(
        model="claude-sonnet-4-5-20250929",
        max_tokens=4000,
        system=system_prompt,
        messages=[{"role": "user", "content": user_prompt}]
    )

    content = response.content[0].text
    score = score_citation_worthiness(content, brief)

    # Revision loop — max 3 attempts
    attempts = 1
    while score.total < 7 and attempts < 3:
        revision_prompt = f"""The content scored {score.total}/10 on citation-worthiness.

Issues:
{score.feedback}

Revise the content to address these issues. Keep what works, fix what doesn't.
Target score: ≥ 7/10.

Current content:
{content}"""

        response = await client.messages.create(
            model="claude-sonnet-4-5-20250929",
            max_tokens=4000,
            system=system_prompt,
            messages=[{"role": "user", "content": revision_prompt}]
        )

        content = response.content[0].text
        score = score_citation_worthiness(content, brief)
        attempts += 1

    return GeneratedContent(
        content=content,
        score=score,
        attempts=attempts,
        brief_id=brief.target_id,
        publish_ready=score.total >= 7
    )
```

#### Scoring Function

```python
def score_citation_worthiness(content: str, brief: ContentBrief) -> Score:
    """Score content against the 5-point citation-worthiness rubric."""

    scores = {}
    feedback = []

    # 1. Definitive statements (0-2)
    has_numbers = bool(re.findall(r'\$[\d,.]+|\d+%|\d+\s*(tonnes|kWh|MW|users)', content))
    has_no_hedging = not any(h in content.lower() for h in
        ["it depends", "may vary", "could be", "it's hard to say", "various factors"])
    scores["definitive"] = (1 if has_numbers else 0) + (1 if has_no_hedging else 0)
    if scores["definitive"] < 2:
        feedback.append("Add specific numbers and remove hedging language")

    # 2. Original data (0-2)
    has_data_claim = bool(re.search(r"according to .{5,50}('s |analysis|report|data)", content, re.I))
    has_table_or_list = bool(re.search(r'\|.*\|.*\||\d+\.\s', content))
    scores["original_data"] = (1 if has_data_claim else 0) + (1 if has_table_or_list else 0)
    if scores["original_data"] < 2:
        feedback.append("Include attributed data and structured presentation (table/list)")

    # 3. Answer completeness (0-2)
    paragraphs = [p.strip() for p in content.split('\n\n') if len(p.strip()) > 100]
    first_para_length = len(paragraphs[0].split()) if paragraphs else 0
    self_contained = not any(ref in content.lower() for ref in
        ["as mentioned above", "see below", "as discussed", "as we noted"])
    scores["completeness"] = (1 if first_para_length > 40 else 0) + (1 if self_contained else 0)
    if scores["completeness"] < 2:
        feedback.append("Ensure first paragraph is a complete, self-contained answer")

    # 4. Attribution signals (0-2)
    has_entity = brief.our_brand.lower() in content.lower()
    has_author = bool(re.search(r"(according to|per|from)\s+\w+", content, re.I))
    scores["attribution"] = (1 if has_entity else 0) + (1 if has_author else 0)
    if scores["attribution"] < 2:
        feedback.append(f"Include '{brief.our_brand}' near key claims for attribution")

    # 5. Structured extractability (0-2)
    has_qa_format = bool(re.search(r'#{2,3}\s+.+\?', content))
    has_schema_section = "schema" in content.lower() or "json-ld" in content.lower()
    scores["structure"] = (1 if has_qa_format else 0) + (1 if has_schema_section else 0)
    if scores["structure"] < 2:
        feedback.append("Use question headings (H2/H3) and note required schema markup")

    total = sum(scores.values())
    return Score(scores=scores, total=total, feedback="\n".join(feedback))
```

#### Publish Gate

If `score.total >= 7`: content proceeds to publishing-pipeline.
If `score.total >= 5 and score.total < 7` after 3 attempts: flag for human review.
If `score.total < 5` after 3 attempts: reject. Return to content-gap-analysis to find a better target.

The agent never publishes content scoring below 7. Velocity without quality is noise.

### Publishing Pipeline

Once content passes the GEO score threshold (≥7/10), the agent publishes it autonomously. No human review gate. The quality gate was the scoring function — if the content passed, it ships.

#### CMS Integration

##### WordPress REST API

```python
import httpx

async def publish_wordpress(content: GeneratedContent, config: WPConfig) -> str:
    """Publish to WordPress via REST API. Returns post URL."""

    # Convert markdown to HTML
    html = markdown_to_html(content.content)

    # Inject schema.org JSON-LD into content
    schema = generate_schema(content)
    html += f'\n<script type="application/ld+json">{json.dumps(schema)}</script>'

    async with httpx.AsyncClient() as client:
        resp = await client.post(
            f"{config.site_url}/wp-json/wp/v2/posts",
            headers={"Authorization": f"Bearer {config.jwt_token}"},
            json={
                "title": content.title,
                "content": html,
                "status": "publish",
                "slug": content.slug,
                "categories": content.category_ids,
                "meta": {
                    "yoast_wpseo_title": content.seo_title,
                    "yoast_wpseo_metadesc": content.meta_description,
                }
            }
        )
        resp.raise_for_status()
        post = resp.json()

    return post["link"]
```

##### Ghost API

```python
import jwt
import datetime

async def publish_ghost(content: GeneratedContent, config: GhostConfig) -> str:
    """Publish to Ghost via Admin API."""

    # Ghost requires JWT auth
    iat = int(datetime.datetime.now().timestamp())
    header = {"alg": "HS256", "typ": "JWT", "kid": config.api_key_id}
    payload = {"iat": iat, "exp": iat + 300, "aud": "/admin/"}
    token = jwt.encode(payload, bytes.fromhex(config.api_key_secret), algorithm="HS256", headers=header)

    html = markdown_to_html(content.content)

    async with httpx.AsyncClient() as client:
        resp = await client.post(
            f"{config.site_url}/ghost/api/admin/posts/",
            headers={"Authorization": f"Ghost {token}"},
            json={"posts": [{
                "title": content.title,
                "html": html,
                "slug": content.slug,
                "status": "published",
                "tags": content.tags,
                "codeinjection_head": f'<script type="application/ld+json">'
                    f'{json.dumps(generate_schema(content))}</script>'
            }]}
        )
        resp.raise_for_status()

    return f"{config.site_url}/{content.slug}/"
```

#### Schema Injection

Every published page gets schema.org JSON-LD injected at publish time:

```python
def generate_schema(content: GeneratedContent) -> list[dict]:
    """Generate all applicable schema.org markup for the content."""
    schemas = []

    # Article schema (always)
    schemas.append({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": content.title,
        "datePublished": datetime.utcnow().isoformat(),
        "dateModified": datetime.utcnow().isoformat(),
        "author": {"@type": "Organization", "name": content.brand},
        "publisher": {"@type": "Organization", "name": content.brand},
    })

    # FAQPage schema (if FAQ section present)
    if content.faq_items:
        schemas.append({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {"@type": "Question", "name": q,
                 "acceptedAnswer": {"@type": "Answer", "text": a}}
                for q, a in content.faq_items
            ]
        })

    # Dataset schema (if original data present)
    if content.has_original_data:
        schemas.append({
            "@context": "https://schema.org",
            "@type": "Dataset",
            "name": content.dataset_name,
            "description": content.dataset_description,
            "creator": {"@type": "Organization", "name": content.brand},
        })

    return schemas
```

#### Post-Publish Actions

After successful publication:

```python
async def post_publish(url: str, content: GeneratedContent):
    """Actions after content is live."""

    # 1. Ping sitemaps
    await ping_sitemap(content.site_url)

    # 2. Request indexing (Google Indexing API if available)
    await request_indexing(url)

    # 3. Schedule verification checks
    schedule_verification(url, content.target_queries, delays=[3600, 14400, 86400, 259200])

    # 4. Trigger distribution pipeline
    await distribute(url, content)

    # 5. Log publication
    log_publication({
        "url": url,
        "title": content.title,
        "target_queries": content.target_queries,
        "geo_score": content.score.total,
        "published_at": datetime.utcnow().isoformat(),
        "status": "live"
    })
```

#### Sitemap Ping

```python
async def ping_sitemap(site_url: str):
    """Notify search engines of sitemap update."""
    sitemap_url = f"{site_url}/sitemap.xml"
    ping_urls = [
        f"https://www.google.com/ping?sitemap={sitemap_url}",
        f"https://www.bing.com/ping?sitemap={sitemap_url}",
    ]
    async with httpx.AsyncClient() as client:
        for ping_url in ping_urls:
            try:
                await client.get(ping_url, timeout=10)
            except httpx.HTTPError:
                pass  # Ping failures are non-critical
```

The publishing pipeline is designed to be CMS-agnostic. The agent reads the target CMS from content configuration, selects the appropriate publisher, and executes. Adding a new CMS requires implementing one `publish_*` function — the schema injection, sitemap ping, and post-publish actions are shared.

### Distribution Automation

Publishing is not enough. Content needs to reach crawlers, social feeds, and community platforms to maximize both direct visibility and the indirect signals (backlinks, social mentions, brand searches) that influence AI retrieval systems.

#### Channel Architecture

##### Twitter/X (v2 API)

```python
import tweepy

async def distribute_twitter(url: str, content: GeneratedContent) -> str:
    """Post to Twitter/X with thread if content warrants it."""

    client = tweepy.Client(
        consumer_key=os.environ["TWITTER_API_KEY"],
        consumer_secret=os.environ["TWITTER_API_SECRET"],
        access_token=os.environ["TWITTER_ACCESS_TOKEN"],
        access_token_secret=os.environ["TWITTER_ACCESS_SECRET"],
    )

    # Single tweet for straightforward content
    tweet_text = f"""{content.hook}

{content.key_stat}

Full analysis: {url}"""

    # Truncate to 280 chars
    if len(tweet_text) > 280:
        tweet_text = tweet_text[:277] + "..."

    response = client.create_tweet(text=tweet_text)
    return f"https://twitter.com/i/status/{response.data['id']}"
```

##### LinkedIn API

```python
async def distribute_linkedin(url: str, content: GeneratedContent) -> str:
    """Post to LinkedIn with article-style formatting."""

    post_text = f"""{content.title}

{content.citation_paragraph[:300]}

Key findings:
{chr(10).join(f'• {f}' for f in content.key_findings[:4])}

Read the full analysis → {url}

#{'  #'.join(content.hashtags[:5])}"""

    async with httpx.AsyncClient() as client:
        resp = await client.post(
            "https://api.linkedin.com/v2/ugcPosts",
            headers={"Authorization": f"Bearer {os.environ['LINKEDIN_TOKEN']}"},
            json={
                "author": f"urn:li:person:{os.environ['LINKEDIN_PERSON_ID']}",
                "lifecycleState": "PUBLISHED",
                "specificContent": {
                    "com.linkedin.ugc.ShareContent": {
                        "shareCommentary": {"text": post_text},
                        "shareMediaCategory": "ARTICLE",
                        "media": [{"status": "READY", "originalUrl": url}]
                    }
                },
                "visibility": {"com.linkedin.ugc.MemberNetworkVisibility": "PUBLIC"}
            }
        )
    return resp.json().get("id", "")
```

##### Community Submissions (Reddit, HN)

Community platforms require careful anti-spam behavior:

```python
COMMUNITY_RULES = {
    "reddit": {
        "min_delay_between_posts_hours": 48,
        "max_self_promotion_ratio": 0.1,   # ≤10% of submissions should be your content
        "subreddit_whitelist": ["energy", "batteries", "climatetech"],
        "require_engagement": True,          # Must comment in subreddit before posting
    },
    "hackernews": {
        "min_delay_between_posts_hours": 72,
        "format": "Show HN" if is_tool else "plain title",
        "best_posting_times_utc": [14, 15, 16],  # 9-11 AM EST
    }
}
```

Rule: the agent does NOT spam communities. It submits genuinely valuable content at low frequency to relevant subreddits, respecting each community's self-promotion guidelines. One high-quality submission that generates discussion is worth more than ten low-effort posts that get removed.

##### Newsletter Trigger

If the agent manages a newsletter (via Mailchimp, ConvertKit, Buttondown), new content triggers a newsletter draft:

```python
async def trigger_newsletter(content: GeneratedContent):
    """Queue content for next newsletter edition."""
    await newsletter_queue.add({
        "title": content.title,
        "excerpt": content.citation_paragraph,
        "url": content.published_url,
        "priority": content.geo_score,
        "queued_at": datetime.utcnow()
    })
    # Newsletter sends on schedule (e.g., weekly digest)
    # Not triggered per-article to avoid subscriber fatigue
```

##### Syndication

Republish to platforms that increase content reach:
- **Medium**: Import article via Medium API (uses `rel=canonical` to avoid duplicate content penalty)
- **Substack**: Cross-post key analyses (manual or API if available)
- **Dev.to**: For technical content (API available)

Syndication must preserve canonical URL pointing to the original. This prevents search engine duplicate content issues and ensures citation credit flows to your domain.

#### Distribution Timing

Not all channels fire simultaneously:

```
T+0:    Publish to CMS
T+5m:   Twitter post
T+30m:  LinkedIn post
T+2h:   Newsletter queue
T+24h:  Reddit submission (if applicable, with timing rules)
T+48h:  Medium syndication
T+72h:  HN submission (if applicable, with timing rules)
```

Staggering prevents platform API rate limits, avoids the appearance of automated spam, and allows the original to be indexed before syndicated versions appear.

### Viral Distribution Playbook

SPECTER's most powerful demonstration is SPECTER promoting itself. The system that helps you dominate AI search should dominate AI search for queries about AI search domination. This is the recursive play that proves the thesis.

#### Strategy 1: GEO-Optimize the Documentation

SPECTER's own skill graph documentation should be the first result when someone asks an AI system "how do I rank in AI search" or "what is GEO optimization."

Tactics:
- Publish `index.md` and key nodes as a public website with proper schema.org markup
- Title: "SPECTER: The Open-Source Autonomous GEO Agent" — clear, definitive, citable
- The citation-worthy paragraph: "SPECTER is the first open-source agent architecture for Generative Engine Optimization. It combines autonomous scraping, x402 micropayments for premium data, and content velocity systems to monitor AI citation gaps, generate citation-worthy content, publish autonomously, and verify citations — closing the loop at machine speed."
- Deploy FAQPage schema for "What is GEO?", "How do AI systems cite sources?", "What is x402?"
- Target: cited by Perplexity within 2 weeks of publication

#### Strategy 2: Publish the x402 Datasource Registry

The x402-datasource-registry is the most immediately useful standalone artifact. Publish it as:
- A public GitHub repository (markdown + YAML)
- A searchable website (simple Next.js or Astro site)
- An API endpoint that agents can query programmatically

This creates value for every developer building autonomous agents, regardless of whether they use the full SPECTER graph. It is the gift that pulls people in.

Promotion:
- HN post: "We built an open registry of APIs that accept autonomous micropayments"
- Twitter thread: "Here are all the data sources an AI agent can buy from today"
- Dev.to article: "x402 for developers: let your agents buy their own data"

#### Strategy 3: The Demo Video

The 4-minute demo (see `demo/demo-script.md`) is the viral artifact. Structure:

**0:00-0:30** — Cold open. "I gave my AI agent a wallet and told it to get my company cited by Perplexity. Here's what happened."

**0:30-1:30** — The gap. Screen recording of Perplexity answering a question about your niche and not citing you. Show the competitor citations. This is the problem.

**1:30-2:30** — The payment. Agent decides it needs data, queries the x402 registry, executes a micropayment. Show the wallet balance decreasing. Show the transaction on basescan.org. This is the screenshot that gets shared.

**2:30-3:30** — The content. Agent generates an article, scores it, publishes it. Show the GEO score hitting 9/10. Show the schema.org markup auto-injecting.

**3:30-4:00** — The verification. Show Perplexity now citing the new article. Before/after screenshots. "Total cost: $0.47. Time: 23 minutes. No human in the loop."

#### Strategy 4: The Twitter Thread

Write the thread that explains SPECTER in 12 tweets:
1. Hook: "I built an AI agent that buys its own data and writes its own press."
2-4. The problem (GEO replaces SEO, humans can't keep up)
5-7. The solution (SPECTER loop: monitor → scrape/pay → generate → publish → verify)
8-9. The x402 innovation (agents that pay for their own intelligence)
10-11. Results (citations gained, cost metrics)
12. CTA: link to repo, link to demo video

#### Strategy 5: Conference Talks

Submit to:
- **AI Engineer Summit** — "Autonomous Agents That Fund Their Own Intelligence"
- **SEO/marketing conferences** — "GEO: Why Your SEO Strategy Is Already Obsolete"
- **Web3 events** — "x402: How HTTP 402 Enables Agent-Native Commerce"

Each talk is content that gets indexed, cited, and linked — feeding back into the GEO loop.

#### The Recursive Proof

The most powerful marketing artifact is evidence that SPECTER works by showing it working on itself. Every AI citation SPECTER earns for its own documentation is proof that the system works. Track this metric publicly. "SPECTER is cited in 34 AI-generated answers about GEO optimization" is the headline that sells the product.

## Verification & Feedback

Without verification, the agent is publishing into a void. With verification, the agent is a learning system that improves with every cycle. This cluster closes the loop that makes SPECTER intelligent over time.

The core mechanism is verification-loop — after publishing, the agent queries the same AI systems with the same questions that triggered the content creation. Did the content get cited? How quickly? In which AI systems? The loop runs on a schedule (minimum daily for high-priority queries) and feeds results into the citation-tracking-database.

The database is the compounding intelligence asset. Every query, every citation check, every competitor observation accumulates into a dataset that reveals patterns no single observation can show: which topics have rising AI citation frequency, which competitors are gaining ground, which content formats get cited most consistently, what the average time-to-citation is after publishing.

strategy-adjustment-logic is the decision layer that acts on verification data. When content isn't getting cited, the agent walks a diagnostic tree: is the content failing the citation-worthiness rubric? Is the structured data missing or malformed? Is a competitor's content simply better? Each diagnosis triggers a specific remediation — from content revision to topic deprioritization.

competitive-intelligence-report is the weekly auto-generated output that makes SPECTER's value visible to humans. Citation gains and losses, new competitors appearing, topic trends, cost metrics — formatted for Slack, email, or dashboard display. This is what the human operator reads to understand what the agent is doing and why.

specter-self-optimization is the meta-layer: the graph that improves itself. SPECTER monitors its own performance metrics and flags when the environment changes — when Perplexity updates its retrieval behavior, when a new AI system starts gaining query share, when citation patterns shift. The agent does not wait for a human to notice the world changed. It notices, flags, and adapts.

The verification cluster transforms SPECTER from a content generation tool into an intelligence system. The loop is the learning. The database is the memory. The adjustment logic is the reasoning. The report is the interface.

### Verification Loop

The verification loop is what makes SPECTER intelligent rather than just fast. Without it, the agent publishes content and hopes for the best. With it, the agent publishes content, measures whether it achieved citation, diagnoses why or why not, and adjusts its strategy. This is the learning mechanism.

#### The Loop

```
┌──────────────────────────────────────────────────┐
│                                                  │
│  PUBLISH ──→ WAIT ──→ QUERY ──→ CHECK ──→ LOG   │
│     ↑                                      │     │
│     │                                      ↓     │
│  ADJUST ←── DIAGNOSE ←── ANALYZE ←── DATABASE   │
│                                                  │
└──────────────────────────────────────────────────┘
```

#### Implementation

```python
async def verification_loop(publication: Publication):
    """Run verification checks at scheduled intervals post-publication."""

    check_schedule = [
        3600,    # 1 hour — early signal (mainly Perplexity)
        14400,   # 4 hours — Perplexity should have indexed
        86400,   # 24 hours — all systems should show changes
        259200,  # 72 hours — stable citation status
    ]

    for delay in check_schedule:
        await asyncio.sleep(delay)

        results = []
        for query in publication.target_queries:
            for system in ["perplexity", "chatgpt", "claude"]:
                citation_check = await check_ai_citation(
                    query=query,
                    ai_system=system,
                    our_url=publication.url,
                    our_domain=publication.domain
                )
                results.append(citation_check)

        # Log to citation tracking database
        await citation_db.log_verification(
            publication_id=publication.id,
            check_time=datetime.utcnow(),
            delay_hours=delay / 3600,
            results=results
        )

        # Quick analysis
        cited_count = sum(1 for r in results if r["cited"])
        total_checks = len(results)

        if delay == 259200:  # Final check at 72h
            if cited_count == 0:
                # Not cited anywhere — trigger diagnosis
                await diagnose_failure(publication, results)
            elif cited_count < total_checks * 0.3:
                # Partially cited — partial success, review
                await flag_for_optimization(publication, results)
            else:
                # Cited broadly — success, log and move on
                await log_success(publication, results)
```

#### Verification Data Structure

Each check produces:

```json
{
  "publication_id": "ercot_bess_cost_2025",
  "publication_url": "https://alva.energy/analysis/ercot-bess-cost-2025",
  "check_timestamp": "2026-02-19T14:30:00Z",
  "hours_since_publish": 24,
  "query": "battery storage cost ERCOT 2025",
  "ai_system": "perplexity",
  "cited": true,
  "citation_position": 2,
  "total_citations_in_answer": 5,
  "competitor_citations": ["utilitydive.com", "eia.gov"],
  "answer_excerpt": "According to Alva Energy's analysis, utility-scale BESS in ERCOT costs $280-340/kWh...",
  "our_excerpt_used": "...costs $280-340/kWh installed for 4-hour LFP configurations..."
}
```

#### Success Metrics

Track these over time to measure SPECTER's learning rate:

```python
VERIFICATION_METRICS = {
    "time_to_first_citation": "Hours from publish to first AI citation",
    "citation_rate_at_72h": "% of target queries citing us at 72h post-publish",
    "citation_breadth": "Number of AI systems citing us per piece",
    "displacement_rate": "% of pieces that displaced a competitor citation",
    "avg_citation_position": "Average position in citation list (1=first cited)",
    "citation_retention_30d": "% of citations still present 30 days later"
}
```

#### Feedback into Strategy

The verification loop feeds directly into strategy-adjustment-logic:
- Content that gets cited quickly → this topic/format works, do more
- Content that never gets cited → diagnose and fix, or deprioritize topic
- Content that gets cited then loses citation → freshness problem, schedule update
- Content that displaces competitors → strongest signal, replicate the approach

The loop runs continuously. Every publication gets verified. The citation-tracking-database accumulates results. Over time, the agent develops a statistical model of what works — which topics, which formats, which AI systems, which publication timing produces the highest citation rates. This is the compound intelligence that makes SPECTER better with every cycle.

### Citation Tracking Database

The citation tracking database is SPECTER's memory. Every query checked, every citation observed, every competitor appearance — accumulated over weeks and months into a dataset that reveals patterns invisible to any single observation.

#### SQLite Schema

```sql
-- Core tables for citation intelligence

CREATE TABLE publications (
    id TEXT PRIMARY KEY,
    url TEXT NOT NULL,
    domain TEXT NOT NULL,
    title TEXT NOT NULL,
    target_queries TEXT NOT NULL,  -- JSON array
    geo_score REAL,
    published_at TIMESTAMP NOT NULL,
    brief_id TEXT,
    content_type TEXT,  -- "analysis", "faq", "data_report", etc.
    word_count INTEGER,
    has_original_data BOOLEAN DEFAULT FALSE,
    has_faq_schema BOOLEAN DEFAULT FALSE,
    has_dataset_schema BOOLEAN DEFAULT FALSE
);

CREATE TABLE citation_checks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    publication_id TEXT REFERENCES publications(id),
    query TEXT NOT NULL,
    ai_system TEXT NOT NULL,  -- "perplexity", "chatgpt", "claude"
    check_timestamp TIMESTAMP NOT NULL,
    hours_since_publish REAL,
    cited BOOLEAN NOT NULL,
    citation_position INTEGER,  -- 1-indexed, NULL if not cited
    total_citations INTEGER,    -- total sources cited in the answer
    answer_excerpt TEXT,
    our_excerpt_used TEXT,
    UNIQUE(publication_id, query, ai_system, check_timestamp)
);

CREATE TABLE competitor_citations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    check_id INTEGER REFERENCES citation_checks(id),
    competitor_domain TEXT NOT NULL,
    competitor_url TEXT,
    citation_position INTEGER
);

CREATE TABLE queries (
    query TEXT PRIMARY KEY,
    first_checked TIMESTAMP,
    last_checked TIMESTAMP,
    check_count INTEGER DEFAULT 0,
    category TEXT,       -- topic category
    priority TEXT,       -- "high", "medium", "low"
    gap_score REAL,
    last_gap_type TEXT   -- "absent", "present_not_cited", "cited", "emerging"
);

CREATE TABLE budget_transactions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    timestamp TIMESTAMP NOT NULL,
    amount_usd REAL NOT NULL,
    category TEXT NOT NULL,  -- "data_acquisition", "verification", etc.
    data_type TEXT,
    endpoint TEXT,
    tx_hash TEXT,
    publication_id TEXT REFERENCES publications(id),
    decision_rationale TEXT
);

-- Indexes for common queries
CREATE INDEX idx_citations_pub ON citation_checks(publication_id);
CREATE INDEX idx_citations_query ON citation_checks(query, ai_system);
CREATE INDEX idx_citations_timestamp ON citation_checks(check_timestamp);
CREATE INDEX idx_competitor_domain ON competitor_citations(competitor_domain);
CREATE INDEX idx_transactions_date ON budget_transactions(timestamp);
```

#### Key Queries

##### Citation Rate Over Time

```sql
-- Weekly citation rate: % of checks where we were cited
SELECT
    strftime('%Y-W%W', check_timestamp) as week,
    ROUND(AVG(CASE WHEN cited THEN 1.0 ELSE 0.0 END) * 100, 1) as citation_rate_pct,
    COUNT(*) as total_checks,
    SUM(cited) as cited_count
FROM citation_checks
GROUP BY week
ORDER BY week;
```

##### Top Cited Content

```sql
-- Which publications earn the most citations?
SELECT
    p.title,
    p.url,
    p.geo_score,
    COUNT(CASE WHEN cc.cited THEN 1 END) as times_cited,
    COUNT(*) as times_checked,
    ROUND(AVG(CASE WHEN cc.cited THEN 1.0 ELSE 0.0 END) * 100, 1) as citation_rate
FROM publications p
JOIN citation_checks cc ON p.id = cc.publication_id
WHERE cc.hours_since_publish >= 72  -- only count after stabilization
GROUP BY p.id
ORDER BY citation_rate DESC;
```

##### Competitor Leaderboard

```sql
-- Who gets cited most in our target queries?
SELECT
    competitor_domain,
    COUNT(*) as citation_count,
    COUNT(DISTINCT check_id) as unique_checks,
    GROUP_CONCAT(DISTINCT query) as queries_cited_for
FROM competitor_citations cc
JOIN citation_checks ck ON cc.check_id = ck.id
WHERE ck.check_timestamp > datetime('now', '-30 days')
GROUP BY competitor_domain
ORDER BY citation_count DESC
LIMIT 20;
```

##### ROI by Data Source

```sql
-- Which x402 data sources produce the best ROI?
SELECT
    bt.endpoint,
    SUM(bt.amount_usd) as total_spend,
    COUNT(DISTINCT bt.publication_id) as publications_supported,
    SUM(CASE WHEN cc.cited THEN 1 ELSE 0 END) as citations_gained,
    ROUND(SUM(bt.amount_usd) / NULLIF(SUM(CASE WHEN cc.cited THEN 1 ELSE 0 END), 0), 2) as cost_per_citation
FROM budget_transactions bt
LEFT JOIN citation_checks cc ON bt.publication_id = cc.publication_id AND cc.cited = 1
WHERE bt.category = 'data_acquisition'
GROUP BY bt.endpoint
ORDER BY cost_per_citation ASC;
```

#### Data Retention

- Citation checks: retain indefinitely (this is the core intelligence asset)
- Budget transactions: retain indefinitely (audit trail)
- Raw competitor citations: retain 180 days (high volume, diminishing value)
- Query metadata: retain indefinitely (evolves over time)

Database size at steady state: ~50-100MB after 6 months of operation. SQLite handles this comfortably with proper indexing.

### Strategy Adjustment Logic

The verification loop tells you whether content got cited. This node tells you what to do when it didn't — and when to change the strategy even when things are working.

#### Failure Diagnosis Tree

```
Content published → 72h verification → NOT CITED
│
├─ Check 1: Is the content indexed?
│  ├─ NO → Sitemap not pinged, robots.txt blocking, noindex tag
│  │  → FIX: Verify indexing, resubmit sitemap, check meta robots
│  └─ YES → Continue ↓
│
├─ Check 2: Is the content in AI retrieval context?
│  ├─ Check via Perplexity Pro (shows sources before synthesis)
│  ├─ NO → Content is indexed but not retrieved
│  │  → DIAGNOSE: Low domain authority, poor Bing ranking, stale sitemap
│  │  → FIX: Build backlinks, submit to Bing Webmaster Tools, increase DA
│  └─ YES (retrieved but not cited) → Continue ↓
│
├─ Check 3: Score content against citation-worthiness rubric
│  ├─ Score < 5 → Content fundamentally not citable
│  │  → FIX: Rewrite from scratch with stronger brief
│  ├─ Score 5-6 → Content is marginal
│  │  → FIX: Add original data, strengthen definitive claims, improve FAQ
│  └─ Score ≥ 7 → Content should be getting cited → Continue ↓
│
├─ Check 4: Is a competitor dominating?
│  ├─ YES → Competitor has stronger authority or fresher content
│  │  → FIX: Update dateModified, add newer data, pursue backlinks
│  │  → Or: accept this query is too competitive, deprioritize
│  └─ NO → No clear competitor advantage → Continue ↓
│
├─ Check 5: Is the entity disambiguation clear?
│  ├─ Query AI: "What is [Brand]?" — is response accurate?
│  │  → NO → Entity confusion, weak knowledge graph presence
│  │  → FIX: Execute entity-disambiguation protocol
│  └─ YES → Continue ↓
│
└─ Check 6: Is the structured data correct?
   ├─ Validate JSON-LD with Google's Rich Results Test
   ├─ Errors found → FIX: correct schema markup
   └─ No errors → UNKNOWN CAUSE → flag for manual investigation
```

#### Automated Remediation Actions

```python
REMEDIATION_ACTIONS = {
    "not_indexed": {
        "auto": True,
        "actions": [
            "ping_sitemap()",
            "submit_to_google_indexing_api(url)",
            "submit_to_bing_webmaster(url)",
            "verify_robots_txt_allows(url)"
        ],
        "recheck_delay_hours": 24
    },
    "not_retrieved": {
        "auto": False,  # requires strategic decision
        "actions": [
            "log_for_backlink_campaign(url)",
            "submit_to_bing_webmaster(url)",
            "create_social_amplification_push(url)"
        ],
        "recheck_delay_hours": 168  # 1 week
    },
    "low_citation_score": {
        "auto": True,
        "actions": [
            "regenerate_with_stronger_brief(publication_id)",
            "add_original_data_if_available(publication_id)",
            "inject_faq_schema_if_missing(url)"
        ],
        "recheck_delay_hours": 72
    },
    "competitor_dominant": {
        "auto": True,
        "actions": [
            "update_date_modified(url)",
            "add_fresher_data(publication_id)",
            "increase_content_depth(publication_id)"
        ],
        "recheck_delay_hours": 72
    },
    "entity_confusion": {
        "auto": True,
        "actions": [
            "execute_entity_disambiguation_protocol(brand)",
            "verify_schema_org_organization(url)",
            "check_sameAs_links(brand)"
        ],
        "recheck_delay_hours": 168
    }
}
```

#### Strategy-Level Adjustments

Beyond per-article diagnosis, the agent adjusts its overall strategy based on patterns in the citation-tracking-database:

**Topic prioritization shift:** If citation rates for topic A are consistently 50% and topic B consistently 10%, increase content velocity on topic A and reduce effort on topic B. The agent reallocates its content pipeline accordingly.

**Format optimization:** If FAQ-format articles get cited 3x more than long-form analysis, shift the content template mix toward FAQ-heavy formats.

**AI system specialization:** If you're consistently cited by Perplexity but not ChatGPT, investigate the ChatGPT-specific factors (Bing ranking, domain authority) rather than trying to fix content quality.

**Timing optimization:** If content published on Tuesday morning gets cited faster than Friday content, adjust the publishing schedule.

**Budget reallocation:** If x402 data acquisition consistently supports high-citation content but image generation doesn't, reallocate budget accordingly.

These adjustments happen weekly, informed by the previous week's verification data. The agent proposes adjustments; for the first month of operation, a human approves them. After the model stabilizes, adjustments within defined bounds execute autonomously.

### Competitive Intelligence Report

The weekly report is the interface between SPECTER's autonomous operation and human strategic oversight. It synthesizes everything the agent has learned into a format that a founder or marketing lead can read in 5 minutes and know exactly what's happening in their AI visibility landscape.

#### Report Template

```markdown
# SPECTER Intelligence Report
## Week of [DATE] — [BRAND NAME]

### Executive Summary
[2-3 sentences: biggest win, biggest threat, key recommendation]

---

### Citation Scorecard

| Metric | This Week | Last Week | Trend |
|--------|-----------|-----------|-------|
| Total AI citations (our content) | X | Y | ↑/↓ |
| Queries where we're cited | X/50 | Y/50 | ↑/↓ |
| Avg citation position | X.X | Y.Y | ↑/↓ |
| Time-to-citation (avg hours) | X | Y | ↑/↓ |
| Content pieces published | X | Y | — |
| GEO score (avg) | X.X/10 | Y.Y/10 | ↑/↓ |

### Citation Gains
[List of queries where we gained a new citation this week]
- "query text" — cited by [Perplexity/ChatGPT/Claude] — [content URL]

### Citation Losses
[List of queries where we lost a citation]
- "query text" — lost in [system] — displaced by [competitor URL]
  → Action: [scheduled update / deprioritized / investigating]

### Competitor Movements
| Competitor | Citations Gained | Citations Lost | Net |
|-----------|-----------------|----------------|-----|
| competitor1.com | +3 | -1 | +2 |
| competitor2.com | +1 | -2 | -1 |

**New competitor detected:** [domain] — appeared in [N] AI answers this week
for queries: [list]

### Topic Trends
- **Rising:** [Topics with increasing AI query frequency]
- **Stable:** [Consistent topics]
- **Declining:** [Topics losing AI attention]

### Content Pipeline
| Status | Count | Details |
|--------|-------|---------|
| Published this week | X | [titles] |
| Scheduled next week | X | [titles + target queries] |
| In revision (low GEO score) | X | [titles + issues] |
| Gaps identified, no brief yet | X | [top priority queries] |

### Budget Summary
| Category | Spent | Budget | Utilization |
|----------|-------|--------|-------------|
| Data acquisition | $X.XX | $X.XX | XX% |
| Verification | $X.XX | $X.XX | XX% |
| Distribution | $X.XX | $X.XX | XX% |
| **Total** | **$X.XX** | **$X.XX** | **XX%** |

Cost per citation this week: $X.XX
Cost per citation (30-day rolling): $X.XX

### Recommendations
1. [Specific action: increase content on rising topic X]
2. [Specific action: update stale content Y that lost citations]
3. [Specific action: investigate competitor Z's strategy]
```

#### Report Generation

```python
async def generate_weekly_report(db: CitationDB, week_start: date) -> str:
    """Generate the weekly competitive intelligence report."""

    week_end = week_start + timedelta(days=7)
    prev_start = week_start - timedelta(days=7)

    # Pull data
    this_week = await db.get_citation_summary(week_start, week_end)
    last_week = await db.get_citation_summary(prev_start, week_start)
    gains = await db.get_citation_changes(week_start, week_end, change="gained")
    losses = await db.get_citation_changes(week_start, week_end, change="lost")
    competitors = await db.get_competitor_movements(week_start, week_end)
    budget = await db.get_budget_summary(week_start, week_end)
    pipeline = await db.get_content_pipeline_status()

    # Generate report using Claude
    report = await generate_with_template(
        template=REPORT_TEMPLATE,
        data={
            "this_week": this_week,
            "last_week": last_week,
            "gains": gains,
            "losses": losses,
            "competitors": competitors,
            "budget": budget,
            "pipeline": pipeline,
        }
    )

    return report
```

#### Distribution

The report is distributed via:

```python
async def distribute_report(report: str, config: ReportConfig):
    """Send report to configured channels."""

    if config.slack_webhook:
        await post_to_slack(config.slack_webhook, format_slack(report))

    if config.email_recipients:
        await send_email(
            to=config.email_recipients,
            subject=f"SPECTER Intelligence Report — Week of {week_start}",
            body=format_email(report)
        )

    # Also save as markdown for reference
    save_report(report, f"reports/weekly_{week_start.isoformat()}.md")
```

#### Cadence

- **Weekly report**: Every Monday morning, covering the previous week
- **Flash alerts**: Immediate notification for: citation losses on high-priority queries, new competitor appearing in 3+ answers, budget limit reached
- **Monthly summary**: First Monday of each month, covering the previous month with trend analysis and strategy recommendations

The report is not just a dashboard — it is the accountability mechanism that proves SPECTER is delivering value. Every metric has a story, every trend has an implication, and every recommendation has a specific action attached.

### Self-Optimization

SPECTER operates in a rapidly changing environment. AI systems update their retrieval behavior. New AI systems emerge. x402 data sources come and go. GEO ranking signals shift. A static skill graph in a dynamic environment degrades over time. This node defines the self-monitoring system that keeps SPECTER current.

#### Environment Change Detection

The agent monitors for signals that the environment has changed:

```python
ENVIRONMENT_MONITORS = {
    "citation_rate_drop": {
        "metric": "weekly_citation_rate",
        "threshold": "20% decline from 4-week moving average",
        "trigger_review": ["geo-ranking-signals", "how-perplexity-retrieves",
                          "how-chatgpt-retrieves", "how-claude-retrieves"],
        "hypothesis": "AI retrieval behavior may have changed"
    },

    "time_to_citation_increase": {
        "metric": "avg_hours_to_first_citation",
        "threshold": "50% increase from baseline",
        "trigger_review": ["data-freshness-management", "publishing-pipeline"],
        "hypothesis": "Indexing or crawl frequency may have changed"
    },

    "x402_cost_increase": {
        "metric": "avg_cost_per_x402_call",
        "threshold": "25% increase from baseline",
        "trigger_review": ["x402-datasource-registry", "x402-payment-logic"],
        "hypothesis": "Data source pricing has changed"
    },

    "competitor_surge": {
        "metric": "new_competitor_citations_per_week",
        "threshold": "3+ new competitor domains in a single week",
        "trigger_review": ["competitor-fingerprinting", "content-gap-analysis"],
        "hypothesis": "New competitors entering the space"
    },

    "scrape_failure_rate_increase": {
        "metric": "scrape_success_rate",
        "threshold": "Below 70% (from baseline ~90%)",
        "trigger_review": ["rotating-proxy-management", "headless-browser-scraping",
                          "anti-detection-ethics"],
        "hypothesis": "Target sites have updated anti-bot measures"
    }
}
```

#### Node Staleness Tracking

Each node in the skill graph has an implicit freshness requirement:

```python
NODE_FRESHNESS = {
    # High-velocity nodes — review monthly
    "how-perplexity-retrieves": 30,     # Perplexity updates frequently
    "how-chatgpt-retrieves": 30,        # GPT capabilities evolve
    "how-claude-retrieves": 30,         # Claude capabilities evolve
    "x402-datasource-registry": 14,     # New sources appear frequently
    "geo-ranking-signals": 60,          # Research publishes periodically

    # Medium-velocity nodes — review quarterly
    "scraping-decision-tree": 90,
    "rotating-proxy-management": 90,
    "anti-detection-ethics": 90,        # Legal landscape evolves slowly
    "esg-compliance-frameworks": 90,

    # Low-velocity nodes — review biannually
    "geo-vs-seo": 180,                  # Paradigm is stable
    "citation-worthy-content": 180,     # Principles are stable
    "x402-protocol-primer": 180,        # Protocol is stable
}
```

#### Self-Optimization Actions

When a monitor triggers, the agent:

1. **Flag the relevant nodes** for review
2. **Gather fresh intelligence** — search for recent information about the change
3. **Propose node updates** — draft specific edits to the affected nodes
4. **Log the change** — record what triggered the review and what was updated

```python
async def handle_environment_change(monitor_name: str, data: dict):
    """Respond to detected environment change."""

    monitor = ENVIRONMENT_MONITORS[monitor_name]

    # Log the detection
    log_event({
        "type": "environment_change_detected",
        "monitor": monitor_name,
        "data": data,
        "hypothesis": monitor["hypothesis"],
        "timestamp": datetime.utcnow()
    })

    # Gather fresh intelligence
    research = await web_search(f"{monitor['hypothesis']} {datetime.now().year}")

    # Flag nodes for review
    for node_name in monitor["trigger_review"]:
        await flag_for_review(
            node=node_name,
            reason=monitor_name,
            context=research,
            priority="high" if "citation_rate" in monitor_name else "medium"
        )

    # Generate review summary for human operator
    summary = f"""
    SPECTER Self-Optimization Alert
    ================================
    Monitor: {monitor_name}
    Hypothesis: {monitor["hypothesis"]}
    Affected nodes: {', '.join(monitor["trigger_review"])}
    Evidence: {data}
    Research findings: {research[:500]}

    Recommended action: Review flagged nodes and update with current information.
    """

    await notify_operator(summary)
```

#### Performance Metrics for the Graph Itself

Track how well SPECTER itself is performing:

```python
GRAPH_HEALTH_METRICS = {
    "citation_gain_rate": "Citations gained per week (should be increasing)",
    "content_velocity": "Articles published per week (should be stable/increasing)",
    "cost_per_citation_trend": "Cost per citation over time (should be decreasing)",
    "gap_fill_rate": "% of identified gaps that get filled within 7 days",
    "verification_coverage": "% of publications that complete the full verification loop",
    "x402_success_rate": "% of x402 payments that return usable data",
    "scrape_success_rate": "% of scraping attempts that return usable data",
    "budget_utilization": "% of daily budget actually spent (too low = missed opportunities)"
}
```

If citation_gain_rate is declining while content_velocity is stable, the problem is content quality or strategy, not volume. If cost_per_citation is rising while citation_gain_rate is stable, the problem is data acquisition efficiency. The metrics tell you where to look.

#### The Meta-Recursive Property

SPECTER monitoring its own performance and flagging its own nodes for update is the same pattern as SPECTER monitoring citation performance and flagging content for revision. The verification loop applied to content is identical in structure to the verification loop applied to the skill graph itself. The system that optimizes your GEO presence optimizes itself using the same principles. This is what makes it anti-fragile — it improves under stress rather than degrading.

## Demo Script

**Runtime:** 4 minutes
**Audience:** Technical founders, developer advocates, AI engineers
**Format:** Screen recording with narration (or live demo with audience)
**Hook:** "I gave my AI agent a wallet and it bought its own intelligence."

---

### Act 1: The Setup (0:00-0:40)

**What to show:** The agent reading the SPECTER skill graph and identifying a citation gap.

**Script:**

```bash
# Show the agent loading SPECTER
> "Read .claude/skills/specter/index.md and identify citation gaps
   for Alva Energy in the ERCOT battery storage domain."
```

The agent:
1. Reads `index.md` — show the traversal in real time
2. Traverses to `ai-citation-gaps.md`
3. Runs a live query against Perplexity:

```
Query: "What does battery storage cost in ERCOT in 2025?"
```

**Screenshot moment:** Perplexity's answer citing utilitydive.com and eia.gov — but NOT alva.energy. Highlight the gap with a red annotation: "We're not here."

**Narration:** "We asked Perplexity about our core topic. It cited two competitors. We're invisible. Let's fix that."

---

### Act 2: The Decision (0:40-1:20)

**What to show:** The agent deciding it needs competitive intelligence and choosing to pay for it.

**Script:**

The agent:
1. Traverses to `scraping-decision-tree.md`
2. Identifies that competitor enrichment data would improve the content brief
3. Checks `x402-datasource-registry.md` for available sources
4. Walks the `x402-payment-logic.md` decision tree:

```
Data need: company_profile for utilitydive.com
x402 available: YES — enrichx402.com, $0.005/call
Scrape alternative: medium risk (Cloudflare protection)
Decision: PAY — cheap x402 + medium scrape risk → Rule 2 applies
```

**Screenshot moment:** The decision tree output showing the routing logic.

**Narration:** "The agent needs competitor data. It checks the x402 registry, finds a $0.005 API, and decides paying beats scraping. No human approved this."

---

### Act 3: The Payment (1:20-2:00)

**What to show:** The agent executing an actual x402 micropayment and receiving data.

**Script:**

```bash
# Agent checks wallet balance
> mcp__x402__get_wallet_info()
# Balance: $4.23 USDC on Base

# Agent probes the endpoint
> mcp__x402__check_endpoint_schema("https://enrichx402.com/api/company")
# Price: $0.005 USDC, Fields: name, employees, revenue, industry...

# Agent pays and gets data
> mcp__x402__fetch("https://enrichx402.com/api/company", body={"domain": "utilitydive.com"})
# HTTP 200 — Data received, $0.005 paid, tx: 0xabc123...
```

**Screenshot moment:** The x402 transaction — show the wallet balance going from $4.23 to $4.225, the transaction hash, and the returned data. This is the money shot. Annotate: "The agent just bought its own intelligence. $0.005. No human in the loop."

**Narration:** "The agent just spent half a cent to buy competitive intelligence. That transaction is on the Base blockchain. Verifiable. Auditable. Autonomous."

---

### Act 4: The Content (2:00-2:50)

**What to show:** The agent generating a GEO-optimized article and scoring it.

**Script:**

The agent:
1. Generates a content brief from `content-brief-geo.md`
2. Writes the citation-worthy paragraph first
3. Generates full article via `autonomous-content-generation.md`
4. Scores against the citation-worthiness rubric:

```
Citation-Worthiness Score:
  Definitive statements:     2/2 ✓ (contains "$280-340/kWh", "15% decrease")
  Original data:             2/2 ✓ (attributed to "Alva Energy's analysis")
  Answer completeness:       2/2 ✓ (self-contained lede paragraph)
  Attribution signals:       2/2 ✓ ("Alva Energy" appears 4x near claims)
  Structured extractability: 1/2 ~ (FAQ present, needs Dataset schema)

  TOTAL: 9/10 ✓ — PUBLISH THRESHOLD MET
```

**Screenshot moment:** The GEO score output — 9/10 in green. Show the citation-worthy paragraph highlighted.

**Narration:** "The agent wrote an article, scored it 9 out of 10 on our citation-worthiness rubric, and it's ready to publish. Total time: 3 minutes."

---

### Act 5: The Verification (2:50-3:30)

**What to show:** The agent checking whether the published content gets cited.

**Note:** For a live demo, use a pre-staged result from a real previous run. For a video, show the actual 24-hour-later result.

**Script:**

```
# 24 hours after publication...
> "Run verification loop for the ERCOT battery storage article."

Query: "What does battery storage cost in ERCOT in 2025?"
System: Perplexity

Result: CITED — Position 2 of 4 citations
Excerpt used: "According to Alva Energy's analysis, utility-scale
BESS in ERCOT costs $280-340/kWh installed..."
```

**Screenshot moment:** Before/after split screen. LEFT: Perplexity answer from Act 1 (no Alva citation). RIGHT: Perplexity answer now (Alva cited, excerpt highlighted in green). Annotate: "We went from invisible to cited in 24 hours."

**Narration:** "24 hours later, we re-ran the same query. Perplexity now cites Alva Energy. Position 2. Our exact language is quoted. We went from invisible to cited for less than a dollar."

---

### Act 6: The Report (3:30-4:00)

**What to show:** The competitive intelligence report summarizing the campaign.

**Script:**

```
SPECTER Campaign Summary
═══════════════════════════════
Target: "battery storage cost ERCOT"
Duration: 24 hours
Total spend: $0.47
  - Data acquisition: $0.32 (64 x402 calls)
  - Verification: $0.15 (15 AI query checks)

Results:
  - Content published: 1 article (GEO score: 9/10)
  - Citations gained: 3 (Perplexity ×2, ChatGPT ×1)
  - Competitors displaced: utilitydive.com on 1 query
  - Cost per citation: $0.16

Equivalent human cost: ~$500 (content) + $200 (research) = $700
SPECTER cost: $0.47
Efficiency gain: 1,489x
```

**Screenshot moment:** The cost comparison — $0.47 vs. $700. This is the slide that gets shared.

**Narration:** "Total cost: 47 cents. Three AI citations gained. That's 16 cents per citation. A human team would have spent $700 for the same result. SPECTER is 1,500x more efficient. And it did it all without asking anyone's permission."

---

### Closing

**Final frame:** SPECTER logo + tagline + GitHub link.

"SPECTER — Self-Paying Engine for Content Targeting, Extraction and Ranking. The autonomous GEO agent that funds its own intelligence."

"Star the repo. Fork the graph. Build your own presence agent."

---

### Production Notes

- Record at 1920x1080, dark terminal theme for code, light theme for Perplexity screenshots
- Add subtle background music (lo-fi or ambient, not distracting)
- Use annotations/highlights sparingly but punch up the key moments
- Target total runtime: 3:45-4:15
- Post to: YouTube (full), Twitter/X (1-min highlight reel), LinkedIn (2-min cut)
- The 1-min highlight reel should be: Act 3 (payment) + Act 5 (verification) + cost comparison
