import Head from "next/head";
import { Button, Card } from "semantic-ui-react";
import StoryContainer from "../components/Container";
import StoryHeader from "../components/Header";
import Link from "next/link";
import { auth } from "../services/auth";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "@firebase/auth";
import useStore from "../hooks/use-store";
import { collection, getDocs, query } from "@firebase/firestore";
import db from "../services/db";

export default function Home() {
  const { setUser, user } = useStore();
  const [stories, setStories] = useState([]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    const getStories = async () => {
      let s = [];
      const querySnapshot = await getDocs(collection(db, "stories"));
      querySnapshot.forEach((doc) => {
        s.push(doc.data());
      });
      setStories(s);
    };
    getStories();
  }, [setUser, stories]);

  return (
    <div>
      <Head>
        <title>stories</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StoryHeader />
      {user && (
        <Card.Group centered>
          <Link href="/post-story" passHref>
            <Button color="black">Post your Story</Button>
          </Link>
        </Card.Group>
      )}
      <StoryContainer stories={stories} />
    </div>
  );
}
