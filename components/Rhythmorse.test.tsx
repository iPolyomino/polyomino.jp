import { render } from "@testing-library/react";
import Rhythmorse from "./Rhythmorse";
describe("Rhythmorse", () => {
  it("レンダリングできる", () => {
    render(<Rhythmorse html="<h1>Rythmorse Privacy Policy</h1>" />);
  });
});
