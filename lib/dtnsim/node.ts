import { SimulatorCanvas, Coordinate } from "@/types/Simulator";

export default class Node {
  size: number;
  color: string;
  context: SimulatorCanvas;
  coordinate: Coordinate;
  id: number;
  connectedNode: Node[];

  constructor(context: SimulatorCanvas, coordinate: Coordinate, id: number) {
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
      this.coordinate.x,
      this.coordinate.y,
      this.size,
      0,
      Math.PI * 2
    );
    this.context.fill();
  }
}
