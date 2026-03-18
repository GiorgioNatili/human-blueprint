# CLAUDE.md — The Human Blueprint: Task Specification for Claude Code

> **This is a personal website by Giorgio Natili.** No company branding, no BaaSFlow, no Kalydos references anywhere. Do not add copyright notices or "Made with Manus" badges.

---

## Repository & Stack

- **Repo**: `GiorgioNatili/human-blueprint` (GitHub Pages, deployed at `https://giorginatili.github.io/human-blueprint/`)
- **Stack**: React 19 + TypeScript + Vite + Tailwind CSS 4 + GSAP (ScrollTrigger) + Three.js
- **Asset paths**: Always prefix with `import.meta.env.BASE_URL` (GitHub Pages base path)

Read this file completely before writing any code.

---

## Current Architecture

`client/src/pages/Home.tsx` renders these components in sequence:

```
Hero (inline in Home.tsx)
Act0      — Prologue: Evolution of Tools (GSAP pinned, 4-step reveal)
Act1      — The Problem Space (split-screen Fear vs Reality)
CognitiveImpact
Act2      — The Human Blueprint / Iceberg (full-screen parallax)
Act3      — 4-Pillar Framework (scroll-driven reveal)
DeepPillars
Act4      — System Loyalty (stacked layers animation)
ParadoxExplorer
Scenarios
Act5      — The Intuition Gap
ResearchDeepDive
NeuralQA  — AI Q&A module (end of page)
Footer
```

Canvas (Three.js): `IcebergModel`, `NeuralMesh`, `ParticleWorld`, `Scene`

Design system: Dark (`bg-black`), cyan primary (`text-cyan-400`), purple accent, DM Sans + Outfit fonts.

---

## Pending Task from todo.md

One item remains incomplete:

```
- [ ] Act II Depth Markers: Sync magnification with scroll and add white-to-color transition.
```

### Implementation

In `client/src/components/acts/Act2.tsx`:

1. **Sync magnification with scroll**: Tie the iceberg container's scale to the ScrollTrigger scrub progress. As the user scrolls through Act II's pinned section, the iceberg should progressively zoom in on its submerged portion. Use:
   ```js
   tl.to(".iceberg-container", { scale: 1.35, ease: "none" }, 0)
   ```

2. **White-to-color transition on depth markers**: Each depth marker label starts as `color: white` (muted) and transitions to its accent color as the scroll reaches its depth level. Stagger these within the existing timeline:
   ```js
   tl.to(".depth-marker-1", { color: "#67e8f9" }, 0.2)  // cyan — surface
   tl.to(".depth-marker-2", { color: "#818cf8" }, 0.4)  // indigo — mid
   tl.to(".depth-marker-3", { color: "#a78bfa" }, 0.6)  // purple — deep
   tl.to(".depth-marker-4", { color: "#c084fc" }, 0.8)  // violet — deepest
   ```

3. Ensure no layout overflow. Use `overflow: hidden` on the iceberg wrapper if needed.

---

## Content Additions (Implement in Priority Order)

### Priority 1 — Digital Dignity Definition Block

**Where**: Add as the first content block inside `Act1.tsx`, before the Fear vs Reality split screen.

**What**: A full-width definition card with staggered GSAP reveal on scroll.

```
DIGITAL DIGNITY
/ˈdɪdʒɪtl ˈdɪɡnɪti/ noun

The preservation of human agency, autonomy, purpose, and self-worth
in systems designed with artificial intelligence.

Five Dimensions:
1. Autonomy    — the right to make meaningful choices that AI cannot override
2. Privacy     — control over personal data and how it is used
3. Representation — fair and accurate portrayal in AI-generated outputs
4. Equity      — equal access to AI benefits regardless of background
5. Accountability — the right to understand and challenge AI decisions
```

Style: Dark card (`bg-slate-900`), cyan border (`border-cyan-500/30`), "DIGITAL DIGNITY" in large Outfit font, dimensions as a staggered list that reveals on scroll.

---

### Priority 2 — Ethics & Guardrails Section

**Where**: New component `client/src/components/acts/EthicsGuardrails.tsx`, inserted in `Home.tsx` between `Act3` and `DeepPillars`.

**Title**: "The Ethics of Loyalty: Who Does the Agent Serve?"

**Content to implement**:

