import { render } from "@testing-library/react";
import Morse from "./Morse";
describe("Morse", () => {
  it("レンダリングできる", () => {
    render(<Morse />);
  });
});
