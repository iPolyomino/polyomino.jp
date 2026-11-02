import { render } from "@testing-library/react";
import TRPG from "./TRPG";
describe("TRPG", () => {
  it("レンダリングできる", () => {
    render(<TRPG html="<h1>TRPG DICE Privacy Policy</h1>" />);
  });
});
