/**
 * GapC — Fairness Corruption & Loyal Agent Contrast
 * Tests data integrity for the corruption examples and contrast table rows.
 */

import { describe, it, expect } from "vitest";

// ── Mirror the data arrays from GapC.tsx ──────────────────────────────────────

const corruptionExamples = [
  {
    term: "Loyalty Programs",
    claim: "\"We reward your loyalty\"",
    reality: "Surveillance infrastructure that tracks behaviour, creates psychological dependency, and extracts maximum value from customers.",
    icon: "💳",
  },
  {
    term: "Platform Loyalty",
    claim: "\"We serve our users\"",
    reality: "Engagement metrics optimised for advertiser revenue. Users are the product, not the customer.",
    icon: "📱",
  },
  {
    term: "Algorithmic Fairness",
    claim: "\"Our system is mathematically fair\"",
    reality: "Statistical parity weaponised to justify discriminatory outcomes while hiding behind neutral-sounding definitions.",
    icon: "⚖️",
  },
  {
    term: "Surveillance Capitalism",
    claim: "\"Free service, mutual benefit\"",
    reality: "Behavioural data harvested to predict and manipulate future actions. Zuboff (2019): the user is the raw material, not the beneficiary.",
    icon: "🔍",
  },
];

const contrastRows = [
  { dimension: "Primary obligation", loyal: "User's best interests — always", general: "Platform revenue and engagement metrics" },
  { dimension: "Data handling", loyal: "Used only to benefit the user; never sold", general: "Monetised through advertising and third-party sharing" },
  { dimension: "Conflict of interest", loyal: "Disclosed and resolved in user's favour", general: "Hidden behind opaque recommendation algorithms" },
  { dimension: "Decision transparency", loyal: "Reasoning visible and challengeable", general: "Black-box outputs with no audit trail" },
  { dimension: "Business model", loyal: "User pays for service (user = customer)", general: "Service is free (user = product)" },
  { dimension: "Legal analogy", loyal: "Fiduciary — lawyer, doctor, financial advisor", general: "Vendor — optimising for own profit" },
];

// ── Tests ─────────────────────────────────────────────────────────────────────

describe("GapC — Corruption examples data integrity", () => {
  it("has exactly 4 corruption examples", () => {
    expect(corruptionExamples).toHaveLength(4);
  });

  it("all examples have required fields: term, claim, reality, icon", () => {
    for (const ex of corruptionExamples) {
      expect(ex.term).toBeTruthy();
      expect(ex.claim).toBeTruthy();
      expect(ex.reality).toBeTruthy();
      expect(ex.icon).toBeTruthy();
    }
  });

  it("all term names are unique", () => {
    const terms = corruptionExamples.map((e) => e.term);
    expect(new Set(terms).size).toBe(terms.length);
  });

  it("includes Loyalty Programs as the first example", () => {
    expect(corruptionExamples[0].term).toBe("Loyalty Programs");
  });

  it("includes Surveillance Capitalism as the last example", () => {
    expect(corruptionExamples[corruptionExamples.length - 1].term).toBe("Surveillance Capitalism");
  });

  it("all claims are framed as corporate statements (start with quote)", () => {
    for (const ex of corruptionExamples) {
      expect(ex.claim.startsWith('"')).toBe(true);
    }
  });

  it("all reality descriptions are non-trivially long (>40 chars)", () => {
    for (const ex of corruptionExamples) {
      expect(ex.reality.length).toBeGreaterThan(40);
    }
  });

  it("Surveillance Capitalism example references Zuboff", () => {
    const sc = corruptionExamples.find((e) => e.term === "Surveillance Capitalism");
    expect(sc?.reality).toContain("Zuboff");
  });
});

describe("GapC — Loyal Agent vs General-Purpose AI contrast table", () => {
  it("has exactly 6 contrast rows", () => {
    expect(contrastRows).toHaveLength(6);
  });

  it("all rows have required fields: dimension, loyal, general", () => {
    for (const row of contrastRows) {
      expect(row.dimension).toBeTruthy();
      expect(row.loyal).toBeTruthy();
      expect(row.general).toBeTruthy();
    }
  });

  it("all dimension names are unique", () => {
    const dims = contrastRows.map((r) => r.dimension);
    expect(new Set(dims).size).toBe(dims.length);
  });

  it("first row covers primary obligation", () => {
    expect(contrastRows[0].dimension.toLowerCase()).toContain("obligation");
  });

  it("loyal column always describes user-centric behaviour", () => {
    const userKeywords = ["user", "principal", "fiduciary", "transparent", "visible", "benefit", "disclosed", "pays", "lawyer", "doctor"];
    for (const row of contrastRows) {
      const loyalLower = row.loyal.toLowerCase();
      const hasKeyword = userKeywords.some((kw) => loyalLower.includes(kw));
      expect(hasKeyword).toBe(true);
    }
  });

  it("general column always describes platform-centric or extractive behaviour", () => {
    const platformKeywords = ["platform", "revenue", "monetis", "opaque", "product", "vendor", "profit", "advertis", "black-box"];
    for (const row of contrastRows) {
      const generalLower = row.general.toLowerCase();
      const hasKeyword = platformKeywords.some((kw) => generalLower.includes(kw));
      expect(hasKeyword).toBe(true);
    }
  });

  it("business model row distinguishes user-as-customer from user-as-product", () => {
    const bmRow = contrastRows.find((r) => r.dimension === "Business model");
    expect(bmRow?.loyal).toContain("customer");
    expect(bmRow?.general).toContain("product");
  });

  it("legal analogy row references fiduciary professions", () => {
    const laRow = contrastRows.find((r) => r.dimension === "Legal analogy");
    expect(laRow?.loyal.toLowerCase()).toContain("fiduciary");
  });
});
