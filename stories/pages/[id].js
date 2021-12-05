import { getDocs } from "@firebase/firestore";
import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  Header,
  Segment,
  Statistic,
} from "semantic-ui-react";
import StoryHeader from "../components/Header";
import useStore from "../hooks/use-store";
import { storiesCol } from "../services/db";

const Story = () => {
  const router = useRouter();
  const { user } = useStore();
  const [story, setStory] = useState();

  useEffect(() => {
    const getStory = async () => {
      const querySnapshot = await getDocs(storiesCol);
      querySnapshot.forEach((doc) => {
        if (doc.id == router.query.id) {
          return setStory(doc.data());
        }
      });
    };
    getStory();
  },[]);

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
    <>
      <StoryHeader />
      <Container text textAlign="center">
        <Segment padded>
          <Header as="h1">{story?.title}</Header>
          <p>{story?.storyInShort}</p>
          <p>{story?.story}</p>
          {user && (
            <>
              <Button inverted color="green" onClick={()=>likeStory(story)}>
                Like ({story?.likes})
              </Button>
              <Button inverted color="red"  onClick={()=>dislikeStory(story)}>
                Dislike ({story?.dislikes})
              </Button>
            </>
          )}
        </Segment>
      </Container>
    </>
  );
};

export default Story;
