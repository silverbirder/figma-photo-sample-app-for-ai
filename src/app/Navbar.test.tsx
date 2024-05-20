import { expect, it, describe } from "vitest";
import { render } from "@testing-library/react";
import Navbar from "./Navbar";

describe("Navbar Component", () => {
  const setup = () => {
    const utils = render(<Navbar />);

    return { ...utils };
  };

  it("should render correctly and match snapshot", () => {
    // Act
    const { asFragment } = setup();

    // Assert
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render the logo", () => {
    // Act
    const { getByText } = setup();

    // Assert
    expect(getByText("photo")).toBeDefined();
  });

  it("should render all navigation links", () => {
    // Act
    const { getByText } = setup();

    // Assert
    const navLinks = ["Features", "Pricing", "Community", "Support"];
    navLinks.forEach((linkText) => {
      expect(getByText(linkText)).toBeDefined();
    });
  });

  it("should render the login and register buttons", () => {
    // Act
    const { getByRole } = setup();

    // Assert
    expect(getByRole("button", { name: "Log in" })).toBeDefined();
    expect(getByRole("button", { name: "Register" })).toBeDefined();
  });
});
