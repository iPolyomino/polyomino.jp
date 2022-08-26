export const RandomSelect = (node) => {
  if (node.connectedNode.length < 1) {
    throw new Error("This node is independent.");
  }
  const index = Math.floor(node.connectedNode.length * Math.random());
  return node.connectedNode[index];
};
