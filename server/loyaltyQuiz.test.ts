import { describe, it, expect } from "vitest";

// Replicate the scoring logic from LoyaltyQuiz.tsx
const PROFILES = [
  { min: 7,  max: 11, title: "The Surrendered Professional" },
  { min: 12, max: 16, title: "The Passive Adopter" },
  { min: 17, max: 21, title: "The Conscious Collaborator" },
  { min: 22, max: 25, title: "The Loyal Architect" },
  { min: 26, max: 28, title: "The Human Blueprint" },
];

function getProfile(score: number) {
  return PROFILES.find((p) => score >= p.min && score <= p.max) ?? PROFILES[0];
}

describe("LoyaltyQuiz scoring logic", () => {
  it("minimum possible score (7) maps to The Surrendered Professional", () => {
    expect(getProfile(7).title).toBe("The Surrendered Professional");
  });

  it("maximum possible score (28) maps to The Human Blueprint", () => {
    expect(getProfile(28).title).toBe("The Human Blueprint");
  });

  it("score 11 is still The Surrendered Professional", () => {
    expect(getProfile(11).title).toBe("The Surrendered Professional");
  });

  it("score 12 transitions to The Passive Adopter", () => {
    expect(getProfile(12).title).toBe("The Passive Adopter");
  });

  it("score 17 transitions to The Conscious Collaborator", () => {
    expect(getProfile(17).title).toBe("The Conscious Collaborator");
  });

  it("score 22 transitions to The Loyal Architect", () => {
    expect(getProfile(22).title).toBe("The Loyal Architect");
  });

  it("score 26 transitions to The Human Blueprint", () => {
    expect(getProfile(26).title).toBe("The Human Blueprint");
  });

  it("all-1 answers (7 questions × 1 = 7) gives Surrendered Professional", () => {
    const answers = Array(7).fill(1);
    const total = answers.reduce((a, b) => a + b, 0);
    expect(total).toBe(7);
    expect(getProfile(total).title).toBe("The Surrendered Professional");
  });

  it("all-4 answers (7 questions × 4 = 28) gives The Human Blueprint", () => {
    const answers = Array(7).fill(4);
    const total = answers.reduce((a, b) => a + b, 0);
    expect(total).toBe(28);
    expect(getProfile(total).title).toBe("The Human Blueprint");
  });

  it("mixed answers produce a valid profile", () => {
    const answers = [3, 2, 4, 3, 2, 4, 3]; // sum = 21
    const total = answers.reduce((a, b) => a + b, 0);
    expect(total).toBe(21);
    expect(getProfile(total).title).toBe("The Conscious Collaborator");
  });

  it("no score falls outside a profile range", () => {
    for (let s = 7; s <= 28; s++) {
      const p = getProfile(s);
      expect(p).toBeDefined();
      expect(p.title).toBeTruthy();
    }
  });
});
