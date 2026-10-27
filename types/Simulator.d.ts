export type SimulatorCanvas = CanvasRenderingContext2D | null;

export type Coordinate = {
  x: number;
  y: number;
  id?: number;
};

export type Link = {
  source: Coordinate;
  target: Coordinate;
};
