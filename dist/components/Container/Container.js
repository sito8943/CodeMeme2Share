import React from "react";
import PropTypes from "prop-types"; // style

import "./style.scss";
import { jsx as _jsx } from "react/jsx-runtime";

const Container = props => {
  const {
    children,
    id,
    className,
    name,
    style
  } = props;
  return /*#__PURE__*/_jsx("div", {
    id: id,
    name: name,
    className: className,
    style: style,
    children: children
  });
};

Container.defaultProps = {
  className: "ms-container",
  id: "",
  name: "",
  style: {}
};
Container.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.objectOf(PropTypes.any),
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string
};
export default Container;