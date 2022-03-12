import React from "react";

// components
import MemeShare, { Container, Paragraph, Title } from "./MemeShare";
import AppleDots from "./AppleDots/AppleDots";

const Template = () => {
  return (
    <MemeShare>
      <Container>
        <AppleDots />
        <Container className="ms-sub-container">
          <Title variant="h3">Some Title</Title>
          <Container className="flex" style={{ marginTop: 25 }}></Container>
          <Paragraph>Some Text</Paragraph>
        </Container>
      </Container>
    </MemeShare>
  );
};

export default Template;
