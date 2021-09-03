import Head from "next/head";
import About from "../components/About";
import Header from "../components/Header";
import Intro from "../components/Intro";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/logo.svg" />
      </Head>

      <div className="h-[10vh]">
        <Header />
      </div>

      <div className="md:ml-40 ml-10 sm:ml-20 mb-10">
        <Intro />
        <About />
      </div>
    </div>
  );
}
