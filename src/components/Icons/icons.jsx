import PropTypes from "prop-types";

// emotion
import { css } from "@emotion/css";

import {
  BsArrowRight,
  BsFillRecordFill,
  BsFillShareFill,
  BsFillXCircleFill,
  BsFillXSquareFill,
  BsFillXOctagonFill,
  BsXCircle,
  BsXOctagon,
  BsXSquare,
  BsX,
  BsFillExclamationCircleFill,
  BsFillExclamationOctagonFill,
  BsFillExclamationSquareFill,
  BsExclamationCircle,
  BsExclamationOctagon,
  BsExclamationSquare,
  BsExclamation,
  BsCheckCircleFill,
  BsCheckSquareFill,
  BsCheckCircle,
  BsCheckSquare,
  BsCheck,
  BsInfoCircleFill,
  BsInfoSquareFill,
  BsInfoCircle,
  BsInfoSquare,
  BsInfo,
} from "react-icons/bs";
import {
  SiJava,
  SiJavascript,
  SiSwift,
  SiPhp,
  SiKotlin,
  SiTypescript,
  SiCplusplus,
  SiDart,
  SiGo,
  SiPython,
} from "react-icons/si";

export const JavaIcon = ({ color, size }) => (
  <SiJava className={`${color ? color : "red"} ${size ? size : "medium"}`} />
);

export const JavascriptIcon = ({ color, size }) => (
  <SiJavascript
    className={`${color ? color : "red"} ${size ? size : "medium"}`}
  />
);

export const SwiftIcon = ({ color, size }) => (
  <SiSwift className={`${color ? color : "red"} ${size ? size : "medium"}`} />
);

export const PhpIcon = ({ color, size }) => (
  <SiPhp className={`${color ? color : "red"} ${size ? size : "medium"}`} />
);

export const KotlinIcon = ({ color, size }) => (
  <SiKotlin className={`${color ? color : "red"} ${size ? size : "medium"}`} />
);

export const TypescriptIcon = ({ color, size }) => (
  <SiTypescript
    className={`${color ? color : "red"} ${size ? size : "medium"}`}
  />
);

export const CPlusPlusIcon = ({ color, size }) => (
  <span className={`${color ? color : "red"} ${size ? size : "medium"}`}>
    <SiCplusplus />
  </span>
);

export const DartIcon = ({ color, size }) => (
  <SiDart className={`${color ? color : "red"} ${size ? size : "medium"}`} />
);

export const GoIcon = ({ color, size }) => (
  <SiGo className={`${color ? color : "red"} ${size ? size : "medium"}`} />
);

export const PythonIcon = ({ color, size }) => (
  <SiPython className={`${color ? color : "red"} ${size ? size : "medium"}`} />
);

export const RightArrowIcon = ({ color, size }) => (
  <BsArrowRight
    className={`${color ? color : "red"} ${size ? size : "medium"}`}
  />
);

export const DotIcon = ({ color, size }) => (
  <BsFillRecordFill
    className={`${color ? color : "red"} ${size ? size : "medium"}`}
  />
);

export const ShareIcon = ({ color, size }) => (
  <BsFillShareFill
    className={`${color ? color : "red"} ${size ? size : "medium"}`}
  />
);

// x
export const FilledCircleXIcon = ({ color, size }) => (
  <BsFillXCircleFill
    className={`${color ? color : "red"} ${size ? size : "medium"}`}
  />
);

export const FilledSquareXIcon = ({ color, size }) => (
  <BsFillXSquareFill
    className={`${color ? color : "red"} ${size ? size : "medium"}`}
  />
);

export const FilledOctoganXIcon = ({ color, size }) => (
  <BsFillXOctagonFill
    className={`${color ? color : "red"} ${size ? size : "medium"}`}
  />
);

export const CircleXIcon = ({ color, size }) => (
  <BsXCircle className={`${color ? color : "red"} ${size ? size : "medium"}`} />
);

export const OctoganXIcon = ({ color, size }) => (
  <BsXOctagon
    className={`${color ? color : "red"} ${size ? size : "medium"}`}
  />
);

export const SquareXIcon = ({ color, size }) => (
  <BsXSquare className={`${color ? color : "red"} ${size ? size : "medium"}`} />
);

export const XIcon = ({ color, size }) => (
  <BsX className={`${color ? color : "red"} ${size ? size : "medium"}`} />
);

