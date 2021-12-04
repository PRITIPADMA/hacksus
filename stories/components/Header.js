import React from "react";
import { Button, Header, Segment } from "semantic-ui-react";
import Link from "next/link";
import { auth, provider } from "../services/auth";
import { signInWithPopup } from "firebase/auth";

const StoryHeader = () => {
  return (
    <Segment clearing>
      <Header as="h1" floated="left">
        <Link href="/">Stories of People...</Link>
      </Header>
      <Button inverted floated="right" color="violet">
        Logout
      </Button>
      <Button
        inverted
        floated="right"
        color="violet"
        onClick={() => {
          signInWithPopup(auth, provider)
            .then((result) => {
              const user = result.user;
              console.log(user);
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              const email = error.email;
              console.log("error", errorCode, errorMessage, email);
            });
        }}
      >
        Login
      </Button>
    </Segment>
  );
};

export default StoryHeader;
