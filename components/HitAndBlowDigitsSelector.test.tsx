import { render, screen, fireEvent } from "@testing-library/react";
import HitAndBlowDigitsSelector from "./HitAndBlowDigitsSelector";

describe("HitAndBlowDigitsSelector", () => {
  it("正しい桁数オプション（3,4,5）が表示される", () => {
    render(
      <HitAndBlowDigitsSelector
        digit={3}
        handleNumberLength={jest.fn()}
      />
    );
    
    expect(screen.getByText("3")).toBeInTheDocument();
    expect(screen.getByText("4")).toBeInTheDocument();
    expect(screen.getByText("5")).toBeInTheDocument();
  });

  it("初期値に対応するボタンが選択状態になっている", () => {
    render(
      <HitAndBlowDigitsSelector
        digit={4}
        handleNumberLength={jest.fn()}
      />
    );
    
    // toggleボタンは選択状態でaria-pressedがtrueになる
    expect(screen.getByText("3").closest("button")).toHaveAttribute("aria-pressed", "false");
    expect(screen.getByText("4").closest("button")).toHaveAttribute("aria-pressed", "true");
    expect(screen.getByText("5").closest("button")).toHaveAttribute("aria-pressed", "false");
  });

  it("ボタンクリック時にハンドラーが呼ばれる", () => {
    const handleNumberLength = jest.fn();
    render(
      <HitAndBlowDigitsSelector
        digit={3}
        handleNumberLength={handleNumberLength}
      />
    );
    
    fireEvent.click(screen.getByText("4"));
    expect(handleNumberLength).toHaveBeenCalledTimes(1);
  });
});
