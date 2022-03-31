import React from "react";

import PropTypes from "prop-types";

// html render
import renderHTML from "react-render-html";

// utils
import ParseLanguage from "./utils";

// emotion
import { css } from "@emotion/css";

// style
import "./style.scss";

const CodeArea = (props) => {
  const { id, className, style, name, text, options, ignoreDefault } = props;

  const emotionCss = css({
    options,
  });

  return (
    <p
      className={`${className} ${!ignoreDefault ? emotionCss : ""}`}
      style={style}
      id={id}
      name={name}
    >
      {renderHTML(ParseLanguage(text))}
    </p>
  );
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
    fontSize: "1.2rem",
  },
  ignoreDefault: false,
};

CodeArea.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.any),
  text: PropTypes.string.isRequired,
  options: PropTypes.objectOf(PropTypes.any),
  ignoreDefault: PropTypes.bool,
};

export default CodeArea;
