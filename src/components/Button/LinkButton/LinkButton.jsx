import React from "react";

import PropTypes from "prop-types";

// emotion
import { css } from "@emotion/css";

const LinkButton = (props) => {
  const {
    children,
    id,
    className,
    name,
    style,
    type,
    options,
    ignoreDefault,
    mouseOver,
    mouseLeave,
    link,
    target,
    rel,
  } = props;

  const emotionCss = css(options);

  return (
    <a
      href={link}
      target={target}
      rel={rel}
      onMouseEnter={mouseOver}
      onMouseLeave={mouseLeave}
      type={type}
      id={id}
      className={`${className} ${!ignoreDefault ? emotionCss : ""}`}
      name={name}
      style={style}
    >
      {children}
    </a>
  );
};

LinkButton.defaultProps = {
  className: "",
  id: "",
  name: "",
  style: {},
  options: {
    fontSize: "0.875rem",
    cursor: "pointer",
    backgroundColor: "#2223335e",
    border: "1px solid #22233366",
    backdropFilter: "blur(4px)",
    padding: "10px",
    textDecoration: "none",
    textAlign: "center",
    borderRadius: "0.5rem",
    color: "aliceblue",
    "&:hover": {
      backgroundColor: "#6e3b70",
      border: "1px solid #6e3b70",
    },
  },
  type: "button",
  ignoreDefault: false,
  action: null,
  mouseOver: null,
  mouseLeave: null,
  target: "_blank",
  rel: "noopener noreferrer",
};

LinkButton.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.objectOf(PropTypes.any),
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  options: PropTypes.objectOf(PropTypes.any),
  ignoreDefault: PropTypes.bool,
  mouseOver: PropTypes.func,
  mouseLeave: PropTypes.func,
  link: PropTypes.string.isRequired,
  target: PropTypes.string,
  rel: PropTypes.string,
};

export default LinkButton;
