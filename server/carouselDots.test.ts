/**
 * CarouselDots — Logic Tests
 * Tests the slide-index calculation and edge cases for the CarouselDots component.
 * (DOM/portal rendering is tested via browser; this covers the pure logic.)
 */

import { describe, it, expect } from "vitest";

/** Mirrors the index calculation in CarouselDots.tsx */
function progressToIndex(progress: number, count: number): number {
  const clamped = Math.min(Math.max(progress, 0), 1);
  return Math.round(clamped * (count - 1));
}

describe("CarouselDots — progress to index mapping", () => {
  it("progress 0 maps to index 0 for any count", () => {
    expect(progressToIndex(0, 5)).toBe(0);
    expect(progressToIndex(0, 6)).toBe(0);
    expect(progressToIndex(0, 3)).toBe(0);
  });

  it("progress 1 maps to the last index", () => {
    expect(progressToIndex(1, 5)).toBe(4);
    expect(progressToIndex(1, 6)).toBe(5);
    expect(progressToIndex(1, 3)).toBe(2);
  });

  it("progress 0.5 maps to the middle slide for odd counts", () => {
    expect(progressToIndex(0.5, 5)).toBe(2); // middle of 5
    expect(progressToIndex(0.5, 3)).toBe(1); // middle of 3
  });

  it("progress 0.25 maps to index 1 for a 5-slide carousel", () => {
    expect(progressToIndex(0.25, 5)).toBe(1);
  });

  it("progress 0.5 maps to index 2 for a 5-slide carousel", () => {
    expect(progressToIndex(0.5, 5)).toBe(2);
  });

  it("progress 0.75 maps to index 3 for a 5-slide carousel", () => {
    expect(progressToIndex(0.75, 5)).toBe(3);
  });

  it("progress 1/5 maps correctly for a 6-slide carousel (GapB)", () => {
    // snap points: 0, 0.2, 0.4, 0.6, 0.8, 1.0
    expect(progressToIndex(0.2, 6)).toBe(1);
    expect(progressToIndex(0.4, 6)).toBe(2);
    expect(progressToIndex(0.6, 6)).toBe(3);
    expect(progressToIndex(0.8, 6)).toBe(4);
    expect(progressToIndex(1.0, 6)).toBe(5);
  });

  it("negative progress is clamped to index 0", () => {
    expect(progressToIndex(-0.1, 5)).toBe(0);
    expect(progressToIndex(-99, 5)).toBe(0);
  });

  it("progress > 1 is clamped to last index", () => {
    expect(progressToIndex(1.1, 5)).toBe(4);
    expect(progressToIndex(99, 5)).toBe(4);
  });

  it("count of 2 maps 0 to 0 and 1 to 1", () => {
    expect(progressToIndex(0, 2)).toBe(0);
    expect(progressToIndex(1, 2)).toBe(1);
    expect(progressToIndex(0.5, 2)).toBe(1); // rounds up
  });

  it("count of 1 always returns 0 (single slide, no dots shown)", () => {
    expect(progressToIndex(0, 1)).toBe(0);
    expect(progressToIndex(1, 1)).toBe(0);
  });

  it("snap ratio for GapA (5 slides) is 0.25", () => {
    const count = 5;
    const snap = 1 / (count - 1);
    expect(snap).toBeCloseTo(0.25, 5);
    // Verify each snap point maps to the correct index
    for (let i = 0; i < count; i++) {
      expect(progressToIndex(snap * i, count)).toBe(i);
    }
  });

  it("snap ratio for GapB (6 slides) is 0.2", () => {
    const count = 6;
    const snap = 1 / (count - 1);
    expect(snap).toBeCloseTo(0.2, 5);
    for (let i = 0; i < count; i++) {
      expect(progressToIndex(snap * i, count)).toBe(i);
    }
  });

  it("snap ratio for Act3 (5 slides) is 0.25", () => {
    const count = 5;
    const snap = 1 / (count - 1);
    expect(snap).toBeCloseTo(0.25, 5);
    for (let i = 0; i < count; i++) {
      expect(progressToIndex(snap * i, count)).toBe(i);
    }
  });

  it("snap ratio for Scenarios (5 slides) is 0.25", () => {
    const count = 5;
    const snap = 1 / (count - 1);
    expect(snap).toBeCloseTo(0.25, 5);
    for (let i = 0; i < count; i++) {
      expect(progressToIndex(snap * i, count)).toBe(i);
    }
  });
});
