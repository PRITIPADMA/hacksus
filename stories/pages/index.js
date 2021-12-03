import Head from "next/head";
import Image from "next/image";
import StoryContainer from "../components/Container";
import StoryHeader from "../components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>stories</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StoryHeader />
      <StoryContainer />
    </div>
  );
}
