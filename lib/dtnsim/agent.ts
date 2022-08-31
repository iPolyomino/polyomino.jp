import { RandomSelect } from "./algorithm";
import Node from "./node";
import { SimulatorCanvas, Coordinate } from "@/types/Simulator";

export default class Agent {
  context: SimulatorCanvas;
  range: number;
  algorithm: (node: Node) => Node;
  size: number;
  coordinate: Coordinate;
  sourceNode: Node | null;
  targetNode: Node | null;
  unitVector: Coordinate | null;
  isDelivered: boolean;

  constructor(
    context: SimulatorCanvas,
    { range = 40, algorithm = RandomSelect } = {}
  ) {
    this.context = context;
    this.range = range;
    this.algorithm = algorithm;
    this.size = 10;
    this.coordinate = { x: 0, y: 0 };
    this.sourceNode = null;
    this.targetNode = null;
    this.unitVector = null;
    this.isDelivered = false;
  }
  initStartNode(startNode: Node) {
    this.sourceNode = startNode;
    this.coordinate = startNode.coordinate;
  }
  move() {
    if (this.unitVector === null || this.targetNode === null) {
      this.selectNextNode();
      return;
    }

    // This agent move unit vector every loop.
    // This algorithm has large amount of calculation.
    const xRemainingCoordinate =
      this.targetNode.coordinate.x - this.coordinate.x;
    const yRemainingCoordinate =
      this.targetNode.coordinate.y - this.coordinate.y;
    const distance = Math.sqrt(
      Math.pow(xRemainingCoordinate, 2) + Math.pow(yRemainingCoordinate, 2)
    );

    if (distance < 1) {
      this.coordinate = this.targetNode.coordinate;
      this.sourceNode = this.targetNode;
      this.selectNextNode();
    }

    this.coordinate = {
      x: this.coordinate.x + this.unitVector.x,
      y: this.coordinate.y + this.unitVector.y,
    };
    this.draw();
  }
  selectNextNode() {
    if (this.sourceNode === null) {
      throw new Error("sourceNode is not initialized.");
    }
    this.targetNode = this.algorithm(this.sourceNode);
    this.calcVector();
  }
  calcVector() {
    if (this.targetNode == null || this.sourceNode == null) {
      throw new Error("coordinate is undefined");
    }
    const xDiff = this.targetNode.coordinate.x - this.sourceNode.coordinate.x;
    const yDiff = this.targetNode.coordinate.y - this.sourceNode.coordinate.y;
    // |\vec{a}|
    const vecA = Math.sqrt(Math.pow(xDiff, 2) + Math.pow(yDiff, 2));
    this.unitVector = { x: xDiff / vecA, y: yDiff / vecA };
  }
  draw() {
    if (this.context == null) {
      throw new Error("context is not defined");
    }
    // range
    this.context.beginPath();
    this.context.fillStyle = "hsla(200, 70%, 70%, 0.6)";
    this.context.arc(
      this.coordinate.x,
      this.coordinate.y,
      this.range,
      0,
      Math.PI * 2
    );
    this.context.fill();

    // body
    this.context.beginPath();
    this.context.fillStyle = "hsl(60, 100%, 50%)";
    if (this.isDelivered) {
      this.context.fillStyle = "hsl(230, 100%, 50%)";
    }
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
