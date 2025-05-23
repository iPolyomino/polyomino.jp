import { render } from "@testing-library/react";
import Default from "./Default";
describe("Default", () => {
  it("レンダリングできる", () => {
    render(<Default />);
  });
});
