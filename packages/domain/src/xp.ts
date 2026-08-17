// XP Engine — deterministic level curve and XP calculation

export function calculateXpForLevel(level: number): number {
  if (level <= 1) return 0;
  return Math.floor(100 * Math.pow(level - 1, 1.5));
}

export function getXpForNextLevel(currentLevel: number): number {
  return calculateXpForLevel(currentLevel + 1) - calculateXpForLevel(currentLevel);
}
