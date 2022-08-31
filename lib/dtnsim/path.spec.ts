import Path from "./path";
import { describe, expect, test } from "@jest/globals";

describe("create path object", () => {
  const path = new Path(null, { x: 10, y: 20 }, { x: 30, y: 40 });

  test("check properties", () => {
    expect(path.source.x).toBe(10);
    expect(path.source.y).toBe(20);
    expect(path.target.x).toBe(30);
    expect(path.target.y).toBe(40);
  });
});
