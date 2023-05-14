import React from "react";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Typography from "@mui/material/Typography";

import styled from "@emotion/styled";

const ButtonItem = styled.span`
  font-size: 1.5rem;
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

const HitAndBlowDigitsSelector = ({ digit, handleNumberLength }: { digit: number, handleNumberLength: (_: React.MouseEvent<HTMLElement>, newNumberLength: number) => void }) => {
  return (
    <>
      <Typography variant="h5" sx={{ my: 1 }}>digits</Typography>
      <ToggleButtonGroup
        value={digit}
        exclusive
        onChange={handleNumberLength}
      >
        <ToggleButton value={3}>
          <ButtonItem>3</ButtonItem>
        </ToggleButton>
        <ToggleButton value={4}>
          <ButtonItem>4</ButtonItem>
        </ToggleButton>
        <ToggleButton value={5}>
          <ButtonItem>5</ButtonItem>
        </ToggleButton>
      </ToggleButtonGroup>
    </>
  )
}

export default HitAndBlowDigitsSelector;
