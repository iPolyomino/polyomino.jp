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
import MessageDialog from "@/components/MessageDialog";

import { HitCounter, BlowCounter, InitializeAnswer } from "@/lib/hitandblow/general";
import { History } from "@/types/HitAndBlow";

const Solver: NextPage = () => {
  const [digit, setDigit] = useState<number>(3);
  const [history, setHistory] = useState<History[]>([]);
  const [candidate, setCandidate] = useState<number[][]>(InitializeAnswer(digit));
  const [message, setMessage] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    setCandidate(InitializeAnswer(digit));
  }, [digit]);

  const handleNumberLength = (
    _: React.MouseEvent<HTMLElement>,
    newNumberLength: number,
  ) => {
    if (newNumberLength === null) return;
    if (history.length !== 0) {
      setMessage("Cannot change during the game. Please reload and reset before changing.");
      setOpen(true);
      return;
    }
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
        <ContentsCard>
          <Grid container spacing={{ xs: 3 }} columns={12}>
            <Grid item xs={12}>
              <HitAndBlowDigitsSelector digit={digit} handleNumberLength={handleNumberLength} />
            </Grid>
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
      <MessageDialog message={message} isOpen={open} handleClose={() => setOpen(false)} />
    </>
  );
};

export default Solver;
