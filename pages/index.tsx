import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/layouts/Layout";
import List from "../components/listing/List";

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Beautiful houses you would like to see</title>
        <meta name="description" content="Houses.com" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <List />
    </Layout>
  );
};

export default Home;