// exclamation
export const FilledCircleExclamationIcon = ({ color, size }) => (
  <BsFillExclamationCircleFill
    className={`${color ? color : "red"} ${size ? size : "medium"}`}
  />
);

export const FilledSquareExclamationIcon = ({ color, size }) => (
  <BsFillExclamationSquareFill
    className={`${color ? color : "red"} ${size ? size : "medium"}`}
  />
);

export const FilledOctoganExclamationIcon = ({ color, size }) => (
  <BsFillExclamationOctagonFill
    className={`${color ? color : "red"} ${size ? size : "medium"}`}
  />
);

export const CircleExclamationIcon = ({ color, size }) => (
  <BsExclamationCircle
    className={`${color ? color : "red"} ${size ? size : "medium"}`}
  />
);

export const OctoganExclamationIcon = ({ color, size }) => (
  <BsExclamationOctagon
    className={`${color ? color : "red"} ${size ? size : "medium"}`}
  />
);

export const SquareExclamationIcon = ({ color, size }) => (
  <BsExclamationSquare
    className={`${color ? color : "red"} ${size ? size : "medium"}`}
  />
);

export const ExclamationIcon = ({ color, size }) => (
  <BsExclamation
    className={`${color ? color : "red"} ${size ? size : "medium"}`}
  />
);

// check
export const FilledCircleCheckIcon = ({ color, size }) => (
  <BsCheckCircleFill
    className={`${color ? color : "red"} ${size ? size : "medium"}`}
  />
);

export const FilledSquareCheckIcon = ({ color, size }) => (
  <BsCheckSquareFill
    className={`${color ? color : "red"} ${size ? size : "medium"}`}
  />
);

export const CircleCheckIcon = ({ color, size }) => (
  <BsCheckCircle
    className={`${color ? color : "red"} ${size ? size : "medium"}`}
  />
);

export const SquareCheckIcon = ({ color, size }) => (
  <BsCheckSquare
    className={`${color ? color : "red"} ${size ? size : "medium"}`}
  />
);

export const CheckIcon = ({ color, size }) => (
  <BsCheck className={`${color ? color : "red"} ${size ? size : "medium"}`} />
);

// info
export const FilledCircleInfoIcon = ({ color, size }) => (
  <BsInfoCircleFill
    className={`${color ? color : "red"} ${size ? size : "medium"}`}
  />
);

export const FilledSquareInfoIcon = ({ color, size }) => (
  <BsInfoSquareFill
    className={`${color ? color : "red"} ${size ? size : "medium"}`}
  />
);

export const CircleInfoIcon = ({ color, size }) => (
  <BsInfoCircle
    className={`${color ? color : "red"} ${size ? size : "medium"}`}
  />
);

export const SquareInfoIcon = ({ color, size }) => (
  <BsInfoSquare
    className={`${color ? color : "red"} ${size ? size : "medium"}`}
  />
);

export const InfoIcon = ({ color, size }) => (
  <BsInfo className={`${color ? color : "red"} ${size ? size : "medium"}`} />
);

