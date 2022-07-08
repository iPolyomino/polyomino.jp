import type { NextPage } from "next";
import Head from "next/head";
import Hagi from "../components/Hagi";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Hagi</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hagi />
    </>
  );
};

export default Home;
