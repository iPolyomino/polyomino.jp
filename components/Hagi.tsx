import Card from "@mui/material/Card";

import styles from "@/styles/Hagi.module.css";

const Hagi = () => {
  return (
    <Card>
      <svg
        version="1.1"
        id="nameLayer"
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="0"
        viewBox="0 0 1920 1080"
        className={styles.nameLayer}
      >
        <g fill="none" strokeWidth="50">
          <g stroke="#66aedf" className={styles.stroke}>
            <line x1="330.9" y1="127.5" x2="330.9" y2="727.5"></line>
            <line x1="305.9" y1="427.5" x2="630.9" y2="427.5"></line>
            <line x1="630.9" y1="127.5" x2="630.9" y2="727.5"></line>
          </g>
          <g stroke="#dda748">
            <line
              className={styles.stroke}
              x1="1030.9"
              y1="427.5"
              x2="1030.9"
              y2="727.5"
            ></line>
            <circle
              className={styles.reverseStroke}
              cx="905"
              cy="577.5"
              r="125"
            ></circle>
          </g>
          <g stroke="#cd8087" className={styles.reverseStroke}>
            <circle cx="1305" cy="577.5" r="125"></circle>
            <path d="M1180.9,827.5c0,69,56,125,125,125c69,0,125-56,125-125v-400"></path>
          </g>
          <g stroke="#c0cd32">
            <circle
              className={styles.reverseStroke}
              cx="1585"
              cy="332.5"
              r="30"
              strokeWidth="0"
              fill="#c0cd32"
            ></circle>
            <line
              className={styles.stroke}
              x1="1585"
              y1="427.5"
              x2="1585"
              y2="727.5"
            ></line>
          </g>
        </g>
      </svg>
    </Card>
  );
};

export default Hagi;
