import { render, screen, fireEvent } from "@testing-library/react";
import HitAndBlowResult from "./HitAndBlowResult";
describe("HitAndBlowResult", () => {
  it("レンダリングできる", () => {
    const candidate: number[][] = [];
    render(<HitAndBlowResult candidate={candidate} recommend={undefined} />);
  });

  it("候補数が閾値以下なら全て表示される", () => {
    const candidate = [[1,2,3],[4,5,6]];
    const { container } = render(<HitAndBlowResult candidate={candidate} recommend={candidate[0]} />);
    
    // Grid Itemが2つ（各候補）あるか確認
    const gridItems = container.querySelectorAll('.MuiGrid-item');
    expect(gridItems).toHaveLength(2);
    
    // 数字が表示されていることを確認
    expect(gridItems[0].textContent).toContain('1');
    expect(gridItems[0].textContent).toContain('2');
    expect(gridItems[0].textContent).toContain('3');
    
    expect(gridItems[1].textContent).toContain('4');
    expect(gridItems[1].textContent).toContain('5');
    expect(gridItems[1].textContent).toContain('6');
    
    expect(screen.getByText(/total candidates: 2/)).toBeInTheDocument();
  });

  it("候補数が閾値超ならスイッチで全表示できる", () => {
    const threshold = 1000;
    const candidate = Array.from({length: threshold+2}, (_,i)=>[i]);
    render(<HitAndBlowResult candidate={candidate} recommend={undefined} />);
    // 初期状態では一部のみ
    expect(screen.queryByText(`${threshold+1}`)).not.toBeInTheDocument();
    // スイッチをON
    fireEvent.click(screen.getByRole('checkbox'));
    expect(screen.getByText(`${threshold+1}`)).toBeInTheDocument();
  });
});
