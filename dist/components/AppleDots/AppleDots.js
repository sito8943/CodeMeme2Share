import React from "react";
import PropTypes from "prop-types"; // icons

import { DotIcon } from "../Icons/Icons"; // styles

import "./style.scss";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

const AppleDots = props => {
  const {
    color1,
    color2,
    color3
  } = props;
  return /*#__PURE__*/_jsxs("div", {
    className: "apple-dots",
    children: [/*#__PURE__*/_jsx(DotIcon, {
      color: color1
    }), /*#__PURE__*/_jsx(DotIcon, {
      color: color2
    }), /*#__PURE__*/_jsx(DotIcon, {
      color: color3
    })]
  });
};

AppleDots.defaultProps = {
  color1: "red",
  color2: "yellow",
  color3: "green"
};
AppleDots.propTypes = {
  color1: PropTypes.string,
  color2: PropTypes.string,
  color3: PropTypes.string
};
export default AppleDots;