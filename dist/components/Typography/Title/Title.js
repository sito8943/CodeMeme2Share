import React from "react";
import PropTypes from "prop-types"; // style

import "./style.scss";
import { jsx as _jsx } from "react/jsx-runtime";

const Title = props => {
  const {
    id,
    className,
    style,
    name,
    variant,
    children
  } = props;
  return /*#__PURE__*/_jsx("div", {
    className: `${variant} ${className}`,
    style: style,
    id: id,
    name: name,
    children: children
  });
};

Title.defaultProps = {
  id: "",
  className: "ms-title",
  style: {},
  name: "",
  variant: "h1"
};
Title.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.any),
  variant: PropTypes.string,
  children: PropTypes.node.isRequired
};
export default Title;