import React, { useEffect, useState } from "react";
import useEvent from "@react-hook/event";

import ContentsCard from "@/components/ContentsCard";
import CenterrizedHorizontalGrid from "@/components/CenterrizedHorizontalGrid";
import MorseCodeQuizMain from "@/components/MorseCodeQuizMain";
import MorseCodeQuizControl from "@/components/MorseCodeQuizControl";
import MorseCodeQuizNavigation from "@/components/MorseCodeQuizNavigation";

import { default as morse } from "@/contents/morse.json";

const MorseCodeQuiz = () => {
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

  useEffect(() => {
    if (isHH(code)) {
      clearCode();
    }
  }, [code]);

  const isHH = (code: string) => {
    return code.slice(-8) === ".".repeat(8);
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

  const answer = () => {
    // 正誤判定
    if (isCorrect === null) {
      const answerCode = morse[index].code;
      setIsCorrect(code === answerCode);
      setCode(answerCode);
      return;
    }

    // 新しい問題を出す。
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
        <MorseCodeQuizMain
          isCorrect={isCorrect}
          index={index}
          code={code}
          clearCode={clearCode}
        />
        <MorseCodeQuizControl
          isCorrect={isCorrect}
          ditClick={ditClick}
          dahClick={dahClick}
          answer={answer}
        />
        <MorseCodeQuizNavigation
          threshold={threshold}
          setThreshold={setThreshold}
        />
      </CenterrizedHorizontalGrid>
    </ContentsCard>
  );
};

export default MorseCodeQuiz;
