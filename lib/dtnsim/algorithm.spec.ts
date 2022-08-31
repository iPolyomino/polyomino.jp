import { RandomSelect } from "./algorithm";
import Node from "./node";
import { describe, expect, test } from "@jest/globals";

describe("ring network test", () => {
  const totalNodes = 10;
  const nodes = [...Array(totalNodes).keys()].map((key) => {
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    return new Node(null, { x, y }, key);
  });

  nodes.map((node) => {
    // create ring network
    node.connectedNode = [
      nodes[(totalNodes + node.id - 1) % totalNodes],
      nodes[(totalNodes + node.id + 1) % totalNodes],
    ];
    return node;
  });

  test("random select", () => {
    expect(nodes[1].connectedNode.length).toBe(2);
    expect(nodes[1].connectedNode[0].connectedNode.length).toBe(2);
    const result1 = RandomSelect(nodes[1]);
    expect(result1.id === 0 || result1.id === 2).toBe(true);

    const result5 = RandomSelect(nodes[5]);
    expect(result5.id === 4 || result5.id === 6).toBe(true);

    const resultMin = RandomSelect(nodes[0]);
    expect(resultMin.id === totalNodes - 1 || resultMin.id === 1).toBe(true);

    const resultMax = RandomSelect(nodes[totalNodes - 1]);
    expect(resultMax.id === totalNodes - 2 || resultMax.id === 0).toBe(true);
  });
});
