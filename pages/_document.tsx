import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="application-name" content="polyomino.jp" />

          <link rel="apple-touch-icon" href="/icon/256x256.png" />

          <meta name="theme-color" content="#FFFFFF" />
          <link rel="manifest" href="/manifest.json" />

          <meta name="twitter:card" content="Hagi portfolio website" />
          <meta name="twitter:url" content="https://polyomino.jp" />
          <meta name="twitter:title" content="polyomino.jp" />
          <meta name="twitter:description" content="Hagi portfolio website" />
          <meta name="twitter:creator" content="@iPolyomino" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Hagi portfolio website" />
          <meta property="og:description" content="portfolio website" />
          <meta property="og:site_name" content="polyomino.jp" />
          <meta property="og:url" content="https://polyomino.jp" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default MyDocument;
