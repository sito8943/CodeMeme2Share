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
import Icon, { XIcon } from "../Icons/Icons";

const Notification = (props) => {
  const {
    style,
    options,
    id,
    className,
    name,
    title,
    text,
    position,
    icon,
    delay,
    maxWidth,
    ignoreDefault,
    visible,
    needToClose,
  } = props;

  const icons = {
    error: "filledcirclexicon",
    wrong: "filledcirclexicon",
    good: "filledcirclecheckicon",
    ok: "filledcirclecheckicon",
    warning: "filledcircleexclamationicon",
    info: "filledcircleinfoicon",
    question: "filledcircleinfoicon",
  };

  const emotionCss = css({ ...options, maxWidth });

  const prefabPositions = {
    right: css({ position: "fixed", right: 5 }),
    up: css({ position: "fixed", top: 5 }),
    down: css({ position: "fixed", down: 5 }),
    left: css({ position: "fixed", left: 5 }),
    "right-down": css({ position: "fixed", bottom: 5, right: 5 }),
    "right-up": css({ position: "fixed", top: 5, right: 5 }),
    "left-down": css({ position: "fixed", bottom: 5, left: 5 }),
    "left-up": css({ position: "fixed", top: 5, right: 5 }),
  };

  const prefabIcons = {
    error: "rgb(218, 34, 70)",
    wrong: "rgb(218, 34, 70)",
    good: "green",
    ok: "green",
    warning: "rgb(202, 202, 4)",
    info: "rgb(21, 21, 247)",
    question: "rgb(21, 21, 247)",
  };

  const iconContainer = css({
    margin: "5px 10px 0 0",
  });

  const buttonArea = css({
    margin: "0 -8px 10px 10px",
  });

  const closeButton = css({
    background: "white",
    border: "none",
    cursor: "pointer",
    width: 20,
    height: 20,
    padding: 0,
    borderRadius: "100%",
    transition: "all 100ms ease",
    "&:hover": {
      background: "rgb(218, 34, 70)",
    },
  });

  const [afterDelay, setAfterDelay] = useState(false);

  useEffect(() => {
    if (delay > 0)
      setTimeout(() => {
        setAfterDelay(true);
      }, delay);
  }, [visible, delay]);

  const close = () => {
    setAfterDelay(true);
  };

  return (
    <Container
      id={id}
      className={`${className} ${!ignoreDefault ? emotionCss : ""} ${
        prefabPositions[position]
      }`}
      name={name}
      style={{
        ...style,
        transition: "all 200ms ease",
        opacity: afterDelay ? 0 : 1,
      }}
      ignoreDefault
    >
      {icon !== "" && (
        <Container ignoreDefault className={iconContainer}>
          <Icon icon={icons[icon]} size="x-large" color={prefabIcons[icon]} />
        </Container>
      )}
      <Container ignoreDefault>
        <Title variant="h5">{title}</Title>
        <Paragraph>{text}</Paragraph>
      </Container>
      {needToClose && (
        <Container className={buttonArea} ignoreDefault>
          <Button action={close} className={closeButton} ignoreDefault>
            <XIcon color="red" size="small" />
          </Button>
        </Container>
      )}
    </Container>
  );
};

Notification.defaultProps = {
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
  className: "",
  id: "",
  name: "",
  title: "",
  text: "",
  position: "right-down",
  icon: "warning",
  delay: 5000,
  maxWidth: 400,
  ignoreDefault: false,
  needToClose: true,
};

Notification.propTypes = {
  style: PropTypes.objectOf(PropTypes.any),
  options: PropTypes.objectOf(PropTypes.any),
  title: PropTypes.string,
  text: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  position: PropTypes.string,
  icon: PropTypes.string,
  delay: PropTypes.number,
  maxWidth: PropTypes.number,
  needToClose: PropTypes.bool,
  ignoreDefault: PropTypes.bool,
  visible: PropTypes.bool.isRequired,
};

export default Notification;
