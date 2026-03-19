import { describe, it, expect } from "vitest";
import { QUESTIONS } from "../client/src/components/acts/ProvocativeQuestions";

describe("ProvocativeQuestions — data integrity", () => {
  it("exports exactly 3 questions", () => {
    expect(QUESTIONS.length).toBe(3);
  });

  it("all questions have unique IDs", () => {
    const ids = QUESTIONS.map((q) => q.id);
    expect(new Set(ids).size).toBe(3);
  });

  it("all questions have non-empty text", () => {
    for (const q of QUESTIONS) {
      expect(typeof q.text).toBe("string");
      expect(q.text.length).toBeGreaterThan(20);
    }
  });

  it("all questions end with a question mark", () => {
    for (const q of QUESTIONS) {
      expect(q.text.trim()).toMatch(/\?$/);
    }
  });

  it("all questions have a non-empty sub text", () => {
    for (const q of QUESTIONS) {
      expect(typeof q.sub).toBe("string");
      expect(q.sub.length).toBeGreaterThan(5);
    }
  });

  it("all questions have a number string", () => {
    for (const q of QUESTIONS) {
      expect(q.number).toMatch(/^\d{2}$/);
    }
  });

  it("numbers are sequential 01, 02, 03", () => {
    expect(QUESTIONS[0].number).toBe("01");
    expect(QUESTIONS[1].number).toBe("02");
    expect(QUESTIONS[2].number).toBe("03");
  });

  it("all questions have a color class", () => {
    for (const q of QUESTIONS) {
      expect(q.color).toMatch(/^text-/);
    }
  });

  it("each question references a core framework concept", () => {
    const allText = QUESTIONS.map((q) => q.text + " " + q.sub).join(" ").toLowerCase();
    expect(allText).toContain("replace");
    expect(allText).toContain("human");
    expect(allText).toContain("intuition");
  });

  it("questions follow the fear → reframe → invitation arc", () => {
    // Q1 challenges the replacement narrative (fear)
    expect(QUESTIONS[0].text.toLowerCase()).toContain("replace");
    // Q2 reframes loss as opportunity (reframe)
    expect(QUESTIONS[1].text.toLowerCase()).toContain("rebirth");
    // Q3 invites the reader to consider their unique value (invitation)
    expect(QUESTIONS[2].text.toLowerCase()).toContain("intuition");
  });
});
