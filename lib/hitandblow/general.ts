export const Permutations = (nums: number[], len: number) => {
  const result: number[][] = [];
  const permute = (queue: number[] = []) => {
    if (queue.length === len) {
      result.push(queue);
    } else {
      for (const num of nums) {
        if (!queue.includes(num)) {
          permute(queue.concat(num));
        }
      }
    }
  };
  permute();
  return result;
};

export const HitCounter = (a: number[], b: number[]) => {
  if (a.length !== b.length) {
    throw new Error("numbers to be compared should be of equal length");
  }
  let ans = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[i]) {
      ans++;
    }
  }
  return ans;
};

export const BlowCounter = (a: number[], b: number[]) => {
  if (a.length !== b.length) {
    throw new Error("numbers to be compared should be of equal length");
  }
  let ans = 0;
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (i === j) continue;
      if (a[i] === b[j]) {
        ans++;
      }
    }
  }
  return ans;
};

export const InitializeAnswer = (len: number, variety = 10) =>
  Permutations([...Array(variety).keys()], len);

export const SelectRecommend = (nums: number[][]) => {
  interface HitBlow {
    hit: number;
    blow: number;
  }

  if (nums.length === 0 || nums.length >= 1000) return undefined;

  const numLength = nums[0].length;
  let hitblow: HitBlow[] = [];
  for (let i = 0; i < numLength; i++) {
    for (let j = 0; i + j < numLength; j++) {
      hitblow = [...hitblow, { hit: i, blow: j }];
    }
  }
  const CalcHitBlow = (nums: number[][], next: number[]) => {
    interface Result {
      [key: string]: number;
    }
    const result: Result = {};
    for (const hb of hitblow) {
      const hbResult = nums
        .filter((hbr) => HitCounter(hbr, next) === hb.hit)
        .filter((hbr) => BlowCounter(hbr, next) === hb.blow);
      result[`${hb.hit}hit${hb.blow}blow`] = hbResult.length;
    }
    return result;
  };

  const recommend = nums
    .map((next) => {
      const hitblow = CalcHitBlow(nums, next);
      const mx = Math.max(...Object.values(hitblow));
      return { recommend: next, max: mx, hitblow: hitblow };
    })
    .sort((a, b) => a.max - b.max);

  return recommend[0];
};
