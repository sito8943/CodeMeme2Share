import React from "react";
import PropTypes from "prop-types"; // emotion

import { css } from "@emotion/css"; // style

import "./style.scss";
import { jsx as _jsx } from "react/jsx-runtime";

const CodeArea = props => {
  const {
    id,
    className,
    style,
    name,
    children,
    options,
    ignoreDefault
  } = props;
  const emotionCss = css({
    options
  });
  return /*#__PURE__*/_jsx("p", {
    className: `${className} ${!ignoreDefault ? emotionCss : ""}`,
    style: style,
    id: id,
    name: name,
    children: children
  });
};

CodeArea.defaultProps = {
  id: "",
  className: "",
  style: {},
  name: "",
  options: {
    background: "#22233387",
    padding: "20px",
    borderRadius: "1rem",
    backdropFilter: "blur(5px)",
    WebkitBackdropFilter: "blur(5px)",
    color: "aliceblue",
    fontSize: "1.2rem"
  },
  ignoreDefault: false
};
CodeArea.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.any),
  children: PropTypes.node.isRequired,
  options: PropTypes.objectOf(PropTypes.string),
  ignoreDefault: PropTypes.bool
};
export default CodeArea;