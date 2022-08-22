import "../styles/globals.css";
import type { AppProps } from "next/app";

import Background from "../components/Background";

function MyApp({ Component, pageProps }: AppProps) {
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
