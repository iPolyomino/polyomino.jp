import { render } from "@testing-library/react";
import RawArticle from "./RawArticle";

describe("RawArticle", () => {
  it("HTMLコンテンツを正しく表示できる", () => {
    const { container } = render(<RawArticle html="<p>Test Content</p>" />);

    // dangerouslySetInnerHTMLを使用しているため、直接DOMから確認
    expect(container.querySelector("p")).toBeInTheDocument();
    expect(container.querySelector("p")?.textContent).toBe("Test Content");
  });

  it("複雑なHTMLを正しく表示できる", () => {
    const complexHTML = `
      <h1>タイトル</h1>
      <p>段落テキスト</p>
      <ul>
        <li>リストアイテム1</li>
        <li>リストアイテム2</li>
      </ul>
    `;

    const { container } = render(<RawArticle html={complexHTML} />);

    expect(container.querySelector("h1")).toBeInTheDocument();
    expect(container.querySelector("h1")?.textContent).toBe("タイトル");

    expect(container.querySelector("p")).toBeInTheDocument();
    expect(container.querySelector("p")?.textContent).toBe("段落テキスト");

    expect(container.querySelectorAll("li")).toHaveLength(2);
    expect(container.querySelectorAll("li")[0]?.textContent).toBe(
      "リストアイテム1",
    );
    expect(container.querySelectorAll("li")[1]?.textContent).toBe(
      "リストアイテム2",
    );
  });

  it("ContentsCardの中にarticleタグがレンダリングされる", () => {
    const { container } = render(<RawArticle html="<p>Test</p>" />);

    // ContentsCardの子要素としてarticleタグが存在するか確認
    const article = container.querySelector("article");
    expect(article).toBeInTheDocument();
  });
});
