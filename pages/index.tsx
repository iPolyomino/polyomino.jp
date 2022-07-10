import type { NextPage } from "next";
import Head from "next/head";
import Grid from "@mui/material/Grid";

import Hagi from "../components/Hagi";
import CenterrizedHorizontalGrid from "../components/CenterrizedHorizontalGrid";
import Article from "../components/Article";
import Footer from "../components/Footer";

import { ArticleData } from "../types/ArticleData";

import { articles } from "../contents/article.json";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Hagi</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CenterrizedHorizontalGrid>
        <Grid
          item
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          style={{ minHeight: "100vh" }}
        >
          <Hagi />
        </Grid>
        {articles.map((data: ArticleData, i) => (
          <Article data={data} key={i} />
        ))}
        <Footer />
      </CenterrizedHorizontalGrid>
    </>
  );
};

export default Home;
