import React from "react";

// components
import MemeShare, { Container, AppleDots, Title, FileButton } from "./App";

// images
import react from "./assets/images/logo512.png";
import Rotate from "./components/Container/Rotate/Rotate";

const Template = () => {
  return (
    <MemeShare background="random">
      <Container>
        <AppleDots />
        <Title style={{ margin: 10 }} variant="h4">
          Code Meme to Share
        </Title>
        <Rotate className="flex justify-content-center align-items-center">
          <img src={react} style={{ width: 150 }} alt="react-logo" />
        </Rotate>
        <FileButton>Hola</FileButton>
      </Container>
    </MemeShare>
  );
};

export default Template;
