import path from "path";
import { promises as fsp } from "fs";
import matter from "gray-matter";

import { ArticleData, Link } from "@/types/ArticleData";

import { markdownToText } from "@/lib/markdown";

export const getMarkdownFile = (filename: string) => {
  const filepath = path.join(process.cwd(), "contents", `${filename}.md`);
  const { content } = matter.read(filepath);

  return content;
};

export const getPosts = async () => {
  const dirPath = path.join(process.cwd(), "contents", "posts");
  const files = await fsp.readdir(dirPath);
  const posts = files.map((filename) => filename.replace(/\.md$/, ""));
  return posts;
};

const fileToArticle = async (dirPath: string, fileName: string) => {
  const fileContent = await fsp.readFile(path.join(dirPath, fileName), "utf-8");

  const { data, content } = matter(fileContent);
  const link: Link = {
    name: "記事ページへ",
    url: `/blog/${fileName.replace(/\.md$/, "")}`,
  };

  const text = await markdownToText(content);

  const article: ArticleData = {
    title: data.title,
    sentence: {
      text: text.substring(0, 700),
      links: [link],
    },
  };
  return article;
};

export const blogSummary = async () => {
  const dirPath = path.join(process.cwd(), "contents", "posts");
  const files = await fsp.readdir(dirPath);
  const sortedFiles = files.sort().reverse();
  const asyncArticles = sortedFiles.map(async (fileName) =>
    fileToArticle(dirPath, fileName)
  );
  const articles = await Promise.all(asyncArticles);

  return articles;
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
