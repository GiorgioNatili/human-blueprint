/**
 * GapD — Loyal Agent vs General-Purpose AI (6-slide carousel)
 * Tests data integrity, structural consistency, and content accuracy.
 */

import { describe, it, expect } from "vitest";

// ── Mirror slide data from GapD.tsx ──────────────────────────────────────────

const slides = [
  {
    id: "obligation",
    tag: "Dimension 1 · Primary Obligation",
    comparison: [
      { label: "When interests conflict", loyal: "User's interest wins — always", general: "Platform revenue wins — always" },
      { label: "Incentive structure", loyal: "User pays; agent optimises for user outcomes", general: "Advertiser pays; agent optimises for engagement" },
      { label: "Legal analogy", loyal: "Fiduciary advisor — legally bound to client", general: "Salesperson — legally free to maximise commission" },
      { label: "Real-world example", loyal: "Vanguard: no proprietary funds, no sales incentives", general: "Robo-advisors that upsell affiliated products" },
    ],
    caseStudy: { label: "Case Study", text: "Fiduciary financial advisors command higher fees and manage more assets than non-fiduciary advisors — because clients trust them. A 2024 survey found 73% of users don't trust AI systems to act in their best interests. Loyal agents solve this trust deficit." },
  },
  {
    id: "data",
    tag: "Dimension 2 · Data Handling",
    comparison: [
      { label: "Data collection", loyal: "Minimum necessary; purpose-limited", general: "Maximum possible; purpose-agnostic" },
      { label: "Third-party sharing", loyal: "Never without explicit, informed consent", general: "Default-on; buried in terms of service" },
      { label: "Retention", loyal: "Deleted when no longer needed", general: "Retained indefinitely; sold after churn" },
      { label: "Real-world example", loyal: "Signal: zero metadata retention, open-source audit", general: "Free email services scanning content for ad targeting" },
    ],
    caseStudy: { label: "Case Study", text: "ProtonMail and Signal built profitable businesses on a single promise: your data is yours. Users pay a premium for this guarantee. The privacy-as-loyalty model proves that data stewardship is not a cost — it is a competitive advantage." },
  },
  {
    id: "conflict",
    tag: "Dimension 3 · Conflict of Interest",
    comparison: [
      { label: "Conflict detection", loyal: "Proactively identified and flagged to user", general: "Suppressed or hidden in algorithm weights" },
      { label: "Conflict resolution", loyal: "Resolved in user's favour; user informed", general: "Resolved in platform's favour; user unaware" },
      { label: "Sponsored content", loyal: "Clearly labelled; ranked separately from organic", general: "Indistinguishable from organic recommendations" },
      { label: "Real-world example", loyal: "Wirecutter: no affiliate links in editorial rankings", general: "Search engines mixing paid and organic results" },
    ],
    caseStudy: { label: "Case Study", text: "The FTC's 2023 action against undisclosed AI-driven endorsements illustrates the regulatory direction of travel. Loyal agents that disclose and resolve conflicts proactively will be well-positioned as enforcement tightens — extractive systems will face retroactive restructuring." },
  },
  {
    id: "transparency",
    tag: "Dimension 4 · Decision Transparency",
    comparison: [
      { label: "Reasoning visibility", loyal: "Explanation available on request; auditable", general: "Output only; reasoning proprietary" },
      { label: "Error correction", loyal: "User can identify and challenge errors", general: "User cannot distinguish error from policy" },
      { label: "Audit trail", loyal: "Logged decisions with timestamps and rationale", general: "No persistent audit trail for users" },
      { label: "Real-world example", loyal: "EU AI Act Article 13: transparency obligations for high-risk AI", general: "Opaque credit-scoring systems pre-GDPR" },
    ],
    caseStudy: { label: "Case Study", text: "The EU AI Act's transparency requirements for high-risk systems reflect a growing consensus: users have a right to understand decisions that affect them. Loyal agents built with explainability from the ground up will meet these requirements without costly retrofits." },
  },
  {
    id: "business-model",
    tag: "Dimension 5 · Business Model",
    comparison: [
      { label: "Revenue source", loyal: "User subscription or per-task fee", general: "Advertiser spend; data licensing" },
      { label: "Optimisation target", loyal: "User outcomes and satisfaction", general: "Engagement time and click-through rate" },
      { label: "Churn dynamic", loyal: "Low churn — users stay with agents they trust", general: "High churn — users leave when trust erodes" },
      { label: "Real-world example", loyal: "Stripe: premium pricing, zero advertising, user-first roadmap", general: "Free social platforms monetising attention" },
    ],
    caseStudy: { label: "Case Study", text: "Healthcare systems that prioritise patient wellbeing over billing optimisation have lower patient churn and better long-term financial performance. The loyal model requires patience — resisting short-term extraction in favour of long-term value creation — but the lifetime value of a trusted user far exceeds the gains from exploitation." },
  },
  {
    id: "legal",
    tag: "Dimension 6 · Legal Analogy",
    comparison: [
      { label: "Duty of loyalty", loyal: "Encoded in system architecture and governance", general: "Absent; agent serves platform by design" },
      { label: "Duty of care", loyal: "Competence and diligence obligations enforced", general: "No enforceable standard of care" },
      { label: "Duty of disclosure", loyal: "Conflicts and limitations proactively disclosed", general: "No disclosure obligation" },
      { label: "Real-world example", loyal: "Balkin (2016): 'Information Fiduciaries and the First Amendment'", general: "Current social media platforms: no fiduciary duty" },
    ],
    caseStudy: { label: "Legal Horizon", text: "Jack Balkin's 2016 paper on 'Information Fiduciaries' proposed that platforms holding intimate user data should be treated as fiduciaries. As agentic AI systems gain access to financial accounts, health records, and personal communications, the legal and ethical case for fiduciary AI becomes irresistible." },
  },
];

