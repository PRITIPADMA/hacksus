import Head from "next/head";
import { Button, Card, Loader } from "semantic-ui-react";
import StoryContainer from "../components/Container";
import StoryHeader from "../components/Header";
import Link from "next/link";
import { auth } from "../services/auth";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "@firebase/auth";
import useStore from "../hooks/use-store";
import { getDocs } from "@firebase/firestore";
import db, { storiesCol } from "../services/db";

export default function Home() {
  const { setUser, user } = useStore();
  const [stories, setStories] = useState([]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    const getStories = async () => {
      let s = [];
      const querySnapshot = await getDocs(storiesCol);
      //console.log(querySnapshot);
      querySnapshot.forEach((doc) => {
        //console.log(doc.id);
        s.push({...doc.data(),id: doc.id});
        console.log(s);
      });
      setStories(s);
    };
    getStories();
  }, []);

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
      {stories ? (
        <StoryContainer stories={stories} />
      ) : (
        <Loader active inline="centered" />
      )}
    </div>
  );
}
