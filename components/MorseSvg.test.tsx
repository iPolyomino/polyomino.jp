import { render } from "@testing-library/react";
import { DitSvg, DahSvg } from "./MorseSvg";

describe("MorseSvg", () => {
  it("DitSvgがレンダリングできる", () => {
    render(DitSvg());
  });

  it("DahSvgがレンダリングできる", () => {
    render(DahSvg());
  });
});
