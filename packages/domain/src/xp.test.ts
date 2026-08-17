import { describe, it, expect } from "vitest";
import { calculateXpForLevel, getXpForNextLevel } from "./xp";

describe("XP Engine", () => {
  it("level 1 requires 0 XP", () => {
    expect(calculateXpForLevel(1)).toBe(0);
  });

  it("XP required increases with each level", () => {
    for (let lvl = 2; lvl <= 10; lvl++) {
      expect(calculateXpForLevel(lvl)).toBeGreaterThan(calculateXpForLevel(lvl - 1));
    }
  });

  it("XP to next level is always positive", () => {
    for (let lvl = 1; lvl <= 20; lvl++) {
      expect(getXpForNextLevel(lvl)).toBeGreaterThan(0);
    }
  });
});
