import type { NextPage } from "next";
import Head from "next/head";
import Grid from "@mui/material/Grid";

import Hagi from "../components/Hagi";
import CenterrizedHorizontalGrid from "../components/CenterrizedHorizontalGrid";
import Footer from "../components/Footer";

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
        <Grid item>
          <Footer />
        </Grid>
      </CenterrizedHorizontalGrid>
    </>
  );
};

export default Home;
