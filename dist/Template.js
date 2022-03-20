import React from "react"; // components

import MemeShare, { Container, AppleDots, Title, FileButton } from "./App"; // images

import react from "./assets/images/logo512.png";
import Rotate from "./components/Container/Rotate/Rotate";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

const Template = () => {
  return /*#__PURE__*/_jsx(MemeShare, {
    background: "random",
    children: /*#__PURE__*/_jsxs(Container, {
      children: [/*#__PURE__*/_jsx(AppleDots, {}), /*#__PURE__*/_jsx(Title, {
        style: {
          margin: 10
        },
        variant: "h4",
        children: "Code Meme to Share"
      }), /*#__PURE__*/_jsx(Rotate, {
        className: "flex justify-content-center align-items-center",
        children: /*#__PURE__*/_jsx("img", {
          src: react,
          style: {
            width: 150
          },
          alt: "react-logo"
        })
      }), /*#__PURE__*/_jsx(FileButton, {
        children: "Hola"
      })]
    })
  });
};

export default Template;