import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import Paper from '@mui/material/Paper';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import NavigationBar from "@/components/NavigationBar";
import ContentsCard from "@/components/ContentsCard";
import CenterrizedHorizontalGrid from "@/components/CenterrizedHorizontalGrid";

import { HitCounter, BlowCounter, Answer } from "@/lib/hitandblow/general";

const Solver: NextPage = () => {

  interface History {
    ask: number[];
    hit: number;
    blow: number;
  }

  const [numberlength, setNumberlength] = useState<number>(3);
  const [history, setHistory] = useState<History[]>([]);
  const [askednumber, setAskednumber] = useState<string>("");
  const [hit, setHit] = useState<string>("");
  const [blow, setBlow] = useState<string>("");
  const [candidate, setCandidate] = useState<number[][]>(Answer(numberlength))
  const [displayall, setDisplayall] = useState<boolean>(false);

  useEffect(() => {
    setCandidate(Answer(numberlength));
  }, [numberlength]);

  const handleNumberLength = (
    _: React.MouseEvent<HTMLElement>,
    newNumberLength: number,
  ) => {
    setNumberlength(newNumberLength);
  };
  const toggleSwitch = () => {
    setDisplayall(!displayall)
  }

  const handleApply = () => {
    const asknum = askednumber.split("").map((e) => parseInt(e));
    const hitnum = parseInt(hit) || 0;
    const blownum = parseInt(blow) || 0;

    if (hitnum + blownum > numberlength) return;
    if (askednumber.length !== numberlength) return;

    const hist: History = {
      ask: asknum,
      hit: hitnum,
      blow: blownum,
    }
    setCandidate(candidate
      .filter((ans) => HitCounter(ans, asknum) === hitnum)
      .filter((ans) => BlowCounter(ans, asknum) === blownum));

    setHistory([...history, hist]);
    setAskednumber("")
    setHit("")
    setBlow("")
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
              <ToggleButtonGroup
                value={numberlength}
                exclusive
                onChange={handleNumberLength}
              >
                <ToggleButton value={3}>
                  3
                </ToggleButton>
                <ToggleButton value={4}>
                  4
                </ToggleButton>
                <ToggleButton value={5}>
                  5
                </ToggleButton>
              </ToggleButtonGroup>
              <TableContainer component={Paper}>
                <Table>
                  <TableBody>
                    {history.map((h) => (
                      <TableRow key={h.ask.join('')}>
                        <TableCell>
                          {h.ask.join('')}
                        </TableCell>
                        <TableCell>
                          {h.hit} hit
                        </TableCell>
                        <TableCell>
                          {h.blow} blow
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <div>
                <TextField label="number" value={askednumber} onChange={e => setAskednumber(e.target.value)} />
                <TextField label="hit" value={hit} onChange={e => setHit(e.target.value)} />
                <TextField label="blow" value={blow} onChange={e => setBlow(e.target.value)} />
                <Button variant="contained" onClick={handleApply}>Apply</Button>
              </div>
              <Grid container spacing={{ xs: 2 }} columns={12}>
                {candidate.map((value, i) => {
                  if (!displayall && i > 1000) return;
                  return (
                    <Grid item key={value.join('')}>
                      {value}
                    </Grid>
                  );
                })
                }
              </Grid>
              <FormGroup>
                <FormControlLabel control={
                  <Switch checked={displayall} onChange={toggleSwitch} />} label="display all" />
              </FormGroup>
            </ContentsCard>
          </Grid>
        </Grid>
      </CenterrizedHorizontalGrid>
    </>
  );
};

export default Solver;
