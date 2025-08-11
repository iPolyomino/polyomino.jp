import { render } from "@testing-library/react";
import BlogPage from "./BlogPage";
describe("BlogPage", () => {
  it("レンダリングできる", () => {
    render(
      <BlogPage
        data={{
          title: "",
          date: "",
        }}
        html={""}
      />,
    );
  });
});
