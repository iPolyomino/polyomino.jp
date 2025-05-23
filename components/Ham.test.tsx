import { render } from "@testing-library/react";
import Ham from "./Ham";
describe("Ham", () => {
  it("レンダリングできる", () => {
    render(<Ham />);
  });
});
