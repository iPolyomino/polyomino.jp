import { render } from "@testing-library/react";
import NavigationBar from "./NavigationBar";
describe("NavigationBar", () => {
  it("レンダリングできる", () => {
    render(<NavigationBar />);
  });
});
