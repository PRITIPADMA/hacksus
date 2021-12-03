import React from "react";
import { Button, Header, Segment } from "semantic-ui-react";

const StoryHeader = () => (
  <Segment clearing>
    <Header as="h1" floated="left">
      Stories of People...
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
