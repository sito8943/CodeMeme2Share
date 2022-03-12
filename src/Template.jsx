import React from "react";

// components
import MemeShare, { Container } from "./MemeShare";
import AppleDots from "./AppleDots/AppleDots";

// icons
import { ShareIcon } from "./Icons/icons";

const Template = () => {
  return (
    <MemeShare
      backgroundColor="#0093E9"
      backgroundImage="linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)"
    >
      <Container>
        <AppleDots />
        <Container className="ms-sub-container">
          <ShareIcon color={"aliceblue"} />
        </Container>
      </Container>
    </MemeShare>
  );
};

export default Template;
