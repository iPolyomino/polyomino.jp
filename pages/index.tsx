import type { NextPage } from "next";
import Head from "next/head";
import Grid from "@mui/material/Grid";

import Hagi from "../components/Hagi";
import CenterrizedHorizontalGrid from "../components/CenterrizedHorizontalGrid";
import Article from "../components/Article";
import Footer from "../components/Footer";

import { ArticleData } from "../types/ArticleData";

import { default as aboutmeJson } from "../contents/aboutme.json";
import { default as articlesJson } from "../contents/article.json";
import { default as appendixJson } from "../contents/appendix.json";

const Home: NextPage = () => {
  const { aboutme } = aboutmeJson;
  const { articles } = articlesJson;
  const { appendix } = appendixJson;
  return (
    <>
      <Head>
        <title>Hagi</title>
        <meta name="description" content="Hagi's portfolio website." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CenterrizedHorizontalGrid>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          style={{ minHeight: "100vh" }}
        >
          <Hagi />
        </Grid>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={12}>
          <Grid item xs={12}>
            <Article data={aboutme} />
          </Grid>
          {articles.map((data: ArticleData, i) => (
            <Grid item xs={12} md={6} key={i}>
              <Article data={data} />
            </Grid>
          ))}
          {appendix.map((data, i) => (
            <Grid item xs={12} key={i}>
              <Article data={data} />
            </Grid>
          ))}
          <Grid item xs={12}>
            <Footer />
          </Grid>
        </Grid>
      </CenterrizedHorizontalGrid>
    </>
  );
};

export default Home;
