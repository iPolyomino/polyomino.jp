import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Switch from "@mui/material/Switch";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

type Candidate = number[][];

const HitAndBlowResult = ({ candidate, recommend }: { candidate: Candidate, recommend: number[] | undefined }) => {

  const threshold = 1000;
  const [displayall, setDisplayall] = useState<boolean>(false);

  const toggleSwitch = () => {
    setDisplayall(!displayall)
  }

  return (
    <>
      <Typography variant="h5" sx={{ my: 1 }}>Candidate</Typography>
      <Grid container spacing={{ xs: 2 }} columns={12}>
        {candidate.map((value, i) => {
          if (!displayall && i > threshold) return;
          return (
            <Grid item key={value.join('')} sx={{ fontWeight: value === recommend ? 'bold' : 'normal' }}>
              {value}
            </Grid>
          );
        })}
      </Grid>
      {candidate.length > threshold &&
        <FormGroup>
          <FormControlLabel control={
            <Switch checked={displayall} onChange={toggleSwitch} />} label="display all" />
        </FormGroup>
      }
      <Typography>total candidates: {candidate.length}</Typography>
    </>
  )
}

export default HitAndBlowResult;
