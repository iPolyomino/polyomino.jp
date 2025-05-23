import { render } from "@testing-library/react";
import MorseCodeQuiz from "./MorseCodeQuiz";
describe("MorseCodeQuiz", () => {
  it("レンダリングできる", () => {
    render(<MorseCodeQuiz />);
  });
});
