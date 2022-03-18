import React from "react";

import PropTypes from "prop-types";

// emotion
import { css } from "@emotion/css";

// style
import "./style.scss";

const Container = (props) => {
  const {
    children,
    id,
    className,
    name,
    style,
    display,
    flexDirection,
    background,
    padding,
    backdropFilter,
    borderRadius,
  } = props;

  const emotionCss = css({
    background,
    display,
    flexDirection,
    padding,
    backdropFilter,
    "-webkit-backdrop-filter": backdropFilter,
    borderRadius,
  });

  return (
    <div
      id={id}
      name={name}
      className={className !== "" ? className : emotionCss}
      style={style}
    >
      {children}
    </div>
  );
};

Container.defaultProps = {
  className: "",
  id: "",
  name: "",
  style: {},
  display: "flex",
  flexDirection: "column",
  background: "#2223338c",
  padding: "1rem",
  backdropFilter: "blur(4px)",
  borderRadius: "1rem",
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.objectOf(PropTypes.any),
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  display: PropTypes.string,
  flexDirection: PropTypes.string,
  background: PropTypes.string,
  padding: PropTypes.string,
  backdropFilter: PropTypes.string,
  borderRadius: PropTypes.string,
};

export default Container;
