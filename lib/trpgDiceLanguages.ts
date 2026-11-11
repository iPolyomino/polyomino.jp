export const trpgDiceLanguages = [
  { code: "en", name: "English" },
  { code: "ja", name: "日本語" },
  { code: "ko", name: "한국어" },
  { code: "zh-Hans", name: "简体中文" },
  { code: "zh-Hant", name: "繁體中文" },
  { code: "de", name: "Deutsch" },
  { code: "fr", name: "Français" },
  { code: "es", name: "Español" },
  { code: "pt", name: "Português" },
  { code: "it", name: "Italiano" },
] as const;

export const getTrpgDiceLanguage = (pathname: string, language?: unknown) => {
  if (pathname === "/support/trpg-dice") return "en";
  if (pathname === "/support/trpg-dice/[language]") {
    return trpgDiceLanguages.find(({ code }) => code === language)?.code;
  }
  return undefined;
};
