import { render, screen, fireEvent } from "@testing-library/react";
import HitAndBlowForm from "./HitAndBlowForm";
describe("HitAndBlowForm", () => {
  it("レンダリングできる", () => {
    render(<HitAndBlowForm digit={3} addHistory={() => {}} />);
  });

  it("正しい入力で addHistory が呼ばれる", () => {
    const addHistory = jest.fn();
    render(<HitAndBlowForm digit={3} addHistory={addHistory} />);
    fireEvent.change(screen.getByLabelText("number"), { target: { value: "123" } });
    fireEvent.change(screen.getByLabelText("hit"), { target: { value: "2" } });
    fireEvent.change(screen.getByLabelText("blow"), { target: { value: "1" } });
    fireEvent.click(screen.getByText("Apply"));
    expect(addHistory).toHaveBeenCalledWith({ ask: [1,2,3], hit: 2, blow: 1 });
  });

  it("hit+blow > digit でエラーダイアログが表示される", () => {
    render(<HitAndBlowForm digit={3} addHistory={() => {}} />);
    fireEvent.change(screen.getByLabelText("number"), { target: { value: "123" } });
    fireEvent.change(screen.getByLabelText("hit"), { target: { value: "2" } });
    fireEvent.change(screen.getByLabelText("blow"), { target: { value: "2" } });
    fireEvent.click(screen.getByText("Apply"));
    expect(screen.getByText(/The sum of hit and blow/)).toBeInTheDocument();
  });

  it("桁数が違うとエラーダイアログが表示される", () => {
    render(<HitAndBlowForm digit={3} addHistory={() => {}} />);
    fireEvent.change(screen.getByLabelText("number"), { target: { value: "12" } });
    fireEvent.change(screen.getByLabelText("hit"), { target: { value: "1" } });
    fireEvent.change(screen.getByLabelText("blow"), { target: { value: "1" } });
    fireEvent.click(screen.getByText("Apply"));
    expect(screen.getByText(/The number length must be equal to/)).toBeInTheDocument();
  });
});
