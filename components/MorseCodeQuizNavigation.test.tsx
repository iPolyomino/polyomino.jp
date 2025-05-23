import { render } from "@testing-library/react";
import MorseCodeQuizNavigation from "./MorseCodeQuizNavigation";
describe("MorseCodeQuizNavigation", () => {
  it("レンダリングできる", () => {
    render(
      <MorseCodeQuizNavigation
        threshold={0}
        setThreshold={() => {}}
      />
    );
  });
});
