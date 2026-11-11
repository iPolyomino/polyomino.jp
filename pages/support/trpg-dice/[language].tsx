import type { GetStaticPropsContext } from "next";

import TrpgDice from "../trpg-dice";
import { getMarkdownFile } from "@/lib/api";
import { markdownToHTML } from "@/lib/markdown";
import {
  trpgDiceLanguages,
  getTrpgDiceLanguage,
} from "@/lib/trpgDiceLanguages";

export const getStaticPaths = async () => ({
  paths: trpgDiceLanguages
    .filter(({ code }) => code !== "en")
    .map(({ code }) => ({ params: { language: code } })),
  fallback: false,
});

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const language = getTrpgDiceLanguage(
    "/support/trpg-dice/[language]",
    params?.language,
  );
  if (!language || language === "en") return { notFound: true };

  const html = await markdownToHTML(
    getMarkdownFile(`trpg-dice-privacy-policy/${language}`),
  );
  return { props: { html } };
};

export default TrpgDice;
