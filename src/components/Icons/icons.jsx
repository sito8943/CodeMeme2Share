import {
  BsArrowRight,
  BsFillRecordFill,
  BsFillShareFill,
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
  <span className={`${color} ${size}`}>
    <SiJava />
  </span>
);

export const JavascriptIcon = ({ color, size }) => (
  <span className={`${color} ${size}`}>
    <SiJavascript />
  </span>
);

export const SwiftIcon = ({ color, size }) => (
  <span className={`${color} ${size}`}>
    <SiSwift />
  </span>
);

export const PhpIcon = ({ color, size }) => (
  <span className={`${color} ${size}`}>
    <SiPhp />
  </span>
);

export const KotlinIcon = ({ color, size }) => (
  <span className={`${color} ${size}`}>
    <SiKotlin />
  </span>
);

export const TypescriptIcon = ({ color, size }) => (
  <span className={`${color} ${size}`}>
    <SiTypescript />
  </span>
);

export const CPlusPlusIcon = ({ color, size }) => (
  <span className={`${color} ${size}`}>
    <SiCplusplus />
  </span>
);

export const DartIcon = ({ color, size }) => (
  <span className={`${color} ${size}`}>
    <SiDart />
  </span>
);

export const GoIcon = ({ color, size }) => (
  <span className={`${color} ${size}`}>
    <SiGo />
  </span>
);

export const PythonIcon = ({ color, size }) => (
  <span className={`${color} ${size}`}>
    <SiPython />
  </span>
);

export const RightArrowIcon = ({ color, size }) => (
  <span className={`${color} ${size}`}>
    <BsArrowRight />
  </span>
);

export const DotIcon = ({ color, size }) => (
  <span className={`${color} ${size}`}>
    <BsFillRecordFill />
  </span>
);

export const ShareIcon = ({ color, size }) => (
  <span className={`${color} ${size}`}>
    <BsFillShareFill />
  </span>
);
