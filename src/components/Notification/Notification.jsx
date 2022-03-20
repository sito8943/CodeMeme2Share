import React from "react";

import PropTypes from "prop-types";

// components
import Container from "../Container/Container";
import Button from "../Button/Button";
import { Paragraph, Title } from "../Typography/Typography";

// emotion
import { css } from "@emotion/css";

// styles
import "./style.scss";
import { CircleXIcon } from "../Icons/Icons";

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
  } = props;

  const emotionCss = css(options);

  const buttonArea = css({
    margin: "-10px -8px 10px 10px",
  });

  const closeButton = css({
    background: "none",
    border: "none",
    cursor: "pointer",
  });

  return (
    <Container
      id={id}
      className={`${className} ${!ignoreDefault ? emotionCss : ""}`}
      ignoreDefault
    >
      <Container className="text-area" ignoreDefault>
        <Title variant="h3" className="notification-title">
          {title}
        </Title>
        <Paragraph className="notification-body">{text}</Paragraph>
      </Container>
      <Container className={buttonArea} ignoreDefault>
        <Button ignoreDefault className={closeButton}>
          <CircleXIcon color="red" />
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
