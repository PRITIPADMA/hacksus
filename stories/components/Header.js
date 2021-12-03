import React from "react";
import { Button, Header, Segment } from "semantic-ui-react";
import Link from "next/link";

const StoryHeader = () => (
  <Segment clearing>
    <Header as="h1" floated="left">
      <Link href="/">Stories of People...</Link>
    </Header>
    <Button inverted floated="right" color="violet">
      Logout
    </Button>
    <Button inverted floated="right" color="violet">
      Login
    </Button>
  </Segment>
);

export default StoryHeader;
