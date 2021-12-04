import Head from "next/head";
import { Button, Card } from "semantic-ui-react";
import StoryContainer from "../components/Container";
import StoryHeader from "../components/Header";
import Link from "next/link";
import { auth } from "../services/auth";
import { useEffect } from "react";
import { onAuthStateChanged } from "@firebase/auth";
import useStore from "../hooks/use-store";

export default function Home() {
  const { setUser, user } = useStore();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [setUser]);

  return (
    <div>
      <Head>
        <title>stories</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StoryHeader currentUser={user} setUser={setUser} />
      {user && (
        <Card.Group centered>
          <Link href="/post-story" passHref>
            <Button color="black">Post your Story</Button>
          </Link>
        </Card.Group>
      )}
      <StoryContainer />
    </div>
  );
}
