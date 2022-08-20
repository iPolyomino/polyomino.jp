import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import ContentsCard from "./ContentsCard";
import CenterrizedHorizontalGrid from "../components/CenterrizedHorizontalGrid";
import styles from "../styles/MorseCodeQuiz.module.css";

import { default as morse } from "../contents/morse.json";

const MorseCodeQuiz = () => {
  const dit =
    '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="8" fill="black" /></svg>';
  const dah =
    '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><line x1="0" y1="10" x2="20" y2="10" stroke="black" stroke-width="4"/></svg>';

  const [index, setIndex] = useState(0);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [code, setCode] = useState("");
  const [threshold, setThreshold] = useState(150);

  const color = () => {
    if (isCorrect === null) return styles.answer;

    return isCorrect ? styles.blue : styles.red;
  };

  const clearCode = () => {
    setIsCorrect(null);
    setCode("");
  };

  const ditClick = () => {
    setCode(code + dit);
  };

  const dahClick = () => {
    setCode(code + dah);
  };

  const encode = (code: string) => {
    return code.replace(/\./g, dit).replace(/-/g, dah);
  };

  const answer = () => {
    if (isCorrect === null) {
      const encodeMorse = encode(morse[index].code);
      setIsCorrect(code === encodeMorse);
      setCode(encodeMorse);
      return;
    }
    clearCode();
    setIndex(Math.floor(Math.random() * morse.length));
  };

  return (
    <ContentsCard>
      <CenterrizedHorizontalGrid>
        <Typography variant="h4">{morse[index].letter}</Typography>
        <p>{morse[index].phonetic}</p>
        <Grid container spacing={1} className={color()}>
          <Grid item xs={9}>
            <Box className={styles.code_box}>
              <span
                dangerouslySetInnerHTML={{ __html: code }}
                className={styles.code}
              ></span>
            </Box>
          </Grid>
          <Grid item xs={3} my={3}>
            <Button
              onClick={clearCode}
              color="error"
              disabled={isCorrect !== null}
            >
              HH
            </Button>
          </Grid>
        </Grid>
        <Box className={styles.button_box}>
          <Button
            size="large"
            variant="outlined"
            onClick={ditClick}
            disabled={isCorrect !== null}
          >
            <span
              dangerouslySetInnerHTML={{ __html: dit }}
              className={styles.code_button}
            ></span>
          </Button>
          <Button
            size="large"
            variant="outlined"
            onClick={dahClick}
            disabled={isCorrect !== null}
          >
            <span
              dangerouslySetInnerHTML={{ __html: dah }}
              className={styles.code_button}
            ></span>
          </Button>
          <div className={styles.spacer}></div>
          <div className={styles.code_result}>
            {isCorrect === null ? "" : isCorrect ? "正解" : "不正解"}
          </div>
          <Button size="large" variant="contained" onClick={answer}>
            OK
          </Button>
        </Box>
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
      </CenterrizedHorizontalGrid>
    </ContentsCard>
  );
};

export default MorseCodeQuiz;
