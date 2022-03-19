import React from "react";

import PropTypes from "prop-types";

// emotion
import { css } from "@emotion/css";

// style
import "./style.scss";

const Paragraph = (props) => {
  const { id, className, style, name, children, options, ignoreDefault } =
    props;

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
      {children}
    </p>
  );
};

Paragraph.defaultProps = {
  id: "",
  className: "",
  style: {},
  name: "",
  options: {
    fontSize: "1rem",
    color: "aliceblue",
  },
  ignoreDefault: false,
};

Paragraph.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.any),
  children: PropTypes.node.isRequired,
  options: PropTypes.objectOf(PropTypes.any),
  ignoreDefault: PropTypes.bool,
};

export default Paragraph;
