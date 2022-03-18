import { render, screen } from "@testing-library/react";
import Template from "./Template";
import { jsx as _jsx } from "react/jsx-runtime";
test("renders learn react link", () => {
  render( /*#__PURE__*/_jsx(Template, {}));
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});