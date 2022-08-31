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

  const node = new Node(null, { x: 10, y: 20 }, 123);
  test("init test", () => {
    agent.initStartNode(node);
    expect(agent.sourceNode?.id).toBe(123);
    expect(agent.coordinate).toEqual({ x: 10, y: 20 });
  });
});
