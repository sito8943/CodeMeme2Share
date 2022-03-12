import P from "./Paragraph/Paragraph";
import T from "./Title/Title";
import C from "./Container/Container";

import PropTypes from "prop-types";

// styles
import "./colors.scss";
import "./style.scss";

const MemeShare = (props) => {
  const {
    backgroundColor,
    backgroundImage,
    id,
    className,
    name,
    style,
    children,
  } = props;
  return (
    <div
      id={id}
      className={className}
      name={name}
      style={{
        ...style,
        backgroundColor,
        backgroundImage,
      }}
    >
      {children}
    </div>
  );
};

MemeShare.defaultProps = {
  backgroundColor: "#4158D0",
  backgroundImage:
    "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
  className: "meme-share",
  id: "",
  name: "",
  style: {},
};

MemeShare.propTypes = {
  backgroundColor: PropTypes.string,
  backgroundImage: PropTypes.string,
  children: PropTypes.node.isRequired,
  style: PropTypes.objectOf(PropTypes.string),
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
};

export const Paragraph = P;

export const Title = T;

export const Container = C;

export default MemeShare;
