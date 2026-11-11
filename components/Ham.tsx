import Link from "next/link";
import Image from "next/image";

import ContentsCard from "@/components/ContentsCard";

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
        <li>FT1XD</li>
      </ul>
      <Image
        src="/images/ft1xd.jpg"
        width={1024}
        height={768}
        alt="FT1XD transceiver"
        sizes="(max-width: 600px) 100vw, 400px"
        style={{ width: "100%", maxWidth: 400, height: "auto" }}
      />
      <h3>Antenna</h3>
      <ul>
        <li>SRH789</li>
        <li>SRH771</li>
        <li>SRH805S</li>
      </ul>
      <h2>Learning</h2>
      <h3>Rhythmorse</h3>
      <p>
        Rhythmorse is an Android app that lets you practice Morse code like a
        rhythm game. You can choose the characters you want to practice,
        including those in your own call sign.
      </p>
      <p>
        <Link href="https://play.google.com/store/apps/details?id=jp.polyomino.rhythmorse">
          Google Play
        </Link>
        {" / "}
        <Link href="/support/rhythmorse">Privacy Policy</Link>
      </p>
      <h3>Web tools</h3>
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
