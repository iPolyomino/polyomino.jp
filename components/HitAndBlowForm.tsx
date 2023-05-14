import React, { useState } from "react";
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
    <div>
      <TextField label="number" value={askednumber} onChange={e => setAskednumber(e.target.value)} />
      <TextField label="hit" value={hit} onChange={e => setHit(e.target.value)} />
      <TextField label="blow" value={blow} onChange={e => setBlow(e.target.value)} />
      <Button variant="contained" onClick={handleApply}>Apply</Button>
    </div>
  )
}

export default HitAndBlowForm;
