import React from "react";

// components
import MemeShare, { Container, AppleDots, Title } from "./MemeShare";

// icons
import { ShareIcon } from "./components/Icons/icons";

const Template = () => {
  return (
    <MemeShare background="random">
      <Container>
        <AppleDots />
        <Title style={{ margin: 10 }} variant="h4">
          Code Meme to Share
        </Title>
        <Container className="flex justify-content-center align-items-center">
          <ShareIcon color="aliceblue" size="xx-large" />
        </Container>
      </Container>
    </MemeShare>
  );
};

export default Template;
