import React, { useEffect, useState } from "react";
import useEvent from "@react-hook/event";
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
  const DitSvg = (key: number = 0) => (
    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" key={key}>
      <circle cx="10" cy="10" r="8" fill="black" />
    </svg>
  );
  const DahSvg = (key: number = 0) => (
    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" key={key}>
      <line x1="0" y1="10" x2="20" y2="10" stroke="black" strokeWidth="4" />
    </svg>
  );

  const dit = ".";
  const dah = "-";

  const [index, setIndex] = useState(0);
  const [downTime, setDownTime] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [code, setCode] = useState<string>("");
  const [threshold, setThreshold] = useState(150);

  useEvent(window, "keydown", (event: KeyboardEvent) => {
    if (event.key === "Backspace" && isCorrect === null) {
      clearCode();
    }
    if (event.key === "Enter") {
      answer();
    }
    // Space bar
    if (event.key === " " && downTime === null) {
      const now = Date.now();
      setDownTime(now);
    }
  });
  useEvent(window, "keyup", (event: KeyboardEvent) => {
    if (event.key !== " " || isCorrect !== null || downTime === null) {
      return;
    }
    const plessTime = Date.now() - downTime;
    setDownTime(null);
    if (plessTime < threshold) {
      ditClick();
    } else {
      dahClick();
    }
  });

  useEffect(() => {
    // ランダムに選択されたクイズから始める
    setIndex(Math.floor(Math.random() * morse.length));
  }, []);

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
    return code.split("").map((character, i) => {
      if (character === ".") {
        return DitSvg(i);
      } else if (character === "-") {
        return DahSvg(i);
      }
      throw new Error(`The code "${code}" cannot encoded.`);
    });
  };

  const answer = () => {
    if (isCorrect === null) {
      const answerCode = morse[index].code;
      setIsCorrect(code === answerCode);
      setCode(answerCode);
      return;
    }
    clearCode();
    let nextIndex = Math.floor(Math.random() * morse.length);
    // 違うクイズが出るまで問題を選ぶ
    while (nextIndex === index) {
      nextIndex = Math.floor(Math.random() * morse.length);
    }
    setIndex(nextIndex);
  };

  return (
    <ContentsCard>
      <CenterrizedHorizontalGrid>
        <Typography variant="h4">{morse[index].letter}</Typography>
        <p>{morse[index].phonetic}</p>
        <Grid container spacing={1} className={color()}>
          <Grid item xs={9}>
            <Box className={styles.code_box}>
              <span className={styles.code}>{encode(code)}</span>
            </Box>
          </Grid>
          <Grid item xs={3} my={3}>
            <Button
              onClick={clearCode}
              color="error"
              disabled={isCorrect !== null}
            >
              <span className={styles.reset}>HH</span>
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
            <span className={styles.code_button}>{DitSvg()}</span>
          </Button>
          <Button
            size="large"
            variant="outlined"
            onClick={dahClick}
            disabled={isCorrect !== null}
          >
            <span className={styles.code_button}>{DahSvg()}</span>
          </Button>
          <div className={styles.spacer}></div>
          <Box
            className={styles.code_result}
            sx={{ display: { xs: "none", sm: "flex" } }}
          >
            {isCorrect === null ? "" : isCorrect ? "正解" : "不正解"}
          </Box>
          <Button size="large" variant="contained" onClick={answer}>
            OK
          </Button>
        </Box>
        <Box
          className={styles.code_result}
          sx={{ display: { xs: "block", sm: "none" } }}
        >
          {isCorrect === null ? "" : isCorrect ? "正解" : "不正解"}
        </Box>
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
      </CenterrizedHorizontalGrid>
    </ContentsCard>
  );
};

export default MorseCodeQuiz;
