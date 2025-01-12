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

// Argument types for the voronoi library
// [[x, y, id], ...]
export type VoronoiLink = [number, number, number];
