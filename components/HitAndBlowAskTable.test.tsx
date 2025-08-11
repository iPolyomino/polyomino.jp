import { render, screen } from "@testing-library/react";
import HitAndBlowAskTable from "./HitAndBlowAskTable";
describe("HitAndBlowAskTable", () => {
  it("レンダリングできる", () => {
    render(<HitAndBlowAskTable history={[]} />);
  });

  it("履歴が正しく表示される", () => {
    const history = [
      { ask: [1, 2, 3], hit: 2, blow: 1 },
      { ask: [4, 5, 6], hit: 1, blow: 2 },
    ];
    render(<HitAndBlowAskTable history={history} />);
    expect(screen.getByText("123")).toBeInTheDocument();
    expect(screen.getByText("2 hit")).toBeInTheDocument();
    expect(screen.getByText("1 blow")).toBeInTheDocument();
    expect(screen.getByText("456")).toBeInTheDocument();
    expect(screen.getByText("1 hit")).toBeInTheDocument();
    expect(screen.getByText("2 blow")).toBeInTheDocument();
  });
});
