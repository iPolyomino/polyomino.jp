import { getTrpgDiceLanguage } from "./trpgDiceLanguages";

describe("getTrpgDiceLanguage", () => {
  it("uses English for the root policy", () => {
    expect(getTrpgDiceLanguage("/support/trpg-dice")).toBe("en");
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
  ])("uses %s for its localized policy", (language) => {
    expect(getTrpgDiceLanguage("/support/trpg-dice/[language]", language)).toBe(
      language,
    );
  });

  it("does not assign a policy language to other pages or invalid values", () => {
    expect(getTrpgDiceLanguage("/support/rhythmorse")).toBeUndefined();
    expect(
      getTrpgDiceLanguage("/support/trpg-dice/[language]", "unknown"),
    ).toBeUndefined();
    expect(
      getTrpgDiceLanguage("/support/trpg-dice/[language]", ["ja"]),
    ).toBeUndefined();
  });
});
