import React from "react";

import PropTypes from "prop-types";

// icons
import { DotIcon } from "../Icons/Icons";

// styles
import "./style.scss";

const AppleDots = (props) => {
  const { color1, color2, color3 } = props;

  return (
    <div className="apple-dots">
      <DotIcon color={color1} />
      <DotIcon color={color2} />
      <DotIcon color={color3} />
    </div>
  );
};

AppleDots.defaultProps = {
  color1: "red",
  color2: "yellow",
  color3: "green",
};

AppleDots.propTypes = {
  color1: PropTypes.string,
  color2: PropTypes.string,
  color3: PropTypes.string,
};

export default AppleDots;
