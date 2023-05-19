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

export const InitializeAnswer = (len: number, variety = 10) => Permutations([...Array(variety).keys()], len);
