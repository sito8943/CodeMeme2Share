import React from "react";

import PropTypes from "prop-types";

// style
import "./style.scss";

const Title = (props) => {
  const { id, className, style, name, variant, children } = props;
  return (
    <div
      className={`${variant} ${className}`}
      style={style}
      id={id}
      name={name}
    >
      {children}
    </div>
  );
};

Title.defaultProps = {
  id: "",
  className: "ms-title",
  style: {},
  name: "",
  variant: "h1",
};

Title.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.any),
  variant: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Title;
