import type { NextPage } from "next";
import Head from "next/head";
import Grid from "@mui/material/Grid";

import NavigationBar from "@/components/NavigationBar";
import CenterrizedHorizontalGrid from "@/components/CenterrizedHorizontalGrid";
import ChronicaUsage from "@/components/ChronicaUsage";
import Footer from "@/components/Footer";

const ChronicaPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Chronica support</title>
        <meta name="" content="Rhythmorse support" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavigationBar />
      <CenterrizedHorizontalGrid>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={12}>
          <Grid size={12}>
            <ChronicaUsage />
          </Grid>
          <Grid size={12}>
            <Footer />
          </Grid>
        </Grid>
      </CenterrizedHorizontalGrid>
    </>
  );
};

export default ChronicaPage;
