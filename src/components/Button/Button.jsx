import React from "react";

import PropTypes from "prop-types";

// components
import FileButton from "./FileButton/FileButton";
import LinkButton from "./LinkButton/LinkButton";

// emotion
import { css } from "@emotion/css";

// styles
import "./style.scss";

const Button = (props) => {
  const {
    children,
    id,
    className,
    name,
    style,
    type,
    options,
    ignoreDefault,
    action,
    mouseOver,
    mouseLeave,
  } = props;

  const emotionCss = css(options);

  return (
    <button
      onClick={action}
      onMouseEnter={mouseOver}
      onMouseLeave={mouseLeave}
      type={type}
      id={id}
      className={`${className} ${!ignoreDefault ? emotionCss : ""}`}
      name={name}
      style={style}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
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
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.objectOf(PropTypes.any),
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  options: PropTypes.objectOf(PropTypes.any),
  ignoreDefault: PropTypes.bool,
  action: PropTypes.func,
  mouseOver: PropTypes.func,
  mouseLeave: PropTypes.func,
};

export { FileButton, LinkButton };

export default Button;
