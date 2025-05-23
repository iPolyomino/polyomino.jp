import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Article from "../components/Article";
import { ArticleData } from "../types/ArticleData";

describe("Article component", () => {
  const mockData: ArticleData = {
    title: "テストタイトル",
    media: {
      jpg: "test.jpg",
      alt: "テスト画像"
    },
    sentence: {
      text: "これはテスト用の本文です。",
      links: [
        { name: "リンク1", url: "https://example.com" },
        { name: "リンク2", url: "https://example.org", rel: "noopener" }
      ]
    }
  };

  it("タイトル、本文、画像、リンクが正しく表示される", () => {
    render(<Article data={mockData} />);
    expect(screen.getByText("テストタイトル")).toBeInTheDocument();
    expect(screen.getByText("これはテスト用の本文です。")).toBeInTheDocument();
    expect(screen.getByAltText("テスト画像")).toBeInTheDocument();
    expect(screen.getByText("リンク1")).toBeInTheDocument();
    expect(screen.getByText("リンク2")).toBeInTheDocument();
  });
});
