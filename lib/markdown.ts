import { remark } from "remark";
import html from "remark-html";
import remarkGfm from "remark-gfm";
import strip from "strip-markdown";

export const markdownToHTML = async (markdown: string) => {
  const result = await remark().use(html).use(remarkGfm).process(markdown);
  return result.toString();
};

export const markdownToText = async (markdown: string) => {
  const result = await remark().use(strip).process(markdown);
  return result.toString();
};
