import React, { useState, useMemo } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Grid from "@mui/material/Grid";
import NavigationBar from "@/components/NavigationBar";
import ContentsCard from "@/components/ContentsCard";
import CenterrizedHorizontalGrid from "@/components/CenterrizedHorizontalGrid";
import HitAndBlowAskTable from "@/components/HitAndBlowAskTable";
import HitAndBlowForm from "@/components/HitAndBlowForm";
import HitAndBlowResult from "@/components/HitAndBlowResult";

import {
  HitCounter,
  BlowCounterWithDuplicates,
  InitializeAnswerWithDuplicates,
} from "@/lib/hitandblow/general";
import { History } from "@/types/HitAndBlow";

import styled from "@emotion/styled";

type RecommendResult = {
  recommend: number[];
  max: number;
  hitblow: Record<string, number>;
};

const MAX_CANDIDATES_FOR_RECOMMEND = 2000;
const MAX_FULL_SEARCH_PAIRS = 6_000_000;

const codeKey = (code: number[]) => code.join("");

const compareCode = (left: number[], right: number[]) =>
  codeKey(left).localeCompare(codeKey(right));

const countHitBlow = (secret: number[], guess: number[]) => {
  const hit = HitCounter(secret, guess);
  const blow = BlowCounterWithDuplicates(secret, guess);
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

    for (const candidate of candidates) {
      const { hit, blow } = countHitBlow(candidate, guess);
      const key = `${hit}hit${blow}blow`;
      hitblow[key] = (hitblow[key] ?? 0) + 1;
    }

    const branchSizes = Object.values(hitblow);
    if (branchSizes.length <= 1) continue;

    const max = Math.max(...branchSizes);
    const sumSquares = branchSizes.reduce((sum, size) => sum + size * size, 0);
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

const NumberColorSample = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  clip-path: circle(2rem);
  font-size: 3rem;
  color: white;
`;

const Solver: NextPage = () => {
  const digit = 4;
  const allGuesses = useMemo(
    () => InitializeAnswerWithDuplicates(digit, 6),
    [digit],
  );
  const [history, setHistory] = useState<History[]>([]);
  const [candidate, setCandidate] = useState<number[][]>(allGuesses);

  const addHistory = (newHistory: History) => {
    setCandidate(
      candidate
        .filter((cand) => HitCounter(cand, newHistory.ask) === newHistory.hit)
        .filter(
          (cand) =>
            BlowCounterWithDuplicates(cand, newHistory.ask) === newHistory.blow,
        ),
    );
    setHistory([...history, newHistory]);
  };

  const recommend = useMemo(
    () => selectGreedyMinimaxRecommend(candidate, allGuesses)?.recommend,
    [candidate, allGuesses],
  );

  return (
    <>
      <Head>
        <title>Hit and Blow solver</title>
        <meta
          name="description"
          content="Hit&Blow solver, This website solve hit and blow. 6 different numbers correspond to 4 digit games. This game is popularly known as Mastermind."
        />
        <meta
          name="keywords"
          content="Hit&Blow, ヒットアンドブロー, Mastermind, マスターマインド, アソビ大全"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavigationBar />
      <CenterrizedHorizontalGrid>
        <ContentsCard>
          <Grid container spacing={{ xs: 1 }} columns={12}>
            <Grid size={2}>
              <NumberColorSample style={{ backgroundColor: "blue" }}>
                0
              </NumberColorSample>
            </Grid>
            <Grid size={2}>
              <NumberColorSample style={{ backgroundColor: "red" }}>
                1
              </NumberColorSample>
            </Grid>
            <Grid size={2}>
              <NumberColorSample style={{ backgroundColor: "green" }}>
                2
              </NumberColorSample>
            </Grid>
            <Grid size={2}>
              <NumberColorSample
                style={{ backgroundColor: "yellow", color: "black" }}
              >
                3
              </NumberColorSample>
            </Grid>
            <Grid size={2}>
              <NumberColorSample style={{ backgroundColor: "purple" }}>
                4
              </NumberColorSample>
            </Grid>
            <Grid size={2}>
              <NumberColorSample style={{ backgroundColor: "gray" }}>
                5
              </NumberColorSample>
            </Grid>
          </Grid>
          <Grid container spacing={{ xs: 3 }} columns={12}>
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
    </>
  );
};

export default Solver;
