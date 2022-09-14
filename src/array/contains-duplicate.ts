export function containsDuplicate(nums: number[]): boolean {
  let result = 0;
  for (const num of nums) {
    result = result ^ num;
  }
  if (result) {
    return true;
  }
  return false;
}
