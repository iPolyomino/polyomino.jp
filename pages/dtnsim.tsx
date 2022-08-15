import React, { useRef, useState, useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import NavigationBar from "../components/NavigationBar";
import DTN from "../components/DTN";
import ContentsCard from "../components/ContentsCard";
import CenterrizedHorizontalGrid from "../components/CenterrizedHorizontalGrid";

import { GraphSettings } from "../types/GraphSettings";

const DtnSimulator: NextPage = () => {
  const defaultSettings = { node: 20, agent: 10, range: 40 };
  const [node, setNode] = useState(defaultSettings.node);
  const [agent, setAgent] = useState(defaultSettings.agent);
  const [range, setRange] = useState(defaultSettings.range);
  const [graph, setGraph] = useState<GraphSettings>(defaultSettings);

  const dtnRef = useRef<any>();

  useEffect(() => {
    dtnRef.current?.initMain();
  }, [graph]);

  const applySettings = () => {
    setGraph({
      node,
      agent,
      range,
    });
  };

  return (
    <>
      <Head>
        <title>DTN simulator</title>
        <meta name="description" content="DTN simulator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavigationBar />
      <CenterrizedHorizontalGrid>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={12}>
          <Grid item xs={12} md={8}>
            <DTN settings={graph} ref={dtnRef} />
          </Grid>
          <Grid item xs={12} md={4}>
            <ContentsCard>
              <TextField
                label="node"
                type="number"
                margin="normal"
                fullWidth
                value={node}
                onChange={(e) => setNode(parseInt(e.target.value))}
              />
              <TextField
                label="agent"
                type="number"
                margin="normal"
                fullWidth
                value={agent}
                onChange={(e) => setAgent(parseInt(e.target.value))}
              />
              <TextField
                label="range"
                type="number"
                margin="normal"
                fullWidth
                value={range}
                onChange={(e) => setRange(parseInt(e.target.value))}
              />
              <Typography align="right">
                <Button onClick={applySettings}>Apply</Button>
              </Typography>
            </ContentsCard>
          </Grid>
        </Grid>
      </CenterrizedHorizontalGrid>
    </>
  );
};

export default DtnSimulator;
