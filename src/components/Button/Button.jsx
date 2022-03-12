import React from "react";

import PropTypes from "prop-types";

// styles
import "./style.scss";

const Button = (props) => {
  const { children, id, className, name, style, type } = props;
  return (
    <button type={type} id={id} className={className} name={name} style={style}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  className: "ms-button",
  id: "",
  name: "",
  style: {},
  type: "button",
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.objectOf(PropTypes.string),
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
};

export default Button;
