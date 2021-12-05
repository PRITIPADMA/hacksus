import React, { useState } from "react";
import Head from "next/head";
import { Button, Checkbox, Container, Form, Message } from "semantic-ui-react";
import StoryHeader from "../components/Header";
import db from "../services/db";
import useStore from "../hooks/use-store";
import { collection, addDoc } from "firebase/firestore";
import { useRouter } from "next/dist/client/router";
import { Router } from "react-router";


const PostStory = () => {
  const router = useRouter();
  const { user } = useStore();
  const [title, setTitle] = useState("");
  const [storyInShort, setStoryInShort] = useState("");
  const [story, setStory] = useState("");
  const submitStory = async () => {
    if (
      user.displayName &&
      title !== "" &&
      storyInShort !== "" &&
      story !== "" &&
      user.photoURL
    ) {
      try {
        const docRef = await addDoc(collection(db, "stories"), {
          //id: Math.floor(Math.random() * 10000000000),
          username: user.displayName,
          title,
          storyInShort,
          story,
          userImg: user.photoURL,
          likes: 0,
          dislikes: 0,
        });
        console.log("Document written with ID: ", docRef.id);
        router.push("/")
        return ;
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    } else {
      console.log("lol");
    }
  };

  // const handleSubmit=(){
  //   <Redirect to="/" />
  // }

  return (
    <>
      <StoryHeader />
      <Container textAlign="center">
        <Head>
          <title>Post Story</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Form onSubmit={submitStory}>
          <Form.Field>
            <label>Title</label>
            <input
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <label>Story(in short)</label>
            <input
              placeholder="Story in short..."
              value={storyInShort}
              onChange={(e) => setStoryInShort(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <label>Story</label>
            <textarea
              placeholder="Story..."
              value={story}
              onChange={(e) => setStory(e.target.value)}
            />
          </Form.Field>
          <Button inverted color="violet" type="submit">
            Submit
          </Button>
        </Form>
        <Message warning>
          <Message.Header>
            Please note: Don&apos;t post fake stories.
          </Message.Header>
          <p>A certain amount of dislikes can take down your story.</p>
        </Message>
      </Container>
    </>
  );
};

export default PostStory;
