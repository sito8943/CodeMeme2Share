import randomInteger from "random-int";

import P from "./components/Typography/Paragraph/Paragraph";
import T from "./components/Typography/Title/Title";
import C from "./components/Container/Container";
import B from "./components/Button/Button";
import AD from "./components/AppleDots/AppleDots";

import PropTypes from "prop-types";

// global styles
import "./assets/theme/colors.scss";
import "./assets/theme/iconSizes.scss";
import * as gradients from "./assets/theme/gradients";

// local styles
import "./style.scss";

const MemeShare = (props) => {
  const {
    backgroundColor,
    backgroundImage,
    background,
    id,
    className,
    name,
    style,
    children,
  } = props;

  if (background === "random") {
    const gradientsKey = Object.keys(gradients);
    const ran = randomInteger(0, gradientsKey.length - 1);
    style.backgroundColor = gradients[gradientsKey[ran]].backgroundColor;
    style.backgroundImage = gradients[gradientsKey[ran]].backgroundImage;
  } else if (background !== "") {
    style.backgroundColor = gradients[background].backgroundColor;
    style.backgroundImage = gradients[background].backgroundImage;
  } else {
    style.backgroundColor = backgroundColor;
    style.backgroundImage = backgroundImage;
  }

  return (
    <div
      id={id}
      className={className}
      name={name}
      style={{
        ...style,
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
  background: "",
  className: "meme-share",
  id: "",
  name: "",
  style: {},
};

MemeShare.propTypes = {
  backgroundColor: PropTypes.string,
  backgroundImage: PropTypes.string,
  background: PropTypes.string,
  children: PropTypes.node.isRequired,
  style: PropTypes.objectOf(PropTypes.any),
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
};

export const Paragraph = P;

export const Title = T;

export const Container = C;

export const Button = B;

export const AppleDots = AD;

export default MemeShare;
