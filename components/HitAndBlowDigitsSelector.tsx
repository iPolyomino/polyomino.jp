import React from "react";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const HitAndBlowDigitsSelector = ({ numberlength, handleNumberLength }: { numberlength: number, handleNumberLength: (_: React.MouseEvent<HTMLElement>, newNumberLength: number) => void }) => {
  return (
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
  )
}

export default HitAndBlowDigitsSelector;
