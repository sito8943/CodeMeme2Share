import React, { useState, useEffect } from "react";

import PropTypes from "prop-types";

// components
import Container from "../Container/Container";
import Button from "../Button/Button";
import { Paragraph, Title } from "../Typography/Typography";

// emotion
import { css } from "@emotion/css";

// styles
import "./style.scss";
import { XIcon } from "../Icons/Icons";

const Notification = (props) => {
  const {
    id,
    className,
    style,
    name,
    options,
    ignoreDefault,
    title,
    text,
    delay,
    visible,
  } = props;

  const emotionCss = css(options);

  const buttonArea = css({
    margin: "-10px -8px 10px 10px",
  });

  const [afterDelay, setAfterDelay] = useState(false);

  useEffect(() => {}, [visible]);

  const closeButton = css({
    background: "white",
    border: "none",
    cursor: "pointer",
    width: 29,
    padding: "3px 0px 0 0",
    borderRadius: "100%",
    transition: "all 100ms ease",
    "&:hover": {
      background: "rgb(218, 34, 70)",
    },
  });

  return (
    <Container
      id={id}
      className={`${className} ${!ignoreDefault ? emotionCss : ""}`}
      name={name}
      style={{
        ...style,
        transition: "all 200ms ease",
        opacity: afterDelay ? 0 : 1,
      }}
      ignoreDefault
    >
      <Container className="text-area" ignoreDefault>
        <Title variant="h3">{title}</Title>
        <Paragraph>{text}</Paragraph>
      </Container>
      <Container className={buttonArea} ignoreDefault>
        <Button ignoreDefault className={closeButton}>
          <XIcon color="red" />
        </Button>
      </Container>
    </Container>
  );
};

Notification.defaultProps = {
  className: "",
  id: "",
  name: "",
  style: {},
  options: {
    display: "flex",
    background: "#2223338c",
    padding: "1rem",
    backdropFilter: "blur(4px)",
    WebKitBackdropFilter: "blur(4px)",
    borderRadius: "1rem",
    animation: "",
  },
  ignoreDefault: false,
  title: "",
  text: "",
  delay: 5,
};

Notification.propTypes = {
  style: PropTypes.objectOf(PropTypes.any),
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  options: PropTypes.objectOf(PropTypes.any),
  ignoreDefault: PropTypes.bool,
  title: PropTypes.string,
  text: PropTypes.string,
  delay: PropTypes.number,
};

export default Notification;
