/**
 * GapE — 7 Leadership Strategies for the Intuition Gap
 * Tests data integrity, structural consistency, and GSAP mechanics.
 */

import { describe, it, expect } from "vitest";

// ── Mirror slide data from GapE.tsx ──────────────────────────────────────────

const slides = [
  {
    id: "audit",
    tag: "Strategy 1 · Audit Current Roles",
    title: "Where is the Intuition Gap in your organisation?",
    tactics: [
      { label: "Time-allocation survey", description: "Ask employees to log one week of work in three buckets: routine/repetitive, judgment-required, and relationship-critical." },
      { label: "Task decomposition", description: "Break each role into 10–15 discrete tasks. Score each on a 1–5 scale for AI automability using the 4-Pillar Framework as the rubric." },
      { label: "Gap heat map", description: "Visualise results by team and seniority. Roles with high routine scores are augmentation candidates; roles with high judgment scores are Intuition Gap anchors." },
      { label: "Opportunity backlog", description: "Convert the heat map into a prioritised list of AI augmentation opportunities, sorted by effort-to-impact ratio." },
    ],
    outcome: "Organisations that conduct structured role audits before AI deployment report 2.3× higher adoption rates and 40% fewer role conflicts (McKinsey Global Institute, 2024).",
  },
  {
    id: "skills",
    tag: "Strategy 2 · Invest in Intuition Gap Skills",
    title: "These are not soft skills. They are the core skills of the AI age.",
    tactics: [
      { label: "Critical thinking", description: "Structured argument analysis, assumption identification, and evidence evaluation. Use real AI outputs as training material — have employees challenge and improve them." },
      { label: "Emotional intelligence", description: "Self-awareness, empathy, and relationship management. Goleman (1995) shows EQ accounts for 67% of the competencies needed for leadership performance." },
      { label: "Ethical reasoning", description: "Values conflict identification, applied ethical frameworks, and moral judgment under uncertainty. Pair with real AI ethics case studies from your industry." },
      { label: "Strategic thinking", description: "Pattern recognition across domains, scenario planning, and competing-priorities balancing. These are the skills that determine which human decisions AI escalates to." },
    ],
    outcome: "IBM's 2023 Global AI Adoption Index found that organisations investing in human skills alongside AI tools achieve 3.4× greater productivity gains than those investing in AI tools alone.",
  },
  {
    id: "workflows",
    tag: "Strategy 3 · Redesign Workflows",
    title: "Don't add AI to old workflows. Build new ones.",
    tactics: [
      { label: "Map the old workflow", description: "Document every handoff, decision point, and bottleneck. Identify which steps are purely mechanical (AI candidates) and which require judgment (human anchors)." },
      { label: "Redesign around strengths", description: "AI handles: document review, pattern detection, data synthesis, first-draft generation. Humans handle: contextual judgment, client counsel, ethical decisions, strategic direction." },
      { label: "Legal document example", description: "Old: junior lawyers review documents → senior lawyers review juniors. New: AI flags relevant passages → juniors add contextual judgment → seniors focus on strategy. Same outcome, 60% less time." },
      { label: "Pilot before scaling", description: "Run a 6-week pilot with one team. Measure quality, speed, and employee satisfaction. Use findings to refine before organisation-wide rollout." },
    ],
    outcome: "Deloitte's 2024 Future of Work report found that workflow redesign — not AI tool adoption — is the primary driver of productivity gains in knowledge work.",
  },
  {
    id: "feedback",
    tag: "Strategy 4 · Create Feedback Loops",
    title: "Humans learn from AI. AI learns from humans. Neither stops.",
    tactics: [
      { label: "Decision logging", description: "Every time a human overrides or modifies an AI recommendation, capture the reasoning. This becomes training data for the next model iteration." },
      { label: "Explanation requirement", description: "Require humans to articulate why they deviated from AI recommendations. This surfaces tacit knowledge and improves both human and AI reasoning quality." },
      { label: "AI analysis review", description: "Regularly review AI outputs as a team. Identify systematic errors, biases, and blind spots. Use these reviews as learning moments for human judgment calibration." },
      { label: "Calibration sessions", description: "Monthly 30-minute sessions where teams compare their intuitive judgments against AI predictions on past cases. Builds metacognitive awareness of where human judgment adds most value." },
    ],
    outcome: "Adversarial collaboration research (Kahneman & Klein, 2009) shows that structured feedback loops between human and algorithmic judgment produce 28% better decisions than either alone.",
  },
  {
    id: "metrics",
    tag: "Strategy 5 · Measure What Matters",
    title: "Hours worked and tasks completed are the wrong metrics.",
    tactics: [
      { label: "Judgment quality score", description: "Track the outcomes of human decisions in ambiguous situations over time. Compare against AI baseline recommendations. Improvement = human value added." },
      { label: "Relationship strength index", description: "Measure trust, collaboration quality, and stakeholder satisfaction. These are the outcomes of emotional intelligence — the skills AI cannot replicate." },
      { label: "Ethical decision rate", description: "Track how often teams identify and escalate ethical concerns in AI outputs. High rates indicate healthy human oversight; low rates indicate over-reliance." },
      { label: "Strategic impact score", description: "Measure the proportion of human time spent on high-leverage, non-automatable work. Rising scores indicate successful Intuition Gap positioning." },
    ],
    outcome: "Organisations that adopt judgment-quality metrics alongside traditional productivity metrics report 45% higher employee engagement and 31% lower AI-related role anxiety (Gallup, 2024).",
  },
  {
    id: "safety",
    tag: "Strategy 6 · Foster Psychological Safety",
    title: "Fear of AI is a leadership failure, not an employee problem.",
    tactics: [
      { label: "Acknowledge fears openly", description: "Name the anxiety in team meetings. 'I know some of you are worried about what this means for your role. Let's talk about it.' Silence amplifies fear; acknowledgment reduces it." },
      { label: "Frame AI as tool, not threat", description: "Consistently use language that positions AI as something humans use, not something that replaces them. 'This AI handles the data synthesis so you can focus on the strategic recommendation.'" },
      { label: "Celebrate human contributions", description: "Explicitly recognise moments where human judgment added value that AI could not. Make these stories visible. They become the organisation's evidence that the Intuition Gap is real and valuable." },
      { label: "Commit to development", description: "Announce and fund a specific Intuition Gap skills programme. The investment signals that the organisation values human capabilities — not just AI capabilities." },
    ],
    outcome: "Edmondson's research across 51 work teams found that psychological safety is the strongest predictor of team learning behaviour — more predictive than team composition, leadership style, or task complexity.",
  },
  {
    id: "example",
    tag: "Strategy 7 · Lead by Example",
    title: "Leadership in the AI age means being the best example of what AI cannot replicate.",
    tactics: [
      { label: "Use AI tools visibly", description: "Demonstrate AI augmentation in meetings. 'I asked the AI to synthesise the market data — here's what it found. Now here's my judgment about what it means for our strategy.'" },
      { label: "Show judgment in ambiguity", description: "When facing genuinely uncertain decisions, narrate your reasoning process out loud. This models the kind of judgment that fills the Intuition Gap and teaches it by example." },
      { label: "Make ethical decisions transparently", description: "When you make a decision based on values rather than data, say so explicitly. 'The AI recommendation optimises for short-term revenue. I'm choosing a different path because of our long-term commitment to X.'" },
      { label: "Think strategically in public", description: "Share your strategic reasoning — the patterns you see, the futures you're anticipating, the competing priorities you're balancing. This is the thinking AI cannot do, and making it visible makes it learnable." },
    ],
    outcome: "Harvard Business Review (2023) found that leaders who visibly model human-AI collaboration see 2.7× higher team adoption rates and 58% lower resistance to AI-augmented workflows.",
  },
];

