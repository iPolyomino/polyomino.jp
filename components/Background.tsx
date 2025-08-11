import React, { useState, useEffect } from "react";

import styles from "@/styles/Background.module.css";

const Background = () => {
  const [colorlist, setColorlist] = useState<string[]>([]);

  useEffect(() => {
    const colors = [
      "#F9DB57",
      "#E6855E",
      "#B75C9D",
      "#9D73BB",
      "#42AAC7",
      "#40BFB0",
    ];

    setColorlist(
      [...Array(100)].map(
        () => colors[Math.floor(Math.random() * colors.length)],
      ),
    );
  }, []);

  return (
    <div className={styles.backGroundSVG}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
        {Array.from(Array(100).keys()).map((n, i) => (
          <rect
            x={(i % 10) * 100}
            y={Math.floor(i / 10) * 100}
            width="100"
            height="100"
            key={n}
            fill={colorlist[i]}
          />
        ))}
      </svg>
    </div>
  );
};

export default Background;
