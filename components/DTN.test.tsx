import { render } from "@testing-library/react";
import DTN from "./DTN";

describe("DTN", () => {
  beforeAll(() => {
    // canvas の getContext を型安全にモック
    Object.defineProperty(HTMLCanvasElement.prototype, "getContext", {
      value: () => ({
        clearRect: jest.fn(),
        fillRect: jest.fn(),
        strokeRect: jest.fn(),
        beginPath: jest.fn(),
        moveTo: jest.fn(),
        lineTo: jest.fn(),
        arc: jest.fn(),
        fill: jest.fn(),
        stroke: jest.fn(),
        closePath: jest.fn(),
        fillText: jest.fn(),
        canvas: {},
        // 必要なプロパティを追加
      }),
    });
  });

  it("レンダリングできる", () => {
    // agent >= 2, range >= 10 でエラー回避
    const settings = { node: 3, agent: 2, range: 10 };
    render(<DTN settings={settings} />);
  });
});
