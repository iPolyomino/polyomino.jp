import { render, screen, fireEvent } from "@testing-library/react";
import MorseCodeQuizControl from "./MorseCodeQuizControl";

describe("MorseCodeQuizControl", () => {
  it("レンダリングできる", () => {
    render(
      <MorseCodeQuizControl
        isCorrect={null}
        ditClick={jest.fn()}
        dahClick={jest.fn()}
        answer={jest.fn()}
      />
    );
  });

  it("不正解の場合に「不正解」と表示される", () => {
    render(
      <MorseCodeQuizControl
        isCorrect={false}
        ditClick={jest.fn()}
        dahClick={jest.fn()}
        answer={jest.fn()}
      />
    );
    
    expect(screen.getAllByText("不正解")).toHaveLength(2); // モバイル用とデスクトップ用の2箇所
  });

  it("正解の場合に「正解」と表示される", () => {
    render(
      <MorseCodeQuizControl
        isCorrect={true}
        ditClick={jest.fn()}
        dahClick={jest.fn()}
        answer={jest.fn()}
      />
    );
    
    expect(screen.getAllByText("正解")).toHaveLength(2); // モバイル用とデスクトップ用の2箇所
  });

  it("回答が判定されていない場合に結果が表示されない", () => {
    render(
      <MorseCodeQuizControl
        isCorrect={null}
        ditClick={jest.fn()}
        dahClick={jest.fn()}
        answer={jest.fn()}
      />
    );
    
    expect(screen.queryByText("正解")).not.toBeInTheDocument();
    expect(screen.queryByText("不正解")).not.toBeInTheDocument();
  });

  it("ボタンクリック時にコールバック関数が呼ばれる", () => {
    const ditClick = jest.fn();
    const dahClick = jest.fn();
    const answer = jest.fn();
    
    render(
      <MorseCodeQuizControl
        isCorrect={null}
        ditClick={ditClick}
        dahClick={dahClick}
        answer={answer}
      />
    );
    
    const buttons = screen.getAllByRole("button");
    fireEvent.click(buttons[0]); // ditボタン
    expect(ditClick).toHaveBeenCalledTimes(1);
    
    fireEvent.click(buttons[1]); // dahボタン
    expect(dahClick).toHaveBeenCalledTimes(1);
    
    fireEvent.click(buttons[2]); // OKボタン
    expect(answer).toHaveBeenCalledTimes(1);
  });

  it("回答判定後は点と線のボタンが無効になる", () => {
    render(
      <MorseCodeQuizControl
        isCorrect={true}
        ditClick={jest.fn()}
        dahClick={jest.fn()}
        answer={jest.fn()}
      />
    );
    
    const buttons = screen.getAllByRole("button");
    expect(buttons[0]).toBeDisabled(); // ditボタン
    expect(buttons[1]).toBeDisabled(); // dahボタン
    expect(buttons[2]).not.toBeDisabled(); // OKボタンは常に有効
  });
});
