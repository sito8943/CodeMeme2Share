import React from "react";

// components
import MemeShare, { Container, AppleDots } from "./MemeShare";

// icons
import { ShareIcon } from "./components/Icons/icons";

const Template = () => {
  return (
    <MemeShare
      backgroundColor="#0093E9"
      backgroundImage="linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)"
    >
      <Container>
        <AppleDots />
        <Container className="flex justify-content-center align-items-center">
          <ShareIcon color="aliceblue" size="xx-larger" />
        </Container>
      </Container>
    </MemeShare>
  );
};

export default Template;
