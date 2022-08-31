import Node from "./node";
import { describe, expect, test } from "@jest/globals";

describe("node property test", () => {
  const node = new Node(null, { x: 10, y: 20 }, 30);

  test("make node object", () => {
    expect(node.coordinate.x).toBe(10);
    expect(node.coordinate.y).toBe(20);
    expect(node.id).toBe(30);
  });

  test("append connected Node", () => {
    const connectedNode = new Node(null, { x: 30, y: 40 }, 50);
    node.appendConnectedNode(connectedNode);
    expect(node.connectedNode.length).toBe(1);
    expect(node.connectedNode[0].id).toBe(50);

    // error case
    expect(() => node.appendConnectedNode(node)).toThrow(Error);
    expect(node.connectedNode.length).toBe(1);
  });

  test("compare two nodes", () => {
    expect(node.isEqual(node)).toBeTruthy();

    const newNode = new Node(null, { x: 50, y: 60 }, 70);
    expect(node.isEqual(newNode)).toBeFalsy();
  });
});
