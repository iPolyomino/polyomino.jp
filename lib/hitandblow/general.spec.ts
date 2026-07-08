import {
  HitCounter,
  BlowCounter,
  BlowCounterWithDuplicates,
  InitializeAnswer,
  InitializeAnswerWithDuplicates,
} from "./general";
import { describe, expect, test } from "@jest/globals";

describe("hit counter test", () => {
  test("general case", () => {
    expect(HitCounter([1, 2, 3], [1, 2, 3])).toBe(3);
    expect(HitCounter([3, 2, 1], [1, 2, 3])).toBe(1);
    expect(HitCounter([0, 1, 9], [1, 2, 3])).toBe(0);
  });

  test("same number contains case", () => {
    expect(HitCounter([1, 1, 1], [1, 2, 3])).toBe(1);
    expect(HitCounter([1, 2, 2], [1, 2, 3])).toBe(2);
    expect(HitCounter([4, 4, 4], [1, 2, 3])).toBe(0);
  });
});

describe("blow counter test", () => {
  test("general case", () => {
    expect(BlowCounter([1, 2, 3], [1, 2, 3])).toBe(0);
    expect(BlowCounter([2, 3, 1], [1, 2, 3])).toBe(3);
    expect(BlowCounter([0, 1, 2], [1, 2, 3])).toBe(2);
    expect(BlowCounter([9, 0, 1], [1, 2, 3])).toBe(1);
    expect(BlowCounter([4, 5, 6], [1, 2, 3])).toBe(0);
  });

  test("same number contains case", () => {
    expect(BlowCounter([2, 1, 2], [1, 2, 3])).toBe(3);
    expect(BlowCounter([1, 1, 1], [1, 2, 3])).toBe(2);
    expect(BlowCounter([1, 2, 2], [1, 2, 3])).toBe(1);
    expect(BlowCounter([4, 4, 4], [1, 2, 3])).toBe(0);
  });
});

describe("blow counter with duplicates test", () => {
  test("same number is matched only once", () => {
    expect(BlowCounterWithDuplicates([1, 1, 1], [1, 2, 3])).toBe(0);
    expect(BlowCounterWithDuplicates([2, 1, 2], [1, 2, 3])).toBe(2);
    expect(BlowCounterWithDuplicates([1, 2, 2], [1, 2, 3])).toBe(0);
  });

  test("duplicates can produce blows when positions differ", () => {
    expect(BlowCounterWithDuplicates([1, 1, 2, 2], [2, 2, 1, 1])).toBe(4);
    expect(BlowCounterWithDuplicates([1, 1, 2, 2], [1, 2, 1, 2])).toBe(2);
    expect(BlowCounterWithDuplicates([0, 0, 0, 1], [0, 1, 1, 1])).toBe(0);
  });
});

describe("initialize answer test", () => {
  test("generated length test", () => {
    // 3 permutations of 10 different numbers
    expect(InitializeAnswer(3).length).toBe(10 * 9 * 8);
    expect(InitializeAnswer(4).length).toBe(10 * 9 * 8 * 7);
    expect(InitializeAnswer(5).length).toBe(10 * 9 * 8 * 7 * 6);
  });

  test("generated number not contains same number", () => {
    const answers3 = InitializeAnswer(3);
    expect([...new Set(answers3)].length).toBe(answers3.length);
    const answers4 = InitializeAnswer(4);
    expect([...new Set(answers4)].length).toBe(answers4.length);
    const answers5 = InitializeAnswer(5);
    expect([...new Set(answers5)].length).toBe(answers5.length);
  });
});

describe("initialize answer with duplicates test", () => {
  test("generated length test", () => {
    expect(InitializeAnswerWithDuplicates(3).length).toBe(10 ** 3);
    expect(InitializeAnswerWithDuplicates(4, 6).length).toBe(6 ** 4);
  });

  test("generated number can contain same number", () => {
    const answers = InitializeAnswerWithDuplicates(4, 6);
    expect(answers).toContainEqual([0, 0, 0, 0]);
    expect(answers).toContainEqual([5, 5, 5, 5]);
  });
});
