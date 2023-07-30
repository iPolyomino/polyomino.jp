import type { NextPage } from "next";
import Head from "next/head";
import Grid from "@mui/material/Grid";

import NavigationBar from "@/components/NavigationBar";
import CenterrizedHorizontalGrid from "@/components/CenterrizedHorizontalGrid";
import Text2Unicode from "@/components/Text2Unicode";
import Footer from "@/components/Footer";

const Text2UnicodePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Text2Unicode support</title>
        <meta name="" content="Text2Unicode support" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavigationBar />
      <CenterrizedHorizontalGrid>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={12}>
          <Grid item xs={12}>
            <Text2Unicode />
          </Grid>
          <Grid item xs={12}>
            <Footer />
          </Grid>
        </Grid>
      </CenterrizedHorizontalGrid>
    </>
  );
};

export default Text2UnicodePage;
