import React, { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Grid from "@mui/material/Grid";
import NavigationBar from "@/components/NavigationBar";
import ContentsCard from "@/components/ContentsCard";
import CenterrizedHorizontalGrid from "@/components/CenterrizedHorizontalGrid";
import HitAndBlowAskTable from "@/components/HitAndBlowAskTable";
import HitAndBlowForm from "@/components/HitAndBlowForm";
import HitAndBlowResult from "@/components/HitAndBlowResult";

import { HitCounter, BlowCounter, InitializeAnswer } from "@/lib/hitandblow/general";
import { History } from "@/types/HitAndBlow";

import styled from "@emotion/styled";

const NumberColorSample = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  clip-path: circle(50px);
  font-size: 3rem;
  color: white
`

const Solver: NextPage = () => {
  const digit = 4;
  const [history, setHistory] = useState<History[]>([]);
  const [candidate, setCandidate] = useState<number[][]>(InitializeAnswer(digit, 6));

  const addHistory = (newHistory: History) => {
    setCandidate(candidate
      .filter((cand) => HitCounter(cand, newHistory.ask) === newHistory.hit)
      .filter((cand) => BlowCounter(cand, newHistory.ask) === newHistory.blow));
    setHistory([...history, newHistory]);
  }

  return (
    <>
      <Head>
        <title>Hit and Blow solver</title>
        <meta name="description" content="DTN simulator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavigationBar />
      <CenterrizedHorizontalGrid>
        <ContentsCard>
          <Grid container spacing={{ xs: 1 }} columns={12}>
            <Grid item xs={2} >
              <NumberColorSample style={{ backgroundColor: "blue" }}>0</NumberColorSample>
            </Grid>
            <Grid item xs={2} >
              <NumberColorSample style={{ backgroundColor: "red" }}>1</NumberColorSample>
            </Grid>
            <Grid item xs={2} >
              <NumberColorSample style={{ backgroundColor: "green" }}>2</NumberColorSample>
            </Grid>
            <Grid item xs={2} >
              <NumberColorSample style={{ backgroundColor: "yellow", color: "black" }}>3</NumberColorSample>
            </Grid>
            <Grid item xs={2} >
              <NumberColorSample style={{ backgroundColor: "purple" }}>4</NumberColorSample>
            </Grid>
            <Grid item xs={2} >
              <NumberColorSample style={{ backgroundColor: "gray" }}>5</NumberColorSample>
            </Grid>
          </Grid>
          <Grid container spacing={{ xs: 3 }} columns={12}>
            <Grid item xs={12}>
              <HitAndBlowAskTable history={history} />
            </Grid>
            <Grid item xs={12}>
              <HitAndBlowForm digit={digit} addHistory={addHistory} />
            </Grid>
            <Grid item xs={12}>
              <HitAndBlowResult candidate={candidate} />
            </Grid>
          </Grid>
        </ContentsCard>
      </CenterrizedHorizontalGrid>
    </>
  );
};

export default Solver;
