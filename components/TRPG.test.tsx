import { render } from "@testing-library/react";
import TRPG from "./TRPG";
describe("TRPG", () => {
  it("レンダリングできる", () => {
    render(<TRPG />);
  });
});
