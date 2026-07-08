import React, { useState, useEffect, useMemo } from "react";
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

import {
  HitCounter,
  BlowCounter,
  InitializeAnswer,
} from "@/lib/hitandblow/general";
import { History } from "@/types/HitAndBlow";

type RecommendResult = {
  recommend: number[];
  max: number;
  hitblow: Record<string, number>;
};

const MAX_CANDIDATES_FOR_RECOMMEND = 1000;
const MAX_FULL_SEARCH_PAIRS = 6_000_000;

const codeKey = (code: number[]) => code.join("");

const compareCode = (left: number[], right: number[]) =>
  codeKey(left).localeCompare(codeKey(right));

const countHitBlow = (secret: number[], guess: number[]) => {
  const hit = HitCounter(secret, guess);
  const blow = BlowCounter(secret, guess);
  return { hit, blow };
};

const selectGreedyMinimaxRecommend = (
  candidates: number[][],
  allGuesses: number[][],
): RecommendResult | undefined => {
  if (
    candidates.length === 0 ||
    candidates.length >= MAX_CANDIDATES_FOR_RECOMMEND
  ) {
    return undefined;
  }
  if (candidates.length === 1) {
    return { recommend: candidates[0], max: 1, hitblow: {} };
  }

  const guesses =
    candidates.length * allGuesses.length <= MAX_FULL_SEARCH_PAIRS
      ? allGuesses
      : candidates;

  let best: RecommendResult | undefined;
  let bestSumSquares = Number.POSITIVE_INFINITY;
  let bestBranchCount = 0;

  for (const guess of guesses) {
    const hitblow: Record<string, number> = {};
    let maxBranchSize = 0;
    let sumSquares = 0;
    let pruned = false;

    for (let i = 0; i < candidates.length; i++) {
      const candidate = candidates[i];
      const { hit, blow } = countHitBlow(candidate, guess);
      const key = `${hit}hit${blow}blow`;
      const nextBranchSize = (hitblow[key] ?? 0) + 1;
      hitblow[key] = nextBranchSize;
      maxBranchSize = Math.max(maxBranchSize, nextBranchSize);
      sumSquares += nextBranchSize * nextBranchSize - (nextBranchSize - 1) ** 2;

      if (
        best !== undefined &&
        (maxBranchSize > best.max ||
          (maxBranchSize === best.max &&
            sumSquares >= bestSumSquares &&
            i < candidates.length - 1))
      ) {
        pruned = true;
        break;
      }
    }

    if (pruned) continue;

    const branchSizes = Object.values(hitblow);
    if (branchSizes.length <= 1) continue;

    const max = maxBranchSize;
    const branchCount = branchSizes.length;

    if (
      best === undefined ||
      max < best.max ||
      (max === best.max && sumSquares < bestSumSquares) ||
      (max === best.max &&
        sumSquares === bestSumSquares &&
        branchCount > bestBranchCount) ||
      (max === best.max &&
        sumSquares === bestSumSquares &&
        branchCount === bestBranchCount &&
        compareCode(guess, best.recommend) < 0)
    ) {
      best = { recommend: guess, max, hitblow };
      bestSumSquares = sumSquares;
      bestBranchCount = branchCount;
    }
  }

  return best;
};

const Solver: NextPage = () => {
  const [digit, setDigit] = useState<number>(3);
  const allGuesses = useMemo(() => InitializeAnswer(digit), [digit]);
  const [history, setHistory] = useState<History[]>([]);
  const [candidate, setCandidate] = useState<number[][]>(allGuesses);
  const [message, setMessage] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    setCandidate(allGuesses);
  }, [allGuesses]);

  const recommend = useMemo(
    () => selectGreedyMinimaxRecommend(candidate, allGuesses)?.recommend,
    [candidate, allGuesses],
  );

  const handleNumberLength = (
    _: React.MouseEvent<HTMLElement>,
    newNumberLength: number,
  ) => {
    if (newNumberLength === null) return;
    if (history.length !== 0) {
      setMessage(
        "Cannot change during the game. Please reload and reset before changing.",
      );
      setOpen(true);
      return;
    }
    setDigit(newNumberLength);
  };

  const addHistory = (newHistory: History) => {
    setCandidate(
      candidate.filter((cand) => {
        const { hit, blow } = countHitBlow(cand, newHistory.ask);
        return hit === newHistory.hit && blow === newHistory.blow;
      }),
    );
    setHistory([...history, newHistory]);
  };

  return (
    <>
      <Head>
        <title>Hit and Blow solver</title>
        <meta
          name="description"
          content="Hit&Blow solver, This website solve hit and blow. 10 different numbers correspond to 3 to 5 digit games."
        />
        <meta name="keywords" content="Hit&Blow, ヒットアンドブロー" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavigationBar />
      <CenterrizedHorizontalGrid>
        <ContentsCard>
          <Grid container spacing={{ xs: 3 }} columns={12}>
            <Grid size={12}>
              <HitAndBlowDigitsSelector
                digit={digit}
                handleNumberLength={handleNumberLength}
              />
            </Grid>
            <Grid size={12}>
              <HitAndBlowAskTable history={history} />
            </Grid>
            <Grid size={12}>
              <HitAndBlowForm digit={digit} addHistory={addHistory} />
            </Grid>
            <Grid size={12}>
              <HitAndBlowResult candidate={candidate} recommend={recommend} />
            </Grid>
          </Grid>
        </ContentsCard>
      </CenterrizedHorizontalGrid>
      <MessageDialog
        message={message}
        isOpen={open}
        handleClose={() => setOpen(false)}
      />
    </>
  );
};

export default Solver;
