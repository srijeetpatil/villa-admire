import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/layouts/Layout";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const [lastScrollTop, setLastScrollTop] = useState<number>(0);

  return (
    <Layout navbarBackground="transparent">
      <Head>
        <title>Beautiful houses you would like to see</title>
        <meta name="description" content="Houses.com" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        style={{
          backgroundImage: "url('/assets/img/landing/mansion.jpeg')",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100vw",
          minHeight: "100vh",
        }}
      ></div>
      <div
        style={{
          backgroundImage: "url('/assets/img/landing/street.jpeg')",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100vw",
          minHeight: "100vh",
        }}
      ></div>
      <div
        style={{
          backgroundImage: "url('/assets/img/landing/modern.jpeg')",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100vw",
          minHeight: "100vh",
        }}
      ></div>
    </Layout>
  );
};

export default Home;
