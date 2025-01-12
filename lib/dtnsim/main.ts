import Agent from "./agent";
import Graph from "./graph";
import Information from "./information";
import Node from "./node";
import { SimulatorCanvas, Link, VoronoiLink } from "@/types/Simulator";

import { voronoi as d3Voronoi } from "d3-voronoi";

export default class Main {
  context: SimulatorCanvas;
  width: number;
  height: number;
  nodes: Node[];
  links: Link[];
  graph: Graph;
  information: Information;
  agents: Agent[];
  requestId: number | null;

  constructor(
    canvas: HTMLCanvasElement | null,
    { node = 20, agent = 3, range = 10 } = {}
  ) {
    if (canvas == null) {
      throw new Error(`canvas: ${canvas}`);
    }

    if (node < 3) {
      throw new Error(`'node' should be more than 3`);
    }

    if (agent < 2) {
      throw new Error(`'agent' should be more than 2`);
    }

    if (range < 10) {
      throw new Error(`'node' should be more than 10`);
    }

    this.context = canvas.getContext("2d");
    this.width = canvas.width;
    this.height = canvas.height;

    // init nodes
    this.nodes = [...Array(node).keys()].map((key) => {
      const x = Math.random() * this.width;
      const y = Math.random() * this.height;
      return new Node(this.context, { x, y }, key);
    });

    // init voronoi diagram
    const voronoi = d3Voronoi<VoronoiLink>();
    voronoi.extent([
      [0, 0],
      [this.width, this.height],
    ]);
    const data: Array<VoronoiLink> = this.nodes.map((node) => [
      node.coordinate.x,
      node.coordinate.y,
      node.id,
    ]);
    const voronoiLinks = voronoi(data).links();

    this.links = voronoiLinks.map((link) => {
      return {
        source: {
          x: link.source[0],
          y: link.source[1],
          id: link.source[2],
        },
        target: {
          x: link.target[0],
          y: link.target[1],
          id: link.target[2],
        },
      };
    });

    // node connectionNode update
    this.links.forEach((link) => {
      const sourceId = link.source.id;
      const targetId = link.target.id;

      if (sourceId == null || targetId == null) {
        throw new Error();
      }

      // append connectedNode to each other
      this.nodes[sourceId].appendConnectedNode(this.nodes[targetId]);
      this.nodes[targetId].appendConnectedNode(this.nodes[sourceId]);
    });

    this.graph = new Graph(
      this.context,
      this.width,
      this.height,
      this.nodes,
      this.links
    );

    this.information = new Information(this.context, this.width, this.height);

    // init agents
    const agentSettings = { range: range };
    this.agents = [...Array(agent).keys()].map(
      () => new Agent(this.context, agentSettings)
    );

    this.agents.forEach((_, index) => {
      // agents start from node
      const startNode =
        this.nodes[Math.floor(this.nodes.length * Math.random())];
      this.agents[index].initStartNode(startNode);
    });

    // source agent
    this.agents[0].isDelivered = true;

    this.requestId = null;

    this.render();
  }
  render() {
    if (this.context == null) {
      throw new Error("context is not defined");
    }
    // prepare redraw
    this.context.clearRect(0, 0, this.width, this.height);

    // redraw
    this.graph.draw();
    this.agents.forEach((agent) => {
      agent.move();
    });

    // This algorithm has large amount of calculation.
    // Please check 'quadtree'.
    for (let i = 0; i < this.agents.length; i++) {
      for (let j = 0; j < this.agents.length; j++) {
        const sourceAgent = this.agents[i];
        const targetAgent = this.agents[j];
        if (i === j || !sourceAgent.isDelivered || targetAgent.isDelivered) {
          continue;
        }

        const xDiff = targetAgent.coordinate.x - sourceAgent.coordinate.x;
        const yDiff = targetAgent.coordinate.y - sourceAgent.coordinate.y;
        const distance = Math.sqrt(Math.pow(xDiff, 2) + Math.pow(yDiff, 2));

        if (distance < sourceAgent.range + targetAgent.size) {
          // target agetn delivered
          this.agents[j].isDelivered = true;
        }
      }
    }

    // information
    const deliverd = this.agents.filter((agent) => agent.isDelivered).length;
    this.information.deliverd = deliverd;
    if (deliverd === this.agents.length && this.information.endTime === null) {
      this.information.end();
    }

    this.information.time++;
    this.information.draw();

    this.requestId = window.requestAnimationFrame(this.render.bind(this));
  }
  stopAnimation() {
    if (this.requestId != null) {
      cancelAnimationFrame(this.requestId);
    }
  }
}
