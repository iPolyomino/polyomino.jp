import Graph from "./graph";
import Node from "./node";
import { describe, expect, test } from "@jest/globals";

describe("ring network test", () => {
  const links = [
    { sorce: 0, target: 1 },
    { sorce: 1, target: 2 },
    { sorce: 2, target: 0 },
  ];
  const nodes = [...Array(3).keys()].map((key) => {
    const x = key;
    const y = key;
    return new Node(null, [x, y], key);
  });
  const graph = new Graph(null, 800, 600, nodes, links);
  test("constructor test", () => {
    expect(graph.width).not.toBeUndefined();
    expect(graph.height).not.toBeUndefined();
  });
});
