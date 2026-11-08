import { getTrpgDiceLanguage } from "./trpgDiceLanguages";

const englishPages = new Set([
  "/404",
  "/_error",
  "/dtnsim",
  "/hit-and-blow/asobi",
  "/hit-and-blow/solver",
  "/hobby",
  "/morse",
  "/morse/quiz",
  "/support/rhythmorse",
  "/support/text2unicode",
]);

export const getPageLanguage = (pathname: string, language?: unknown): string =>
  getTrpgDiceLanguage(pathname, language) ??
  (englishPages.has(pathname) ? "en" : "ja");
