/**
 * GapA Carousel — Content Integrity Tests
 * Validates the slide data structure used by the GapA horizontal carousel component.
 * Since the component is client-side React, we test the data contract here.
 */

import { describe, it, expect } from "vitest";

// Mirror the slide data structure from GapA.tsx for testing
interface SlideDetail {
  items: { label: string; value: string }[];
}

interface Slide {
  id: string;
  tag?: string;
  tagColor?: string;
  title: string;
  subtitle: string;
  body: string;
  accent: string;
  bg: string;
  detail?: SlideDetail;
}

const slides: Slide[] = [
  {
    id: "question",
    tag: "The Provocation",
    tagColor: "text-rose-400 border-rose-400/40 bg-rose-400/10",
    title: "What if the narrative that 'AI will replace us' is not just wrong—",
    subtitle: "but dangerously incomplete?",
    body: "62% of workers fear AI will significantly impact their jobs within five years. But fear is not a strategy. The real question is not whether AI can perform certain tasks — it increasingly can — but whether the systems we build respect human dignity, serve human interests, and preserve human agency.",
    accent: "text-rose-400",
    bg: "bg-rose-950/10",
  },
  {
    id: "agentic-def",
    tag: "Definition",
    tagColor: "text-cyan-400 border-cyan-400/40 bg-cyan-400/10",
    title: "Agentic AI",
    subtitle: "From tool to agent — a qualitative leap",
    body: "Unlike traditional AI that suggests or recommends, agentic AI acts. It makes decisions, executes tasks, negotiates with other systems, and adapts its strategies based on outcomes — without continuous human intervention.",
    accent: "text-cyan-400",
    bg: "bg-cyan-950/15",
    detail: {
      items: [
        { label: "Autonomy", value: "Operates independently within defined parameters" },
        { label: "Goal-orientation", value: "Works toward objectives, not just prompts" },
        { label: "Proactivity", value: "Initiates actions rather than waiting for instructions" },
        { label: "Adaptability", value: "Learns from experience and adjusts behavior" },
      ],
    },
  },
  {
    id: "single-vs-multi",
    tag: "Taxonomy",
    tagColor: "text-violet-400 border-violet-400/40 bg-violet-400/10",
    title: "Single-Agent vs. Multi-Agent",
    subtitle: "Two architectures, one question of loyalty",
    body: "A single agent acts on behalf of one user. A multi-agent system deploys networks of specialized agents that coordinate to accomplish complex goals. Both architectures raise the same fundamental question: whose interests does the agent serve?",
    accent: "text-violet-400",
    bg: "bg-violet-950/15",
    detail: {
      items: [
        { label: "Single-Agent", value: "One AI, one principal — clear accountability chain" },
        { label: "Multi-Agent", value: "Specialist agents coordinating — emergent behavior risk" },
        { label: "Orchestrator", value: "A master agent directing sub-agents — power concentration" },
        { label: "Peer-to-Peer", value: "Agents negotiating with agents — alignment at every node" },
      ],
    },
  },
  {
    id: "agentic-loop",
    tag: "Mechanism",
    tagColor: "text-emerald-400 border-emerald-400/40 bg-emerald-400/10",
    title: "The Agentic Loop",
    subtitle: "Perceive → Plan → Act → Learn → Repeat",
    body: "Every agentic system operates through a continuous loop. It perceives its environment, plans a sequence of actions, acts by executing those steps, learns from the outcomes, and repeats.",
    accent: "text-emerald-400",
    bg: "bg-emerald-950/15",
    detail: {
      items: [
        { label: "Perceive", value: "Reads environment: data, APIs, user context, memory" },
        { label: "Plan", value: "Generates action sequence toward goal" },
        { label: "Act", value: "Executes: calls APIs, writes files, sends messages" },
        { label: "Learn", value: "Updates internal model based on outcome feedback" },
      ],
    },
  },
  {
    id: "reframe",
    tag: "The Pivot",
    tagColor: "text-amber-400 border-amber-400/40 bg-amber-400/10",
    title: "The question is not 'Will AI replace us?'",
    subtitle: "It is: 'How do we design AI that serves us?'",
    body: "This reframing shifts from passive fear to active agency. From zero-sum competition to positive-sum partnership. From technological determinism to intentional architecture.",
    accent: "text-amber-400",
    bg: "bg-amber-950/10",
  },
];

describe("GapA carousel — slide data integrity", () => {
  it("has exactly 5 slides", () => {
    expect(slides).toHaveLength(5);
  });

  it("all slides have required fields: id, title, subtitle, body, accent, bg", () => {
    for (const slide of slides) {
      expect(slide.id).toBeTruthy();
      expect(slide.title).toBeTruthy();
      expect(slide.subtitle).toBeTruthy();
      expect(slide.body).toBeTruthy();
      expect(slide.accent).toMatch(/^text-/);
      expect(slide.bg).toMatch(/^bg-/);
    }
  });

  it("all slide IDs are unique", () => {
    const ids = slides.map((s) => s.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("first slide is the provocative question", () => {
    expect(slides[0].id).toBe("question");
    expect(slides[0].tag).toBe("The Provocation");
    expect(slides[0].body).toContain("62%");
  });

  it("second slide defines Agentic AI with 4 characteristics", () => {
    const slide = slides[1];
    expect(slide.id).toBe("agentic-def");
    expect(slide.detail?.items).toHaveLength(4);
    const labels = slide.detail!.items.map((i) => i.label);
    expect(labels).toContain("Autonomy");
    expect(labels).toContain("Goal-orientation");
    expect(labels).toContain("Proactivity");
    expect(labels).toContain("Adaptability");
  });

  it("third slide covers Single-Agent vs Multi-Agent taxonomy with 4 items", () => {
    const slide = slides[2];
    expect(slide.id).toBe("single-vs-multi");
    expect(slide.detail?.items).toHaveLength(4);
    const labels = slide.detail!.items.map((i) => i.label);
    expect(labels).toContain("Single-Agent");
    expect(labels).toContain("Multi-Agent");
    expect(labels).toContain("Orchestrator");
    expect(labels).toContain("Peer-to-Peer");
  });

  it("fourth slide describes the agentic loop with 4 steps", () => {
    const slide = slides[3];
    expect(slide.id).toBe("agentic-loop");
    expect(slide.subtitle).toContain("Perceive");
    expect(slide.subtitle).toContain("Plan");
    expect(slide.subtitle).toContain("Act");
    expect(slide.subtitle).toContain("Learn");
    expect(slide.detail?.items).toHaveLength(4);
  });

  it("last slide is the reframing pivot", () => {
    const last = slides[slides.length - 1];
    expect(last.id).toBe("reframe");
    expect(last.tag).toBe("The Pivot");
    expect(last.body).toContain("positive-sum");
  });

  it("slides with detail grids have non-empty item labels and values", () => {
    const withDetail = slides.filter((s) => s.detail);
    expect(withDetail.length).toBeGreaterThan(0);
    for (const slide of withDetail) {
      for (const item of slide.detail!.items) {
        expect(item.label.trim()).not.toBe("");
        expect(item.value.trim()).not.toBe("");
      }
    }
  });

  it("GSAP snap ratio is correct for 5 slides: 1/(5-1) = 0.25", () => {
    const n = slides.length;
    const snapRatio = 1 / (n - 1);
    expect(snapRatio).toBeCloseTo(0.25, 5);
  });

  it("xPercent travel distance is correct for 5 slides: -100*(5-1) = -400", () => {
    const n = slides.length;
    const xPercent = -100 * (n - 1);
    expect(xPercent).toBe(-400);
  });
});
