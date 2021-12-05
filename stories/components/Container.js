import React from "react";
import { Button, Card, CardGroup, Image } from "semantic-ui-react";
import useStore from "../hooks/use-store";
import Link from "next/link";
import { doc, updateDoc, setDoc } from "firebase/firestore";
import db from "../services/db";

const StoryContainer = ({ stories }) => {
  const { user } = useStore();

  const likeStory = async (story) => {
    await updateDoc(doc(db, "stories", story.id), {
      likes: story.likes + 1,
    });
  };

  const dislikeStory = async(story) => {
    await updateDoc(doc(db, "stories", story.id), {
      dislikes: story.dislikes + 1,
    });
  };

  return (
    <Card.Group centered>
      {stories &&
        stories.map((story) => (
          <Card key={story.id}>
            <Card.Content>
              <Image floated="right" alt="" size="mini" src={story.userImg} />
              <Card.Header>
                <Link href={`/${story.id}`}>{story.title}</Link>
              </Card.Header>
              <Card.Meta>{story.username}</Card.Meta>
              <Card.Description>{story.storyInShort}</Card.Description>
            </Card.Content>
            {user && (
              <Card.Content extra>
                <div className="ui two buttons">
                  <Button basic color="green" onClick={()=>likeStory(story)}>
                    Like ({story.likes})
                  </Button>
                  <Button basic color="red" onClick={()=>dislikeStory(story)}>
                    Dislike ({story.dislikes})
                  </Button>
                </div>
              </Card.Content>
            )}
          </Card>
        ))}
    </Card.Group>
  );
};

export default StoryContainer;
