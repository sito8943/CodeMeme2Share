import React from "react";

import PropTypes from "prop-types";

// emotion
import { css } from "@emotion/css";

// component
import Container from "../Container/Container";

const Loading = (props) => {
  const { children, id, className, name, style, options, ignoreDefault } =
    props;
  const emotionCss = css(options);

  return (
    <Container
      id={id}
      name={name}
      style={style}
      ignoreDefault
      className={`${className} ${!ignoreDefault ? emotionCss : ""}`}
    >
      {children}
    </Container>
  );
};

Loading.defaultProps = {
  className: "",
  id: "",
  name: "",
  style: {},
  options: {
    width: "100%",
    height: "100%",
    position: "fixed",
    justifyContent: "center",
    alignItems: "center",
    zIndex: "99",
    transition: "200ms all ease",
    display: "flex",
    flexDirection: "column",
    background: "#2223338c",
    padding: "1rem",
    backdropFilter: "blur(4px)",
    WebKitBackdropFilter: "blur(4px)",
    borderRadius: "1rem",
    animation: "",
  },
  ignoreDefault: false,
};

Loading.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.objectOf(PropTypes.any),
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  options: PropTypes.objectOf(PropTypes.any),
  ignoreDefault: PropTypes.bool,
};

export default Loading;
