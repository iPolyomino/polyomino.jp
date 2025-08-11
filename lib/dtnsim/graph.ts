import Path from "./path";
import Node from "./node";
import { SimulatorCanvas, Link } from "@/types/Simulator";

export default class Graph {
  context: SimulatorCanvas;
  width: number;
  height: number;
  nodes: Node[];
  links: Link[];

  constructor(
    context: SimulatorCanvas,
    width = 800,
    height = 600,
    nodes: Node[],
    links: Link[],
  ) {
    if (nodes == null || nodes.length < 2) {
      throw new Error("cannot create graph by single node");
    }
    // node connected link count validateion
    const connections = nodes.map((node) => node.connectedNode).flat();
    if (connections.length / 2 !== links.length) {
      throw new Error("invalid number of links");
    }

    this.context = context;
    this.width = width;
    this.height = height;

    this.nodes = nodes;
    this.links = links;
  }
  draw() {
    if (this.context == null) {
      throw new Error("context is not defined");
    }
    this.context.fillStyle = "#222";
    this.context.fillRect(0, 0, this.width, this.height);
    this.links.forEach((link) => {
      const newPath = new Path(this.context, link.source, link.target);
      newPath.draw();
    });
    this.nodes.forEach((node) => {
      node.draw();
    });
  }
}
