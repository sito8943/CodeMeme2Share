import React from "react";

import PropTypes from "prop-types";

// emotion
import { css } from "@emotion/css";

// styles
import "./style.css";

const Spinner = (props) => {
  const { color, size } = props;

  const spinnerContainer = css({
    width: "200px",
    height: "200px",
    display: "inline-block",
    overflow: "hidden",
    background: "rgba(255, 255, 255, 0)",
  });

  const spinner = css({
    width: "100%",
    height: "100%",
    position: "relative",
    transform: "translateZ(0) scale(1)",
    backfaceVisibility: "hidden",
    transformOrigin: "0 0",
  });

  const spinnerChild = css({
    position: "absolute",
    width: "120px",
    height: "120px",
    border: `20px solid ${color}`,
    borderTopColor: "transparent",
    animation: "spinner-rotate 1s linear infinite",
    borderRadius: "50%",
    top: "100px",
    left: "100px",
    boxSizing: "content-box",
  });

  return (
    <div className={spinnerContainer}>
      <div className={spinner}>
        <div className={spinnerChild}></div>
      </div>
    </div>
  );
};

Spinner.defaultProps = {
  color: "#e15b64",
};

Spinner.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
};

export default Spinner;
