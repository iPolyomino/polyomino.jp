import type { NextPage } from "next";
import Head from "next/head";
import Grid from "@mui/material/Grid";

import NavigationBar from "../components/NavigationBar";
import CenterrizedHorizontalGrid from "../components/CenterrizedHorizontalGrid";
import Footer from "../components/Footer";

const Blog: NextPage = () => {
  return (
    <>
      <Head>
        <title>Hagi - Blog</title>
        <meta name="description" content="Hagi's portfolio website." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavigationBar />
      <CenterrizedHorizontalGrid>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={12}>
          <Grid item xs={12}>
            <Footer />
          </Grid>
        </Grid>
      </CenterrizedHorizontalGrid>
    </>
  );
};

export default Blog;
