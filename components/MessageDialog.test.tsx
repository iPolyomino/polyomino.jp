import { render, screen, fireEvent } from "@testing-library/react";
import MessageDialog from "./MessageDialog";

describe("MessageDialog", () => {
  it("開いている場合はメッセージが表示される", () => {
    render(
      <MessageDialog
        message="テストメッセージ"
        isOpen={true}
        handleClose={() => {}}
      />,
    );

    expect(screen.getByText("テストメッセージ")).toBeInTheDocument();
    expect(screen.getByText("Close")).toBeInTheDocument();
  });

  it("閉じている場合はメッセージが表示されない", () => {
    render(
      <MessageDialog
        message="テストメッセージ"
        isOpen={false}
        handleClose={() => {}}
      />,
    );

    expect(screen.queryByText("テストメッセージ")).not.toBeInTheDocument();
  });

  it("CloseボタンをクリックするとhandleClose関数が呼ばれる", () => {
    const handleClose = jest.fn();
    render(
      <MessageDialog
        message="テストメッセージ"
        isOpen={true}
        handleClose={handleClose}
      />,
    );

    fireEvent.click(screen.getByText("Close"));
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it("ダイアログ外をクリックするとhandleClose関数が呼ばれる", () => {
    const handleClose = jest.fn();
    render(
      <MessageDialog
        message="テストメッセージ"
        isOpen={true}
        handleClose={handleClose}
      />,
    );

    // ダイアログ外のクリックをシミュレート (backdrop)
    const backdrop = document.querySelector(".MuiBackdrop-root");
    if (backdrop) {
      fireEvent.click(backdrop);
      expect(handleClose).toHaveBeenCalledTimes(1);
    }
  });
});
