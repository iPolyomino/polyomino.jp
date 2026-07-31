import Head from "next/head";

import LsnlIntro from "@/components/LsnlIntro";
import LsnlParticles from "@/components/LsnlParticles";
import laboratory from "@/contents/laboratory.json";
import styles from "@/styles/Lsnl.module.css";

export default function LsnlPage() {
  return (
    <div className={styles.root}>
      <Head>
        <title>Large-Scale Networking Laboratory</title>
        <meta
          name="description"
          content="Network Architecture Laboratory principles and words."
        />
      </Head>
      <LsnlParticles />
      <section className={styles.intro}>
        <LsnlIntro />
      </section>
      <section className={styles.contents}>
        <main>
          {laboratory.words.map((word) => (
            <article key={word.title}>
              <h2>{word.title}</h2>
              {word.text.split("\n").map((line, index) => (
                <p key={`${word.title}-${index}`}>{line || "\u00a0"}</p>
              ))}
            </article>
          ))}
        </main>
      </section>
    </div>
  );
}
