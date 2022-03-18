import React from "react";

import PropTypes from "prop-types";

// own component
import Container from "../Container";

// styles
import "./style.scss";

const Rotate = (props) => {
  const {
    children,
    direction,
    delay,
    loop,
    iteration,
    id,
    className,
    style,
    name,
  } = props;

  return (
    <Container
      id={id}
      className={className}
      name={name}
      style={style}
      options={{ animation: `${direction} ${delay} ${loop} ${iteration}` }}
    >
      {children}
    </Container>
  );
};

Rotate.defaultProps = {
  direction: "right",
  delay: "2.5s",
  loop: "infinite",
  iteration: "linear",
  id: "",
  className: "",
  style: {},
  name: "",
};

Rotate.propTypes = {
  direction: PropTypes.string,
  delay: PropTypes.string,
  loop: PropTypes.string,
  iteration: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.any),
  name: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Rotate;
