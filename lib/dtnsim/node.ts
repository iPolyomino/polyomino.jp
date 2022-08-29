export default class Node {
  size: number;
  color: string;
  context: CanvasRenderingContext2D | null;
  coordinate: number[];
  id: string | number;
  connectedNode: Node[];

  constructor(
    context: CanvasRenderingContext2D | null,
    coordinate: number[],
    id: string | number
  ) {
    if (coordinate.length != 2) {
      throw new Error("coordinate should set as [x, y]");
    }
    this.size = 10;
    this.color = "#555";
    this.context = context;
    this.coordinate = coordinate;
    this.id = id;
    this.connectedNode = [];
  }
  appendConnectedNode(node: Node) {
    if (node.id === this.id) {
      throw new Error("cannot append self node.");
    }
    this.connectedNode.push(node);
  }
  isEqual(node: Node) {
    return node.id === this.id;
  }
  draw() {
    if (this.context == null) {
      throw new Error("context is not defined");
    }
    this.context.beginPath();
    this.context.fillStyle = this.color;
    this.context.arc(
      this.coordinate[0],
      this.coordinate[1],
      this.size,
      0,
      Math.PI * 2
    );
    this.context.fill();
  }
}
