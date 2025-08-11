import type { NextPage } from "next";
import Head from "next/head";
import Grid from "@mui/material/Grid";

import NavigationBar from "@/components/NavigationBar";
import CenterrizedHorizontalGrid from "@/components/CenterrizedHorizontalGrid";
import Ham from "@/components/Ham";
import ElectronicWork from "@/components/ElectronicWork";
import Footer from "@/components/Footer";

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
          <Grid size={12}>
            <Ham />
          </Grid>
          <Grid size={12}>
            <ElectronicWork />
          </Grid>
          <Grid size={12}>
            <Footer />
          </Grid>
        </Grid>
      </CenterrizedHorizontalGrid>
    </>
  );
};

export default Hobby;