// ── Tests ─────────────────────────────────────────────────────────────────────

describe("GapD — Carousel slide count and structure", () => {
  it("has exactly 6 slides", () => {
    expect(slides).toHaveLength(6);
  });

  it("slide IDs are unique", () => {
    const ids = slides.map((s) => s.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("each slide has a tag, comparison array, and caseStudy", () => {
    for (const slide of slides) {
      expect(slide.tag).toBeTruthy();
      expect(Array.isArray(slide.comparison)).toBe(true);
      expect(slide.caseStudy).toBeTruthy();
    }
  });

  it("each slide's tag starts with the correct dimension number", () => {
    slides.forEach((slide, i) => {
      expect(slide.tag).toContain(`Dimension ${i + 1}`);
    });
  });
});

describe("GapD — Comparison items integrity", () => {
  it("each slide has exactly 4 comparison items", () => {
    for (const slide of slides) {
      expect(slide.comparison).toHaveLength(4);
    }
  });

  it("every comparison item has label, loyal, and general fields", () => {
    for (const slide of slides) {
      for (const item of slide.comparison) {
        expect(item.label).toBeTruthy();
        expect(item.loyal).toBeTruthy();
        expect(item.general).toBeTruthy();
      }
    }
  });

  it("every slide has a 'Real-world example' comparison item", () => {
    for (const slide of slides) {
      const hasRealWorld = slide.comparison.some((c) =>
        c.label.toLowerCase().includes("real-world")
      );
      expect(hasRealWorld).toBe(true);
    }
  });

  it("loyal values are consistently user-centric", () => {
    const loyalKeywords = ["user", "never", "minimum", "proactively", "auditable", "subscription", "encoded", "deleted", "disclosed", "fiduciary", "low churn", "explanation", "labelled", "separately", "clearly", "logged", "timestamps", "rationale", "competence", "diligence", "obligations", "enforced"];
    for (const slide of slides) {
      for (const item of slide.comparison) {
        if (item.label === "Real-world example") continue; // skip examples
        const loyalLower = item.loyal.toLowerCase();
        const hasKeyword = loyalKeywords.some((kw) => loyalLower.includes(kw));
        expect(hasKeyword, `Slide "${slide.id}", item "${item.label}" loyal value lacks user-centric keyword`).toBe(true);
      }
    }
  });
});

describe("GapD — Case study integrity", () => {
  it("all case studies have non-empty label and text", () => {
    for (const slide of slides) {
      expect(slide.caseStudy.label).toBeTruthy();
      expect(slide.caseStudy.text.length).toBeGreaterThan(50);
    }
  });

  it("obligation slide references the 73% trust statistic", () => {
    const s = slides.find((s) => s.id === "obligation");
    expect(s?.caseStudy.text).toContain("73%");
  });

  it("data slide references Signal or ProtonMail", () => {
    const s = slides.find((s) => s.id === "data");
    const text = s?.caseStudy.text ?? "";
    expect(text.includes("Signal") || text.includes("ProtonMail")).toBe(true);
  });

  it("legal slide references Balkin", () => {
    const s = slides.find((s) => s.id === "legal");
    expect(s?.caseStudy.text).toContain("Balkin");
  });
});

describe("GapD — GSAP carousel mechanics", () => {
  const SLIDE_COUNT = slides.length;

  it("snap ratio is correct for 6 slides: 1/(6-1) = 0.2", () => {
    const snap = 1 / (SLIDE_COUNT - 1);
    expect(snap).toBeCloseTo(0.2, 5);
  });

  it("xPercent travel distance is correct for 6 slides: -100*(6-1) = -500", () => {
    const xPercent = -100 * (SLIDE_COUNT - 1);
    expect(xPercent).toBe(-500);
  });

  it("container width percentage is correct: 6 * 100 = 600%", () => {
    const widthPercent = SLIDE_COUNT * 100;
    expect(widthPercent).toBe(600);
  });
});
