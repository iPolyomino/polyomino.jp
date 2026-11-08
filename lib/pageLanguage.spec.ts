import { getPageLanguage } from "./pageLanguage";

describe("getPageLanguage", () => {
  it.each([
    "/",
    "/aboutme",
    "/blog",
    "/blog/[id]",
    "/lsnl",
    "/support/chronica",
    "/support/chronica-usage",
  ])("uses Japanese for Japanese or mixed content at %s", (pathname) => {
    expect(getPageLanguage(pathname)).toBe("ja");
  });

  it.each([
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
    "/support/trpg-dice",
  ])("uses English for %s", (pathname) => {
    expect(getPageLanguage(pathname)).toBe("en");
  });

  it.each([
    "ja",
    "ko",
    "zh-Hans",
    "zh-Hant",
    "zh-Hant-HK",
    "de",
    "fr",
    "es",
    "pt-BR",
    "it",
  ])("preserves the localized TRPG policy language %s", (language) => {
    expect(getPageLanguage("/support/trpg-dice/[language]", language)).toBe(
      language,
    );
  });

  it("defaults new pages to Japanese", () => {
    expect(getPageLanguage("/new-page")).toBe("ja");
  });
});
