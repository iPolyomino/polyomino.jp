import Agent from "./agent";
import Node from "./node";
import { describe, expect, test } from "@jest/globals";

describe("agent test", () => {
  const agent = new Agent(null, { range: 10 });
  test("constructor test", () => {
    expect(agent.range).toBe(10);
    expect(agent.algorithm).not.toBeUndefined();
    expect(agent.isDelivered).toBe(false);
  });

  const node = new Node(null, [10, 20], "exampleId");
  test("init test", () => {
    agent.initStartNode(node);
    expect(agent.sourceNode.id).toBe("exampleId");
    expect(agent.coordinate).toEqual([10, 20]);
  });
});
