import { render } from "@testing-library/react";
import Background from "./Background";
describe("Background", () => {
  it("レンダリングできる", () => {
    render(<Background />);
  });
});
