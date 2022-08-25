import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import { DitSvg, DahSvg } from "@/components/MorseSvg";
import styles from "@/styles/MorseCodeQuiz.module.css";

interface Props {
  isCorrect: boolean | null;
  ditClick: () => void;
  dahClick: () => void;
  answer: () => void;
}

const MorseCodeQuizControl = (props: Props) => {
  const { isCorrect, ditClick, dahClick, answer } = props;

  return (
    <>
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
    </>
  );
};

export default MorseCodeQuizControl;
