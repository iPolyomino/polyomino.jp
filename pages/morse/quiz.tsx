import type { NextPage } from "next";
import Head from "next/head";
import Grid from "@mui/material/Grid";
import NoSsr from "@mui/material/NoSsr";

import NavigationBar from "@/components/NavigationBar";
import CenterrizedHorizontalGrid from "@/components/CenterrizedHorizontalGrid";
import MorseCodeQuiez from "@/components/MorseCodeQuiz";

const Quiz: NextPage = () => {
  return (
    <>
      <Head>
        <title>Morse code quiz</title>
        <meta name="description" content="Morse code quiz" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavigationBar />
      <CenterrizedHorizontalGrid>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={12}>
          <Grid size={12}>
            <NoSsr>
              <MorseCodeQuiez />
            </NoSsr>
          </Grid>
        </Grid>
      </CenterrizedHorizontalGrid>
    </>
  );
};

export default Quiz;
