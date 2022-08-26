import Path from "./path";
import { describe, expect, test } from "@jest/globals";

describe("create path object", () => {
  const path = new Path(null, 10, 20);

  test("check properties", () => {
    expect(path.source).toBe(10);
    expect(path.target).toBe(20);
  });
});
