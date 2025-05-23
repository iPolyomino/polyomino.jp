import { render } from "@testing-library/react";
import ContentsCard from "./ContentsCard";
describe("ContentsCard", () => {
  it("レンダリングできる", () => {
    render(<ContentsCard />);
  });
});
