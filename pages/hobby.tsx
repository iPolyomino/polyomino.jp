import type { NextPage } from "next";
import Head from "next/head";
import Grid from "@mui/material/Grid";

import NavigationBar from "../components/NavigationBar";
import CenterrizedHorizontalGrid from "../components/CenterrizedHorizontalGrid";
import Ham from "../components/Ham";
import Footer from "../components/Footer";

const Hobby: NextPage = () => {
  return (
    <>
      <Head>
        <title>Hobby</title>
        <meta name="description" content="Hagi's portfolio website." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavigationBar />
      <CenterrizedHorizontalGrid>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={12}>
          <Grid item xs={12}>
            <Ham />
          </Grid>
          <Grid item xs={12}>
            <Footer />
          </Grid>
        </Grid>
      </CenterrizedHorizontalGrid>
    </>
  );
};

export default Hobby;
