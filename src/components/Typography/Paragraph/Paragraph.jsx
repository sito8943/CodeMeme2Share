import React from "react";

import PropTypes from "prop-types";

// style
import "./style.scss";

const Paragraph = (props) => {
  const { id, className, style, name, children } = props;
  return (
    <p className={className} style={style} id={id} name={name}>
      {children}
    </p>
  );
};

Paragraph.defaultProps = {
  id: "",
  className: "ms-paragraph",
  style: {},
  name: "",
};

Paragraph.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.any),
  children: PropTypes.node.isRequired,
};

export default Paragraph;
