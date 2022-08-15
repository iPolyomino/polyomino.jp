import path from "path";
import fs from "fs";
import matter from "gray-matter";

import { ArticleData, Link } from "../types/ArticleData";

export const getMarkdownFile = (filename: string) => {
  const filepath = path.join(process.cwd(), "contents", `${filename}.md`);
  const { content } = matter.read(filepath);

  return content;
};

export const getPosts = () => {
  const dirPath = path.join(process.cwd(), "contents", "posts");
  const files = fs.readdirSync(dirPath);
  const posts = files.map((filename) => filename.replace(/\.md$/, ""));
  return posts;
};

export const blogSummary = () => {
  const dirPath = path.join(process.cwd(), "contents", "posts");
  const files = fs.readdirSync(dirPath);
  const posts = files
    .sort()
    .reverse()
    .map((fileName) => {
      const fileContent = fs.readFileSync(
        path.join(dirPath, fileName),
        "utf-8"
      );
      const { data, content } = matter(fileContent);
      const link: Link = {
        name: "記事ページへ",
        url: `/blog/${fileName.replace(/\.md$/, "")}`,
      };
      const article: ArticleData = {
        title: data.title,
        sentence: {
          text: content.substring(0, 700),
          links: [link],
        },
      };
      return article;
    });
  return posts;
};

export const getBlog = (fileName: string) => {
  const filePath = path.join(
    process.cwd(),
    "contents",
    "posts",
    `${fileName}.md`
  );

  const { data, content } = matter.read(filePath);

  return { data, article: content };
};
