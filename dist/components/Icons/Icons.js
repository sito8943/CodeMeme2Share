import PropTypes from "prop-types";
import { BsArrowRight, BsFillRecordFill, BsFillShareFill } from "react-icons/bs";
import { SiJava, SiJavascript, SiSwift, SiPhp, SiKotlin, SiTypescript, SiCplusplus, SiDart, SiGo, SiPython } from "react-icons/si";
import { jsx as _jsx } from "react/jsx-runtime";
export const JavaIcon = ({
  color,
  size
}) => /*#__PURE__*/_jsx(SiJava, {
  className: `${color ? color : "red"} ${size ? size : "medium"}`
});
export const JavascriptIcon = ({
  color,
  size
}) => /*#__PURE__*/_jsx(SiJavascript, {
  className: `${color ? color : "red"} ${size ? size : "medium"}`
});
export const SwiftIcon = ({
  color,
  size
}) => /*#__PURE__*/_jsx(SiSwift, {
  className: `${color ? color : "red"} ${size ? size : "medium"}`
});
export const PhpIcon = ({
  color,
  size
}) => /*#__PURE__*/_jsx(SiPhp, {
  className: `${color ? color : "red"} ${size ? size : "medium"}`
});
export const KotlinIcon = ({
  color,
  size
}) => /*#__PURE__*/_jsx(SiKotlin, {
  className: `${color ? color : "red"} ${size ? size : "medium"}`
});
export const TypescriptIcon = ({
  color,
  size
}) => /*#__PURE__*/_jsx(SiTypescript, {
  className: `${color ? color : "red"} ${size ? size : "medium"}`
});
export const CPlusPlusIcon = ({
  color,
  size
}) => /*#__PURE__*/_jsx("span", {
  className: `${color ? color : "red"} ${size ? size : "medium"}`,
  children: /*#__PURE__*/_jsx(SiCplusplus, {})
});
export const DartIcon = ({
  color,
  size
}) => /*#__PURE__*/_jsx(SiDart, {
  className: `${color ? color : "red"} ${size ? size : "medium"}`
});
export const GoIcon = ({
  color,
  size
}) => /*#__PURE__*/_jsx(SiGo, {
  className: `${color ? color : "red"} ${size ? size : "medium"}`
});
export const PythonIcon = ({
  color,
  size
}) => /*#__PURE__*/_jsx(SiPython, {
  className: `${color ? color : "red"} ${size ? size : "medium"}`
});
export const RightArrowIcon = ({
  color,
  size
}) => /*#__PURE__*/_jsx(BsArrowRight, {
  className: `${color ? color : "red"} ${size ? size : "medium"}`
});
export const DotIcon = ({
  color,
  size
}) => /*#__PURE__*/_jsx(BsFillRecordFill, {
  className: `${color ? color : "red"} ${size ? size : "medium"}`
});
export const ShareIcon = ({
  color,
  size
}) => /*#__PURE__*/_jsx(BsFillShareFill, {
  className: `${color ? color : "red"} ${size ? size : "medium"}`
});
const icons = {
  // java
  "java-icon": /*#__PURE__*/_jsx(JavaIcon, {}),
  javaicon: /*#__PURE__*/_jsx(JavaIcon, {}),
  java: /*#__PURE__*/_jsx(JavaIcon, {}),
  // java script
  "java-script-icon": /*#__PURE__*/_jsx(JavascriptIcon, {}),
  "javascript-icon": /*#__PURE__*/_jsx(JavascriptIcon, {}),
  javascripticon: /*#__PURE__*/_jsx(JavascriptIcon, {}),
  javascript: /*#__PURE__*/_jsx(JavascriptIcon, {}),
  // typescript
  "type-script-icon": /*#__PURE__*/_jsx(TypescriptIcon, {}),
  "typescript-icon": /*#__PURE__*/_jsx(TypescriptIcon, {}),
  typescripticon: /*#__PURE__*/_jsx(TypescriptIcon, {}),
  typescript: /*#__PURE__*/_jsx(TypescriptIcon, {}),
  // swift
  "swift-icon": /*#__PURE__*/_jsx(SwiftIcon, {}),
  swifticon: /*#__PURE__*/_jsx(SwiftIcon, {}),
  swift: /*#__PURE__*/_jsx(SwiftIcon, {}),
  // php
  "php-icon": /*#__PURE__*/_jsx(PhpIcon, {}),
  phpicon: /*#__PURE__*/_jsx(PhpIcon, {}),
  php: /*#__PURE__*/_jsx(PhpIcon, {}),
  // kotlin
  "kotlin-icon": /*#__PURE__*/_jsx(KotlinIcon, {}),
  kotlinicon: /*#__PURE__*/_jsx(KotlinIcon, {}),
  kotlin: /*#__PURE__*/_jsx(KotlinIcon, {}),
  // cpp
  "cpp-icon": /*#__PURE__*/_jsx(CPlusPlusIcon, {}),
  "cplusplus-icon": /*#__PURE__*/_jsx(CPlusPlusIcon, {}),
  "c++": /*#__PURE__*/_jsx(CPlusPlusIcon, {}),
  cplusplus: /*#__PURE__*/_jsx(CPlusPlusIcon, {}),
  cppicon: /*#__PURE__*/_jsx(CPlusPlusIcon, {}),
  cpp: /*#__PURE__*/_jsx(CPlusPlusIcon, {}),
  // dart
  "dart-icon": /*#__PURE__*/_jsx(DartIcon, {}),
  darticon: /*#__PURE__*/_jsx(DartIcon, {}),
  dart: /*#__PURE__*/_jsx(DartIcon, {}),
  // go
  "go-icon": /*#__PURE__*/_jsx(GoIcon, {}),
  goicon: /*#__PURE__*/_jsx(GoIcon, {}),
  go: /*#__PURE__*/_jsx(GoIcon, {}),
  // python
  "python-icon": /*#__PURE__*/_jsx(PythonIcon, {}),
  pythonicon: /*#__PURE__*/_jsx(PythonIcon, {}),
  python: /*#__PURE__*/_jsx(PythonIcon, {})
};
const sizes = ["xx-small", "x-small", "smaller", "small", "medium", "large", "larger", "x-large", "xx-larger"];

const Icon = props => {
  const {
    color,
    size,
    icon,
    id,
    className,
    style
  } = props;
  return /*#__PURE__*/_jsx("span", {
    id: id,
    style: { ...style
    },
    className: `${className} ${color} ${sizes.indexOf(size) > -1 ? size : ""}`,
    children: icons[icon]
  });
};

Icon.defaultProps = {
  color: "red",
  size: "medium",
  id: "",
  className: "",
  style: {}
};
Icon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.any),
  icon: PropTypes.string.isRequired
};
export default Icon;