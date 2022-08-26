import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

interface Props {
  threshold: number;
  setThreshold: React.Dispatch<React.SetStateAction<number>>;
}

const MorseCodeQuizNavigation = ({ threshold, setThreshold }: Props) => {
  return (
    <Box sx={{ display: { xs: "none", sm: "block" } }}>
      <p>
        <kbd>Space</kbd> キーでモールス信号を入力することができます。
      </p>
      <p>
        <kbd>Enter</kbd> キーで入力終了
      </p>
      <p>
        <kbd>Backspace</kbd> キーで入力削除
      </p>
      <TextField
        label="threshold [ms]"
        type="number"
        margin="normal"
        fullWidth
        value={threshold}
        onChange={(e) => setThreshold(+e.target.value)}
      />
    </Box>
  );
};

export default MorseCodeQuizNavigation;
