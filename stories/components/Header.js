import React from "react";
import { Button, Header, Segment } from "semantic-ui-react";
import Link from "next/link";
import { auth, provider } from "../services/auth";
import { signInWithPopup, signOut } from "firebase/auth";
import useStore from "../hooks/use-store";

const StoryHeader = () => {
  const { setUser, user } = useStore();

  return (
    <Segment clearing>
      <Header as="h1" floated="left">
        <Link href="/">Stories of People...</Link>
      </Header>
      {user && (
        <Button
          inverted
          floated="right"
          color="violet"
          onClick={() => {
            signOut(auth).then(() => console.log("user signed out"));
          }}
        >
          Logout
        </Button>
      )}
      {!user && (
        <Button
          inverted
          floated="right"
          color="violet"
          onClick={() => {
            signInWithPopup(auth, provider)
              .then((result) => {
                const user = result.user;
                setUser(user);
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
      )}
    </Segment>
  );
};

export default StoryHeader;
