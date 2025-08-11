import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import { DitSvg, DahSvg } from "@/components/MorseSvg";
import styles from "@/styles/MorseCodeQuiz.module.css";

import { default as morse } from "@/contents/morse.json";

interface Props {
  isCorrect: boolean | null;
  index: number;
  code: string;
  clearCode: () => void;
}

const MorseCodeQuizMain = ({ isCorrect, index, code, clearCode }: Props) => {
  const color = () => {
    if (isCorrect === null) return styles.answer;
    return isCorrect ? styles.blue : styles.red;
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

  return (
    <>
      <Typography variant="h4">{morse[index].letter}</Typography>
      <p>{morse[index].phonetic}</p>
      <Grid container spacing={1} className={color()}>
        <Grid size={9}>
          <Box className={styles.code_box}>
            <span className={styles.code}>{encode(code)}</span>
          </Box>
        </Grid>
        <Grid size={3} my={3}>
          <Button
            onClick={clearCode}
            color="error"
            disabled={isCorrect !== null}
          >
            <span className={styles.reset}>HH</span>
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default MorseCodeQuizMain;
