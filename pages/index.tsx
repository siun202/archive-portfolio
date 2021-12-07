import { GetStaticProps } from "next";
import Head from "next/head";
import React from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Testimonials from "../components/Testimonials";
import generateRSSFeed from "../utils/rss-utils";

export default function Home() {
  return (
    <div>
      <Head>
        <meta
          name="keywords"
          content="Avneesh, Agarwal, Avneesh Agarwal, web dev, blogger, content creator"
        />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS"
          href="https://www.avneesh.tech/rss.xml"
        />
        <link rel="icon" href="/logo.svg" />
      </Head>

      <div className="h-[10vh]">
        <Header />
      </div>

      <main className="relative mb-10 ml-5">
        <Intro />
        <About />
        <Testimonials />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  // TODO: find a better way to do these "build steps"
  // generate the rss feed to /feed.xml
  if (process.env.NODE_ENV === "production") generateRSSFeed();

  return { props: {} };
};
