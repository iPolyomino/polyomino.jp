import type { InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import Grid from "@mui/material/Grid";

import NavigationBar from "../components/NavigationBar";
import CenterrizedHorizontalGrid from "../components/CenterrizedHorizontalGrid";
import Article from "../components/Article";
import RawArticle from "../components/RawArticle";
import Footer from "../components/Footer";

import { getMarkdownFile } from "../lib/api";
import { markdownToHTML } from "../lib/markdownToHTML";

import { default as aboutmeJson } from "../contents/aboutme.json";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticProps = async () => {
  const aboutmeMarkdown = getMarkdownFile("aboutme");
  const aboutmeHTML = await markdownToHTML(aboutmeMarkdown);
  return {
    props: {
      aboutmeHTML,
    },
  };
};

const AboutMe: NextPage<Props> = ({ aboutmeHTML }) => {
  const { aboutme } = aboutmeJson;

  return (
    <>
      <Head>
        <title>Hagi</title>
        <meta name="description" content="Hagi's portfolio website." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavigationBar />
      <CenterrizedHorizontalGrid>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={12}>
          <Grid item xs={12}>
            <Article data={aboutme} />
          </Grid>
          <Grid item xs={12}>
            <RawArticle html={aboutmeHTML} />
          </Grid>
          <Grid item xs={12}>
            <Footer />
          </Grid>
        </Grid>
      </CenterrizedHorizontalGrid>
    </>
  );
};

export default AboutMe;
