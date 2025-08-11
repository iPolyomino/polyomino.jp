import { render } from "@testing-library/react";
import MorseCodeQuizMain from "./MorseCodeQuizMain";
describe("MorseCodeQuizMain", () => {
  it("レンダリングできる", () => {
    render(
      <MorseCodeQuizMain
        isCorrect={false}
        index={0}
        code=""
        clearCode={() => {}}
      />,
    );
  });
});
