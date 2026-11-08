import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { getPageLanguage } from "@/lib/pageLanguage";

import Background from "@/components/Background";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const language = getPageLanguage(router.pathname, router.query.language);
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <>
      <Background />
      <main>
        <Component {...pageProps}></Component>
      </main>
    </>
  );
}

export default MyApp;
