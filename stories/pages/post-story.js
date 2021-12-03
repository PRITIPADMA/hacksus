import React from "react";
import Head from "next/head";
import { Button, Checkbox, Container, Form } from "semantic-ui-react";
import StoryHeader from "../components/Header";

const PostStory = () => {
  return (
    <>
      <StoryHeader />
      <Container textAlign="center">
        <Head>
          <title>Post Story</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Form>
          <Form.Field>
            <label>Title</label>
            <input placeholder="Title" />
          </Form.Field>
          <Form.Field>
            <label>Story(in short)</label>
            <input placeholder="Story in short..." />
          </Form.Field>
          <Form.Field>
            <label>Story</label>
            <textarea placeholder="Story..." />
          </Form.Field>
          <Button inverted color="violet" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default PostStory;
