import React from "react";
import PropTypes from "prop-types"; // emotion

import { css } from "@emotion/css"; // styles

import "./style.scss";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

const FileButton = props => {
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
    accept
  } = props;
  const emotionCss = css(options);
  return /*#__PURE__*/_jsxs("label", {
    onMouseEnter: mouseOver,
    onMouseLeave: mouseLeave,
    type: type,
    id: id,
    className: `${className} ${!ignoreDefault ? emotionCss : ""}`,
    name: name,
    style: style,
    children: [/*#__PURE__*/_jsx("input", {
      type: "file",
      id: `file${id}`,
      name: `file${name}`,
      accept: accept,
      onChange: action
    }), children]
  });
};

FileButton.defaultProps = {
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
      border: "1px solid #6e3b70"
    }
  },
  type: "FileButton",
  ignoreDefault: false,
  action: null,
  mouseOver: null,
  mouseLeave: null,
  accept: ".txt"
};
FileButton.propTypes = {
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
  accept: PropTypes.string
};
export default FileButton;