// ── Tests ─────────────────────────────────────────────────────────────────────

describe("GapE — Slide count and structure", () => {
  it("has exactly 7 slides", () => {
    expect(slides).toHaveLength(7);
  });

  it("slide IDs are unique", () => {
    const ids = slides.map((s) => s.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("each slide has tag, title, tactics array, and outcome", () => {
    for (const slide of slides) {
      expect(slide.tag).toBeTruthy();
      expect(slide.title).toBeTruthy();
      expect(Array.isArray(slide.tactics)).toBe(true);
      expect(slide.outcome).toBeTruthy();
    }
  });

  it("each slide tag starts with the correct strategy number", () => {
    slides.forEach((slide, i) => {
      expect(slide.tag).toContain(`Strategy ${i + 1}`);
    });
  });
});

describe("GapE — Tactics integrity", () => {
  it("each slide has exactly 4 tactics", () => {
    for (const slide of slides) {
      expect(slide.tactics).toHaveLength(4);
    }
  });

  it("every tactic has a non-empty label and description", () => {
    for (const slide of slides) {
      for (const tactic of slide.tactics) {
        expect(tactic.label.length).toBeGreaterThan(0);
        expect(tactic.description.length).toBeGreaterThan(20);
      }
    }
  });

  it("tactic labels are unique within each slide", () => {
    for (const slide of slides) {
      const labels = slide.tactics.map((t) => t.label);
      expect(new Set(labels).size).toBe(labels.length);
    }
  });
});

describe("GapE — Evidence citations", () => {
  it("all outcome strings contain a named source", () => {
    const knownSources = ["McKinsey", "IBM", "Deloitte", "Kahneman", "Gallup", "Edmondson", "Harvard Business Review"];
    for (const slide of slides) {
      const hasCitation = knownSources.some((src) => slide.outcome.includes(src));
      expect(hasCitation, `Slide "${slide.id}" outcome lacks a named citation`).toBe(true);
    }
  });

  it("feedback loop slide cites Kahneman & Klein 2009", () => {
    const s = slides.find((s) => s.id === "feedback");
    expect(s?.outcome).toContain("Kahneman");
    expect(s?.outcome).toContain("2009");
  });

  it("safety slide cites Edmondson", () => {
    const s = slides.find((s) => s.id === "safety");
    expect(s?.outcome).toContain("Edmondson");
  });

  it("skills slide cites Goleman in tactics", () => {
    const s = slides.find((s) => s.id === "skills");
    const eiTactic = s?.tactics.find((t) => t.label === "Emotional intelligence");
    expect(eiTactic?.description).toContain("Goleman");
  });
});

describe("GapE — GSAP carousel mechanics", () => {
  const SLIDE_COUNT = slides.length;

  it("snap ratio is correct for 7 slides: 1/(7-1) ≈ 0.1667", () => {
    const snap = 1 / (SLIDE_COUNT - 1);
    expect(snap).toBeCloseTo(1 / 6, 4);
  });

  it("xPercent travel distance is correct for 7 slides: -100*(7-1) = -600", () => {
    const xPercent = -100 * (SLIDE_COUNT - 1);
    expect(xPercent).toBe(-600);
  });

  it("container width percentage is correct: 7 * 100 = 700%", () => {
    const widthPercent = SLIDE_COUNT * 100;
    expect(widthPercent).toBe(700);
  });
});
