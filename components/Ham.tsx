import Link from "next/link";

import ContentsCard from "./ContentsCard";

const Ham = () => {
  return (
    <ContentsCard>
      <h1>Amateur Radio</h1>
      <p>My call sign: JQ3CJL</p>
      <hr />
      <h2>Information</h2>
      <h3>Licence</h3>
      <p>Amateur Third-Class Radio Operator in Japan</p>
      <h3>Transceiver</h3>
      <ul>
        <li>
          <Link
            href="https://twitter.com/iPolyomino/status/1334088933076918273"
            target="_blank"
            rel="noopener"
          >
            FT1XD
          </Link>
        </li>
      </ul>
      <h3>Antenna</h3>
      <ul>
        <li>SRH789</li>
        <li>SRH771</li>
        <li>SRH805S</li>
      </ul>
      <h2>Learning</h2>
      <ul>
        <li>
          <Link href="/morse">Morse code</Link>
        </li>
        <li>
          <Link href="/morse/quiz">Morse code quiz</Link>
        </li>
      </ul>
    </ContentsCard>
  );
};

export default Ham;
