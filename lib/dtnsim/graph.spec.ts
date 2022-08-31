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
  links.forEach((link) => {
    nodes[link.sorce].appendConnectedNode(nodes[link.target]);
    nodes[link.target].appendConnectedNode(nodes[link.sorce]);
  });

  const graph = new Graph(null, 800, 600, nodes, links);
  test("constructor test", () => {
    expect(graph.width).not.toBeUndefined();
    expect(graph.height).not.toBeUndefined();
    expect(() => graph).not.toThrow();
  });
});

describe("error test", () => {
  test("doesn't have enough links", () => {
    const nodes = [...Array(1).keys()].map((key) => {
      const x = key;
      const y = key;
      return new Node(null, [x, y], key);
    });

    expect(() => new Graph(null, 800, 600, nodes, null)).toThrow(
      new Error("cannot create graph by single node")
    );
  });

  test("connectedNode validateion error", () => {
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
    // don't set connectedNode

    expect(() => new Graph(null, 800, 600, nodes, links)).toThrow(
      new Error("invalid number of links")
    );
  });
});
