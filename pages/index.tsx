import Head from "next/head";
import { NextPage } from "next";
import React from "react";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Github User Viewer - Coding Challenge</title>
        <meta
          name="description"
          content="View a list of Github users provided by the Github Users API"
        />
      </Head>

      <main>
        <h1>Github User Viewer</h1>
      </main>
    </>
  );
};

export default Home;
