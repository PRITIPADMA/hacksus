import React from "react";
import { Button, Card, CardGroup, Image } from "semantic-ui-react";

const StoryContainer = () => (
  <Card.Group centered>
    <Card>
      <Card.Content>
        <Image
          floated="right"
          alt=""
          size="mini"
          src="https://imgr.search.brave.com/4A39qmOi7S7hb7MNUj3Tu-J0CBLbBi1uMZhvCswlsts/fit/1080/1080/ce/1/aHR0cHM6Ly9ha25z/LWltYWdlcy5lb25s/aW5lLmNvbS9lb2xf/aW1hZ2VzL0VudGly/ZV9TaXRlLzIwMTcy/MTAvcnNfNjAweDYw/MC0xNzAzMTAwODMy/MjktNjAwLmF2YXRh/ci0xLjMxMDE3Lmpw/Zz9maXQ9YXJvdW5k/JTdDMTA4MDoxMDgw/Jm91dHB1dC1xdWFs/aXR5PTkwJmNyb3A9/MTA4MDoxMDgwO2Nl/bnRlcix0b3A"
        />
        <Card.Header>Header</Card.Header>
        <Card.Meta>Name</Card.Meta>
        <Card.Description>Story In Short</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Button basic color="green">
            Like (0)
          </Button>
          <Button basic color="red">
            Dislike (0)
          </Button>
        </div>
      </Card.Content>
    </Card>
  </Card.Group>
);

export default StoryContainer;
