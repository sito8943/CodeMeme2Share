import React, { useEffect, useState } from "react";

// components
import MemeShare, {
  Container,
  AppleDots,
  Notification,
  LinkButton,
} from "./App";

// images
import Loading from "./components/Loading/Loading";
import Spinner from "./components/Loading/Spinner/Spinner";
import { CodeArea } from "./Typography";

const Template = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <MemeShare background="random">
      <Notification
        title="Notification"
        text="This is a notification This is a notification This is a notification This is a notification This is a notification This is a notification"
        visible={true}
        delay={0}
      />
      {loading && (
        <Loading>
          <Spinner />
        </Loading>
      )}
      <Container>
        <AppleDots />
        <LinkButton link="/">Hola</LinkButton>
        <CodeArea text="const a = '10'" />
      </Container>
    </MemeShare>
  );
};

export default Template;
