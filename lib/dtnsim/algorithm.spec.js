import { RandomSelect } from "./algorithm";
import Node from "./node";
import { describe, expect, test } from "@jest/globals";

describe("ring network test", () => {
  const totalNodes = 10;
  const nodes = [...Array(totalNodes).keys()]
    .map((key) => {
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      return new Node(null, [x, y], key);
    })
    .map((node) => {
      // create ring network
      node.connectedNode = [
        (totalNodes + node.id - 1) % totalNodes,
        (totalNodes + node.id + 1) % totalNodes,
      ];
      return node;
    });

  test("random select", () => {
    const result1 = RandomSelect(nodes[1]);
    expect(result1 === 0 || result1 === 2).toBe(true);

    const result5 = RandomSelect(nodes[5]);
    expect(result5 === 4 || result5 === 6).toBe(true);

    const resultMin = RandomSelect(nodes[0]);
    expect(resultMin === totalNodes - 1 || resultMin === 1).toBe(true);

    const resultMax = RandomSelect(nodes[totalNodes - 1]);
    expect(resultMax === totalNodes - 2 || resultMax === 0).toBe(true);
  });
});
