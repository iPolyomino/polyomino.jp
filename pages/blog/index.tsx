import type { InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import Grid from "@mui/material/Grid";

import NavigationBar from "../../components/NavigationBar";
import CenterrizedHorizontalGrid from "../../components/CenterrizedHorizontalGrid";
import Article from "../../components/Article";
import Footer from "../../components/Footer";

import { blogSummary } from "../../lib/api";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticProps = async () => {
  const summary = await blogSummary();
  return {
    props: {
      summary,
    },
  };
};

const Blog: NextPage<Props> = ({ summary }) => {
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Hagi Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavigationBar />
      <CenterrizedHorizontalGrid>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={12}>
          {summary.map((article, i) => (
            <Grid item xs={12} key={i}>
              <Article data={article} />
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

export default Blog;
