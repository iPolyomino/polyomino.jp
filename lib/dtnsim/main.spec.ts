import Main from "./main";
import { afterEach, expect, jest, test } from "@jest/globals";

afterEach(() => {
  jest.restoreAllMocks();
});

test("connects adjacent cells once and preserves node coordinates and IDs", () => {
  jest.spyOn(Main.prototype, "render").mockImplementation(() => {});
  const random = jest.spyOn(Math, "random").mockReturnValue(0);
  // Four cells meet at the center; diagonally opposite cells share no edge.
  for (const value of [0.2, 0.2, 0.8, 0.2, 0.8, 0.8, 0.2, 0.8]) {
    random.mockReturnValueOnce(value);
  }
  const canvas = {
    width: 100,
    height: 100,
    getContext: () => null,
  } as unknown as HTMLCanvasElement;
  const main = new Main(canvas, { node: 4 });

  expect(
    main.links.map(({ source, target }) => `${source.id}-${target.id}`).sort(),
  ).toEqual(["0-1", "0-3", "1-2", "2-3"]);
  for (const { source, target } of main.links) {
    expect(source).toEqual({
      ...main.nodes[source.id!].coordinate,
      id: source.id,
    });
    expect(target).toEqual({
      ...main.nodes[target.id!].coordinate,
      id: target.id,
    });
    expect(main.nodes[source.id!].connectedNode).toContain(
      main.nodes[target.id!],
    );
    expect(main.nodes[target.id!].connectedNode).toContain(
      main.nodes[source.id!],
    );
  }
  expect(main.nodes.map((node) => node.connectedNode.length)).toEqual([
    2, 2, 2, 2,
  ]);
});
