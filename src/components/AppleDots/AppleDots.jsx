import React from "react";

// icons
import { DotIcon } from "../Icons/icons";

// styles
import "./style.scss";

const AppleDots = () => {
  return (
    <div className="apple-dots">
      <DotIcon color="red" />
      <DotIcon color="yellow" />
      <DotIcon color="green" />
    </div>
  );
};

export default AppleDots;
