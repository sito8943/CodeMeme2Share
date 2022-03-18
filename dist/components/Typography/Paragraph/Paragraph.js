import React from "react";
import PropTypes from "prop-types"; // style

import "./style.scss";
import { jsx as _jsx } from "react/jsx-runtime";

const Paragraph = props => {
  const {
    id,
    className,
    style,
    name,
    children
  } = props;
  return /*#__PURE__*/_jsx("p", {
    className: className,
    style: style,
    id: id,
    name: name,
    children: children
  });
};

Paragraph.defaultProps = {
  id: "",
  className: "ms-paragraph",
  style: {},
  name: ""
};
Paragraph.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.any),
  children: PropTypes.node.isRequired
};
export default Paragraph;