export function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  const countS: Record<string, number> = {};
  const countT: Record<string, number> = {};

  for (const i of s) {
    if (i in countS) {
      countS[i]++;
    } else {
      countS[i] = 1;
    }
  }
  for (const j of t) {
    if (j in countT) {
      countT[j]++;
    } else {
      countT[j] = 1;
    }
  }

  for (const key in countS) {
    if (countS[key] !== countT[key]) {
      return false;
    }
  }
  return true;
}
