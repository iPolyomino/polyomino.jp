import Graph from "./graph";
import Node from "./node";
import { describe, expect, test } from "@jest/globals";
import { Link } from "@/types/Simulator";

describe("ring network test", () => {
  const links: Link[] = [
    { source: { x: 0, y: 0, id: 0 }, target: { x: 1, y: 1, id: 1 } },
    { source: { x: 1, y: 1, id: 1 }, target: { x: 2, y: 2, id: 2 } },
    { source: { x: 2, y: 2, id: 2 }, target: { x: 0, y: 0, id: 0 } },
  ];
  const nodes = [...Array(3).keys()].map((key) => {
    const x = key;
    const y = key;
    return new Node(null, { x, y }, key);
  });
  links.forEach((link) => {
    if (link.source.id == null || link.target.id == null) return;
    nodes[link.source.id].appendConnectedNode(nodes[link.target.id]);
    nodes[link.target.id].appendConnectedNode(nodes[link.source.id]);
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
      return new Node(null, { x, y }, key);
    });

    expect(() => new Graph(null, 800, 600, nodes, [])).toThrow(
      new Error("cannot create graph by single node")
    );
  });

  test("connectedNode validateion error", () => {
    const links = [
      { source: { x: 0, y: 0, id: 0 }, target: { x: 1, y: 1, id: 1 } },
      { source: { x: 1, y: 1, id: 1 }, target: { x: 2, y: 2, id: 2 } },
      { source: { x: 2, y: 2, id: 2 }, target: { x: 0, y: 0, id: 0 } },
    ];
    const nodes = [...Array(3).keys()].map((key) => {
      return new Node(null, { x: key, y: key }, key);
    });
    // don't set connectedNode

    expect(() => new Graph(null, 800, 600, nodes, links)).toThrow(
      new Error("invalid number of links")
    );
  });
});
