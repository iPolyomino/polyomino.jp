import Node from "./node";

export const RandomSelect = (node: Node) => {
  if (node.connectedNode.length < 1) {
    throw new Error("This node is independent.");
  }
  const index = Math.floor(node.connectedNode.length * Math.random());
  return node.connectedNode[index];
};

// this function can only use in ring network
export const RingLargeIdSelect = (node: Node, maxId: number) => {
  if (node.id == 0 || node.id === maxId) {
    // select smallest id node
    return node.connectedNode.reduce((pre, cur) =>
      pre.id < cur.id ? pre : cur,
    );
  }
  return node.connectedNode.reduce((pre, cur) => (pre.id > cur.id ? pre : cur));
};
