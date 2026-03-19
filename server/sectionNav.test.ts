import { describe, it, expect } from "vitest";
import { NAV_SECTIONS } from "../client/src/components/SectionNav";

describe("SectionNav — data integrity", () => {
  it("exports a non-empty NAV_SECTIONS array", () => {
    expect(NAV_SECTIONS.length).toBeGreaterThan(0);
  });

  it("covers all 23 sections", () => {
    expect(NAV_SECTIONS.length).toBe(23);
  });

  it("all section IDs are unique", () => {
    const ids = NAV_SECTIONS.map((s) => s.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("all section IDs start with 'section-'", () => {
    for (const s of NAV_SECTIONS) {
      expect(s.id).toMatch(/^section-/);
    }
  });

  it("all section IDs use kebab-case", () => {
    for (const s of NAV_SECTIONS) {
      expect(s.id).toMatch(/^[a-z0-9-]+$/);
    }
  });

  it("all labels are non-empty strings", () => {
    for (const s of NAV_SECTIONS) {
      expect(typeof s.label).toBe("string");
      expect(s.label.length).toBeGreaterThan(0);
    }
  });

  it("all groups are valid enum values", () => {
    const validGroups = ["intro", "acts", "framework", "scenarios", "close"];
    for (const s of NAV_SECTIONS) {
      expect(validGroups).toContain(s.group);
    }
  });

  it("hero is the first section", () => {
    expect(NAV_SECTIONS[0].id).toBe("section-hero");
  });

  it("resources is the last section", () => {
    expect(NAV_SECTIONS[NAV_SECTIONS.length - 1].id).toBe("section-resources");
  });

  it("all 5 groups are represented", () => {
    const groups = new Set(NAV_SECTIONS.map((s) => s.group));
    expect(groups.size).toBe(5);
  });

  it("intro group contains hero, gap-a, act0, gap-b", () => {
    const introIds = NAV_SECTIONS.filter((s) => s.group === "intro").map((s) => s.id);
    expect(introIds).toContain("section-hero");
    expect(introIds).toContain("section-gap-a");
    expect(introIds).toContain("section-act0");
    expect(introIds).toContain("section-gap-b");
  });

  it("framework group contains all 4 pillars and contrast sections", () => {
    const frameworkIds = NAV_SECTIONS.filter((s) => s.group === "framework").map((s) => s.id);
    expect(frameworkIds).toContain("section-act3");
    expect(frameworkIds).toContain("section-deep-pillars");
    expect(frameworkIds).toContain("section-act4");
    expect(frameworkIds).toContain("section-gap-d");
  });

  it("close group contains quiz and resources", () => {
    const closeIds = NAV_SECTIONS.filter((s) => s.group === "close").map((s) => s.id);
    expect(closeIds).toContain("section-quiz");
    expect(closeIds).toContain("section-resources");
  });
});
