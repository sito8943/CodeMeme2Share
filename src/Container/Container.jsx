import React from "react";

import PropTypes from "prop-types";

// style
import "./style.scss";

const Container = (props) => {
  const { children, id, className, name, style } = props;
  return (
    <div id={id} name={name} className={className} style={style}>
      {children}
    </div>
  );
};

Container.defaultProps = {
  className: "ms-container",
  id: "",
  name: "",
  style: {},
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.objectOf(PropTypes.string),
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
};

export default Container;