- Opening: *"AI agents should be designed to serve the user's interests above all else. But what if those interests are harmful?"*
- The Layered Loyalty Model (four-layer visual stack, similar to Act4's layer animation):
  - Layer 1 — User Interests: what the user explicitly requests
  - Layer 2 — User Wellbeing: what serves the user's long-term interests  
  - Layer 3 — Third-Party Protection: what prevents harm to others
  - Layer 4 — Societal Guardrails: what law and ethics require
- The Fairness Problem: *"Loyalty has been corrupted. In practice, 'fairness' in AI systems has been applied inconsistently — with poor justifications and biased outcomes that span from good to evil too easily. True loyalty by design requires auditable, contestable, and transparent decision logic."*
- Three Guardrail Types (three-column layout):
  - **Hard Stops** (amber) — actions the agent will never take regardless of instruction
  - **Soft Friction** (cyan) — actions requiring explicit confirmation
  - **Transparency Obligations** (purple) — actions the agent must disclose even when not asked

---

### Priority 3 — Adversarial Collaboration Visual

**Where**: Inside `Act2.tsx`, after the existing adversarial collaboration text.

**What**: An animated three-node cycle:

```
[HUMAN PROPOSES] → [AI CHALLENGES] → [HUMAN DECIDES]
        ↑_________________________________↑
```

Each node fades in on scroll. The connecting arrows draw themselves using SVG `stroke-dashoffset` animation tied to ScrollTrigger.

Citation to display: *"Kahneman & Klein (2009). Conditions for Intuitive Expertise: A Failure to Disagree. American Psychologist, 64(6), 515–526."*

---

### Priority 4 — Emotional Intelligence Use Cases

**Where**: New component `client/src/components/acts/UseCases.tsx`, inserted after `DeepPillars` in `Home.tsx`.

**Title**: "Where Judgment Stays Human"

**Five cards** (horizontal scroll or stacked reveal):

| Domain | Human Role | AI Role | Key Insight |
|--------|------------|---------|-------------|
| Healthcare | Physician delivers diagnosis with empathy | Analyzes scans, surfaces prognosis | 85% of patients want a human to deliver serious diagnoses |
| Conflict Resolution | Mediator reads body language, manages escalation | Identifies recurring conflict patterns | Emotional de-escalation requires presence |
| Customer Service | Agent manages grief or trauma with compassion | Retrieves history, drafts responses | Trust is rebuilt through human acknowledgment |
| Leadership | Manager delivers feedback with care and mentorship | Tracks metrics, benchmarks performance | Motivation requires a relationship, not a report |
| Education | Teacher identifies emotional barriers, provides encouragement | Personalizes content, tracks progress | Learning breakthroughs happen through human belief |

---

### Priority 5 — Thought-Provoking Act Openers

Add a provocative opening question to each Act's intro `<Section>`. Style as large, centered, muted text that becomes full-opacity on scroll (GSAP `fromTo opacity: 0.3 → 1`).

- **Act 0**: *"Every tool in history has been accused of destroying humanity. Every tool has also extended it. What makes this one different?"*
- **Act 1**: *"What if the real threat isn't that AI takes your job — but that it takes your reason for working?"*
- **Act 2**: *"What if the most important skill in the age of AI is knowing what to ask it to challenge?"*
- **Act 3**: *"What if the four pillars of human intelligence are the only things standing between a useful tool and an extractive one?"*
- **Act 4**: *"What if loyalty is not a feature you add at the end — but the architecture you start with?"*
- **Act 5**: *"What if the Intuition Gap is not a limitation to overcome — but a frontier to defend?"*

---

## Absolute Constraints

- **Do NOT** change the dark color scheme (`bg-black`, cyan primary, purple accent)
- **Do NOT** add any company branding (BaaSFlow, Kalydos, or any other)
- **Do NOT** remove the "By Giorgio Natili" attribution in the hero
- **Do NOT** break existing GSAP ScrollTrigger animations — always add inside `gsap.context()` with cleanup
- **Do NOT** add copyright notices or "Made with Manus" badges
- **Do NOT** use placeholder images — use existing images from `client/public/images/` or SVG/CSS
- **Do NOT** change the GitHub Pages base path in `vite.config.ts`
- **Do NOT** add new Three.js canvas elements without profiling performance impact

---

## Technical Rules

- All new GSAP animations: use `gsap.context()` with `return () => ctx.revert()` in `useEffect`
- All new components: register in `Home.tsx` in the correct sequence
- Use `Section` from `@/components/ui/Section` as outer wrapper for new sections
- All asset paths: prefix with `import.meta.env.BASE_URL`
- New components go in `client/src/components/acts/`

---

## Quality Checklist

Before committing:

- [ ] Act II depth markers sync with scroll and transition from white to accent color
- [ ] Digital Dignity definition block appears in Act I with staggered reveal
- [ ] Ethics & Guardrails section renders correctly between Act III and DeepPillars
- [ ] Adversarial collaboration visual animates in Act II
- [ ] Use cases render as cards with correct data in all five domains
- [ ] Thought-provoking openers appear in each Act
- [ ] No layout overflow or z-index conflicts
- [ ] All new GSAP contexts properly cleaned up
- [ ] Responsive at 375px, 768px, 1280px
- [ ] No console errors
- [ ] `pnpm build` completes without TypeScript errors
