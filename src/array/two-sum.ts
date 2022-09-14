export function twoSum(nums: number[], target: number) {
  const prevObj: Record<number, number> = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const diff = target - num;

    if (diff in prevObj) {
      return [prevObj[diff], i];
    } else {
      prevObj[num] = i;
    }
  }
}