const icons = {
  // java
  "java-icon": <JavaIcon />,
  javaicon: <JavaIcon />,
  java: <JavaIcon />,
  // java script
  "java-script-icon": <JavascriptIcon />,
  "javascript-icon": <JavascriptIcon />,
  javascripticon: <JavascriptIcon />,
  javascript: <JavascriptIcon />,
  // typescript
  "type-script-icon": <TypescriptIcon />,
  "typescript-icon": <TypescriptIcon />,
  typescripticon: <TypescriptIcon />,
  typescript: <TypescriptIcon />,
  // swift
  "swift-icon": <SwiftIcon />,
  swifticon: <SwiftIcon />,
  swift: <SwiftIcon />,
  // php
  "php-icon": <PhpIcon />,
  phpicon: <PhpIcon />,
  php: <PhpIcon />,
  // kotlin
  "kotlin-icon": <KotlinIcon />,
  kotlinicon: <KotlinIcon />,
  kotlin: <KotlinIcon />,
  // cpp
  "cpp-icon": <CPlusPlusIcon />,
  "cplusplus-icon": <CPlusPlusIcon />,
  "c++": <CPlusPlusIcon />,
  cplusplus: <CPlusPlusIcon />,
  cppicon: <CPlusPlusIcon />,
  cpp: <CPlusPlusIcon />,
  // dart
  "dart-icon": <DartIcon />,
  darticon: <DartIcon />,
  dart: <DartIcon />,
  // go
  "go-icon": <GoIcon />,
  goicon: <GoIcon />,
  go: <GoIcon />,
  // python
  "python-icon": <PythonIcon />,
  pythonicon: <PythonIcon />,
  python: <PythonIcon />,
  // others
  // dots
  "dot-icon": <DotIcon />,
  doticon: <DotIcon />,
  dot: <DotIcon />,
  // share
  "share-icon": <ShareIcon />,
  shareicon: <ShareIcon />,
  share: <ShareIcon />,
  // x
  // filled
  "filledcirclex-icon": <FilledCircleXIcon />,
  "filledoctoganx-icon": <FilledOctoganXIcon />,
  "filledsquarex-icon": <FilledSquareXIcon />,
  filledcirclexicon: <FilledCircleXIcon />,
  filledoctoganxicon: <FilledOctoganXIcon />,
  filledsquarexicon: <FilledSquareXIcon />,
  // empty
  "circlex-icon": <CircleXIcon />,
  "octoganx-icon": <OctoganXIcon />,
  "squarex-icon": <SquareXIcon />,
  circlexicon: <CircleXIcon />,
  octoganxicon: <OctoganXIcon />,
  squarexicon: <SquareXIcon />,
  // no border
  "x-icon": <XIcon />,
  xicon: <XIcon />,
  x: <XIcon />,
  // exclamation
  // filled
  "filledcircleexclamation-icon": <FilledCircleExclamationIcon />,
  "filledoctoganexclamation-icon": <FilledOctoganExclamationIcon />,
  "filledsquareexclamation-icon": <FilledSquareExclamationIcon />,
  filledcircleexclamationicon: <BsFillExclamationCircleFill />,
  filledoctoganexclamationicon: <FilledOctoganExclamationIcon />,
  filledsquareexclamationicon: <FilledSquareExclamationIcon />,
  // empty
  "circleexclamation-icon": <CircleExclamationIcon />,
  "octoganexclamation-icon": <OctoganExclamationIcon />,
  "squareexclamation-icon": <SquareExclamationIcon />,
  circleexclamationicon: <CircleExclamationIcon />,
  octoganexclamationicon: <OctoganExclamationIcon />,
  squareexclamationicon: <SquareExclamationIcon />,
  // check
  // filled
  "filledcirclecheck-icon": <FilledCircleCheckIcon />,
  "filledsquarecheck-icon": <FilledSquareCheckIcon />,
  filledcirclecheckicon: <FilledCircleCheckIcon />,
  filledsquarecheckicon: <FilledSquareCheckIcon />,
  // empty
  "circlecheck-icon": <CircleCheckIcon />,
  "squarecheck-icon": <SquareCheckIcon />,
  circlecheckicon: <CircleCheckIcon />,
  squarecheckicon: <SquareCheckIcon />,
  // info
  // filled
  "filledcircleinfo-icon": <FilledCircleInfoIcon />,
  "filledsquareinfo-icon": <FilledSquareInfoIcon />,
  filledcircleinfoicon: <FilledCircleInfoIcon />,
  filledsquareinfoicon: <FilledSquareInfoIcon />,
  // empty
  "circleinfo-icon": <CircleInfoIcon />,
  "squareinfo-icon": <SquareInfoIcon />,
  circleinfoicon: <CircleInfoIcon />,
  squareinfoicon: <SquareInfoIcon />,
};

const sizes = [
  "xx-small",
  "x-small",
  "smaller",
  "small",
  "medium",
  "large",
  "larger",
  "x-large",
  "xx-large",
];

const Icon = (props) => {
  const { color, size, icon, id, className, style } = props;

  const emotionCss = css({
    svg: {
      fontSize: size,
      color: color,
      background: "aliceblue",
      borderRadius: "100%",
    },
  });

  return (
    <span id={id} style={{ ...style }} className={`${className} ${emotionCss}`}>
      {icons[icon]}
    </span>
  );
};

Icon.defaultProps = {
  color: "red",
  size: "medium",
  id: "",
  className: "",
  style: {},
};

Icon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.any),
  icon: PropTypes.string.isRequired,
};

export default Icon;
