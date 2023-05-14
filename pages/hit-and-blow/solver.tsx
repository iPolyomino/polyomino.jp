import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Grid from "@mui/material/Grid";

import NavigationBar from "@/components/NavigationBar";
import ContentsCard from "@/components/ContentsCard";
import CenterrizedHorizontalGrid from "@/components/CenterrizedHorizontalGrid";
import HitAndBlowDigitsSelector from "@/components/HitAndBlowDigitsSelector";
import HitAndBlowAskTable from "@/components/HitAndBlowAskTable";
import HitAndBlowForm from "@/components/HitAndBlowForm";
import HitAndBlowResult from "@/components/HitAndBlowResult";

import { HitCounter, BlowCounter, InitializeAnswer } from "@/lib/hitandblow/general";
import { History } from "@/types/HitAndBlow";

const Solver: NextPage = () => {
  const [digit, setDigit] = useState<number>(3);
  const [history, setHistory] = useState<History[]>([]);
  const [candidate, setCandidate] = useState<number[][]>(InitializeAnswer(digit));

  useEffect(() => {
    setCandidate(InitializeAnswer(digit));
  }, [digit]);

  const handleNumberLength = (
    _: React.MouseEvent<HTMLElement>,
    newNumberLength: number,
  ) => {
    setDigit(newNumberLength);
  };

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
        <Grid container spacing={{ xs: 2, md: 3 }} columns={12}>
          <Grid item xs={12}>
            <ContentsCard>
              <HitAndBlowDigitsSelector digit={digit} handleNumberLength={handleNumberLength} />
              <HitAndBlowAskTable history={history} />
              <HitAndBlowForm digit={digit} addHistory={addHistory} />
              <HitAndBlowResult candidate={candidate} />
            </ContentsCard>
          </Grid>
        </Grid>
      </CenterrizedHorizontalGrid>
    </>
  );
};

export default Solver;
