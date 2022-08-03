import path from "path";
import matter from "gray-matter";

export const getMarkdownFile = (filename: string) => {
  const filepath = path.join(process.cwd(), "contents", `${filename}.md`);
  const { content } = matter.read(filepath);

  return content;
};
