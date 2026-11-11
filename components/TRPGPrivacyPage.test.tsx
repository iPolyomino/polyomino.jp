import { render, screen, within } from "@testing-library/react";
import TrpgDice, { getStaticProps } from "../pages/support/trpg-dice";
import {
  getStaticPaths,
  getStaticProps as getLocalizedProps,
} from "../pages/support/trpg-dice/[language]";

// Keep the real Markdown file loading; rendering Markdown is covered by the build.
jest.mock("@/lib/markdown", () => ({
  markdownToHTML: async (markdown: string) => markdown,
}));
jest.mock("@/components/NavigationBar", () => () => null);
jest.mock("@/components/Footer", () => () => null);

const localizedHeadings = [
  ["ja", "プライバシーポリシー"],
  ["ko", "개인정보 처리방침"],
  ["zh-Hans", "隐私政策"],
  ["zh-Hant", "隱私權政策"],
  ["de", "Datenschutzerklärung"],
  ["fr", "Politique de confidentialité"],
  ["es", "Política de privacidad"],
  ["pt", "Política de Privacidade"],
  ["it", "Informativa sulla privacy"],
];

describe("TRPG DICE privacy pages", () => {
  it("serves only the English policy at the root URL", async () => {
    const { props } = await getStaticProps();
    expect(props.html).toMatch(/^# Privacy Policy\n/);
    expect(props.html.match(/^# /gm)).toHaveLength(1);
    expect(props.html).not.toContain("プライバシーポリシー");
  });

  it("generates exactly the supported localized routes without /en", async () => {
    const result = await getStaticPaths();
    expect(result.fallback).toBe(false);
    expect(result.paths.map(({ params }) => params.language).sort()).toEqual(
      localizedHeadings.map(([code]) => code).sort(),
    );
  });

  it.each(localizedHeadings)(
    "loads the actual %s policy",
    async (code, heading) => {
      const result = await getLocalizedProps({ params: { language: code } });
      expect(result).toHaveProperty("props.html");
      if (result.props) {
        expect(result.props.html).toMatch(new RegExp(`^# ${heading}\\n`));
        expect(result.props.html).toContain("TRPG DICE");
      }
    },
  );

  it.each(["en", "pt-BR", "zh-Hant-HK", "unknown", "../en", undefined])(
    "rejects an unsupported localized route: %s",
    async (language) => {
      await expect(
        getLocalizedProps({ params: { language } }),
      ).resolves.toEqual({
        notFound: true,
      });
    },
  );

  it("links to every policy with English at the root, inside the shared Card", () => {
    render(<TrpgDice html="<h1>Privacy Policy</h1>" />);
    const nav = screen.getByRole("navigation", {
      name: "Privacy policy languages",
    });
    const links = within(nav).getAllByRole("link");
    expect(links).toHaveLength(10);
    expect(within(nav).getByRole("link", { name: "English" })).toHaveAttribute(
      "href",
      "/support/trpg-dice",
    );
    for (const [code] of localizedHeadings) {
      const link = links.find(
        (element) => element.getAttribute("hreflang") === code,
      );
      expect(link).toHaveAttribute("href", `/support/trpg-dice/${code}`);
      expect(link).toHaveAttribute("lang", code);
    }
    expect(
      links.some(
        (link) => link.getAttribute("href") === "/support/trpg-dice/en",
      ),
    ).toBe(false);
    expect(nav.closest(".MuiCard-root")).toBeInTheDocument();
  });
});
