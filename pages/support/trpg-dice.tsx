import type { NextPage } from "next";
import Head from "next/head";
import Grid from "@mui/material/Grid";

import NavigationBar from "../../components/NavigationBar";
import CenterrizedHorizontalGrid from "../../components/CenterrizedHorizontalGrid";
import TRPG from "../../components/TRPG";
import Footer from "../../components/Footer";

const TrpgDice: NextPage = () => {
  return (
    <>
      <Head>
        <title>TRPG DICE support</title>
        <meta name="" content="TRPG DICE support" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavigationBar />
      <CenterrizedHorizontalGrid>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={12}>
          <Grid item xs={12}>
            <TRPG />
          </Grid>
          <Grid item xs={12}>
            <Footer />
          </Grid>
        </Grid>
      </CenterrizedHorizontalGrid>
    </>
  );
};

export default TrpgDice;
