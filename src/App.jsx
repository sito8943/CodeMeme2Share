import randomInteger from "random-int";

import Paragraph from "./components/Typography/Paragraph/Paragraph";
import Title from "./components/Typography/Title/Title";
import Container from "./components/Container/Container";
import Button from "./components/Button/Button";
import FileButton from "./components/Button/FileButton/FileButton";
import Icon from "./components/Icons/Icons";
import AppleDots from "./components/AppleDots/AppleDots";

import PropTypes from "prop-types";

// global styles
import "./assets/theme/colors.scss";
import "./assets/theme/iconSizes.scss";
import "./assets/theme/animations.scss";
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

export { Paragraph, Title, Container, FileButton, Button, Icon, AppleDots };

export default MemeShare;
