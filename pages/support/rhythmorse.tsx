import type { InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import Grid from "@mui/material/Grid";

import NavigationBar from "@/components/NavigationBar";
import CenterrizedHorizontalGrid from "@/components/CenterrizedHorizontalGrid";
import Rhythmorse from "@/components/Rhythmorse";
import Footer from "@/components/Footer";
import { getMarkdownFile } from "@/lib/api";
import { markdownToHTML } from "@/lib/markdown";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticProps = async () => {
  const html = await markdownToHTML(
    getMarkdownFile("rhythmorse-privacy-policy"),
  );
  return { props: { html } };
};

const RhythmorsePage: NextPage<Props> = ({ html }) => {
  return (
    <>
      <Head>
        <title>Rhythmorse support</title>
        <meta name="" content="Rhythmorse support" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavigationBar />
      <CenterrizedHorizontalGrid>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={12}>
          <Grid size={12}>
            <Rhythmorse html={html} />
          </Grid>
          <Grid size={12}>
            <Footer />
          </Grid>
        </Grid>
      </CenterrizedHorizontalGrid>
    </>
  );
};

export default RhythmorsePage;
