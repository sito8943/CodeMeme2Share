import React from "react";
import PropTypes from "prop-types"; // styles

import "./style.scss";
import { jsx as _jsx } from "react/jsx-runtime";

const Button = props => {
  const {
    children,
    id,
    className,
    name,
    style,
    type
  } = props;
  return /*#__PURE__*/_jsx("button", {
    type: type,
    id: id,
    className: className,
    name: name,
    style: style,
    children: children
  });
};

Button.defaultProps = {
  className: "ms-button",
  id: "",
  name: "",
  style: {},
  type: "button"
};
Button.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.objectOf(PropTypes.any),
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string
};
export default Button;