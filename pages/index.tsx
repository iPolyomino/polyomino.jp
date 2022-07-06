import type { NextPage } from "next";
import Head from "next/head";
import Background from "../components/Background";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Hagi</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Background />
    </>
  );
};

export default Home;
