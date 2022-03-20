import React from "react"; // components

import MemeShare, { Container, AppleDots, Title, FileButton, Notification } from "./App"; // images

import react from "./assets/images/logo512.png";
import Rotate from "./components/Container/Rotate/Rotate";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

const Template = () => {
  return /*#__PURE__*/_jsxs(MemeShare, {
    background: "random",
    children: [/*#__PURE__*/_jsx(Notification, {
      title: "Notification",
      text: "This is a notification This is a notification This is a notification This is a notification This is a notification This is a notification",
      visible: true,
      delay: 0
    }), /*#__PURE__*/_jsx(Container, {
      children: /*#__PURE__*/_jsx(AppleDots, {})
    })]
  });
};

export default Template;