export type SimulatorCanvas = CanvasRenderingContext2D | null;

// [x, y, id]
export type Coordinate = [number, number, string?];

export type Link = {
  source: Coordinate;
  target: Coordinate;
};
