import React from "react";

// components
import MemeShare, {
  Container,
  AppleDots,
  Title,
  FileButton,
  Notification,
  LinkButton,
} from "./App";

// images
import react from "./assets/images/logo512.png";
import Rotate from "./components/Container/Rotate/Rotate";
import Loading from "./components/Loading/Loading";
import Spinner from "./components/Loading/Spinner/Spinner";

const Template = () => {
  return (
    <MemeShare background="random">
      <Notification
        title="Notification"
        text="This is a notification This is a notification This is a notification This is a notification This is a notification This is a notification"
        visible={true}
        delay={0}
      />
      <Loading>
        <Spinner />
      </Loading>
      <Container>
        <AppleDots />
        <LinkButton link="/">Hola</LinkButton>
      </Container>
    </MemeShare>
  );
};

export default Template;
