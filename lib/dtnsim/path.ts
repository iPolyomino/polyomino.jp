import { SimulatorCanvas, Coordinate } from "@/types/Simulator";

export default class Path {
  context: SimulatorCanvas;
  source: Coordinate;
  target: Coordinate;

  constructor(
    context: SimulatorCanvas,
    source: Coordinate,
    target: Coordinate
  ) {
    this.context = context;
    this.source = source;
    this.target = target;
  }
  draw() {
    if (this.context == null) {
      throw new Error("context is not defined");
    }
    this.context.beginPath();
    this.context.lineWidth = 5;
    this.context.strokeStyle = "#aaa";
    this.context.moveTo(this.source.x, this.source.y);
    this.context.lineTo(this.target.x, this.target.y);
    this.context.stroke();
  }
}
