import type { InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import Grid from "@mui/material/Grid";

import NavigationBar from "@/components/NavigationBar";
import CenterrizedHorizontalGrid from "@/components/CenterrizedHorizontalGrid";
import RawArticle from "@/components/RawArticle";
import Footer from "@/components/Footer";

import { getMarkdownFile } from "@/lib/api";
import { markdownToHTML } from "@/lib/markdown";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticProps = async () => {
  const html = ["abstract", "history", "life"]
    .map((name) => getMarkdownFile(name))
    .map((md) => markdownToHTML(md));
  const [aboutmeHTML, historyHTML, lifeHTML] = await Promise.all(html);
  return {
    props: {
      aboutmeHTML,
      historyHTML,
      lifeHTML,
    },
  };
};

const AboutMe: NextPage<Props> = ({ aboutmeHTML, historyHTML, lifeHTML }) => {

  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="Hagi's portfolio website." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavigationBar />
      <CenterrizedHorizontalGrid>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={12}>
          <Grid size={12}>
            <RawArticle html={aboutmeHTML} />
          </Grid>
          <Grid size={12}>
            <RawArticle html={historyHTML} />
          </Grid>
          <Grid size={12}>
            <RawArticle html={lifeHTML} />
          </Grid>
          <Grid size={12}>
            <Footer />
          </Grid>
        </Grid>
      </CenterrizedHorizontalGrid>
    </>
  );
};

export default AboutMe;
