import type { GetStaticPropsContext } from "next";

import TrpgDice from "../trpg-dice";
import { getMarkdownFile } from "@/lib/api";
import { markdownToHTML } from "@/lib/markdown";
import { trpgDiceLanguages } from "@/lib/trpgDiceLanguages";

export const getStaticPaths = async () => ({
  paths: trpgDiceLanguages
    .filter(({ code }) => code !== "en")
    .map(({ code }) => ({ params: { language: code } })),
  fallback: false,
});

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const language = trpgDiceLanguages.find(
    ({ code }) => code !== "en" && code === params?.language,
  );
  if (!language) return { notFound: true };

  const html = await markdownToHTML(
    getMarkdownFile(`trpg-dice-privacy-policy/${language.code}`),
  );
  return { props: { html } };
};

export default TrpgDice;
