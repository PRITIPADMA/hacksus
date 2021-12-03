import Head from "next/head";
import Image from "next/image";
import { Button, Card } from "semantic-ui-react";
import StoryContainer from "../components/Container";
import StoryHeader from "../components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>stories</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StoryHeader />
      <Card.Group centered>
        <Link href="/post-story" passHref>
          <Button color="black">Post your Story</Button>
        </Link>
      </Card.Group>
      <StoryContainer />
    </div>
  );
}
