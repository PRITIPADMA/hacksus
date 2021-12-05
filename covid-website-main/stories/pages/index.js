import Head from "next/head";
import { Button, Card, Loader } from "semantic-ui-react";
import StoryContainer from "../components/Container";
import StoryHeader from "../components/Header";
import Link from "next/link";
import { auth } from "../services/auth";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "@firebase/auth";
import useStore from "../hooks/use-store";
import { collection, deleteDoc, doc, getDocs, orderBy, query, where } from "@firebase/firestore";
import db, { storiesCol } from "../services/db";

export default function Home() {
  const { setUser, user } = useStore();
  const [stories, setStories] = useState([]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    //fetching stories from firebase firestore sorted by no of likes
    const getStories = async () => {
      let s = [];
      const collectionRef= collection(db,"stories");
      const q=query(collectionRef,orderBy("likes","desc"))
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        console.log(doc.id);
        s.push({...doc.data(),id: doc.id});
      });
      setStories(s);
    };

    //looking for reported or fake stories
    const deleteStories = async ()=>{
      const storyRef = collection(db, "stories");
      const q = query(storyRef, where("dislikes", ">=", 10));
      const snapshot = await getDocs(q);
    
      const results = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    
      results.forEach(async (result) => {
        const docRef = doc(db, "stories", result.id);
        await deleteDoc(docRef);
      });
    }

    getStories();
    deleteStories();
  }, [stories]);

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
