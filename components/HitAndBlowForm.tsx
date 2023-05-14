import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { History } from "@/types/HitAndBlow";

const HitAndBlowForm = ({ digit, addHistory }: {
  digit: number,
  addHistory: (history: History) => void,
}) => {
  const [askednumber, setAskednumber] = useState<string>("");
  const [hit, setHit] = useState<string>("");
  const [blow, setBlow] = useState<string>("");

  const handleApply = () => {
    const asknum = askednumber.split("").map((e) => parseInt(e));
    const hitnum = parseInt(hit) || 0;
    const blownum = parseInt(blow) || 0;

    if (hitnum + blownum > digit) return;
    if (askednumber.length !== digit) return;

    const newHistory: History = {
      ask: asknum,
      hit: hitnum,
      blow: blownum,
    };

    addHistory(newHistory)

    setAskednumber("")
    setHit("")
    setBlow("")
  }

  return (
    <>
      <Typography variant="h5" sx={{ my: 1 }}>Question Result</Typography>
      <Grid container spacing={{ xs: 3 }}>
        <Grid item>
          <TextField label="number" value={askednumber} onChange={e => setAskednumber(e.target.value)} />
        </Grid>
        <Grid item>
          <TextField label="hit" value={hit} onChange={e => setHit(e.target.value)} />
        </Grid>
        <Grid item>
          <TextField label="blow" value={blow} onChange={e => setBlow(e.target.value)} />
        </Grid>
        <Grid item my={1}>
          <Button variant="contained" onClick={handleApply}>Apply</Button>
        </Grid>
      </Grid>
    </>
  )
}

export default HitAndBlowForm;
