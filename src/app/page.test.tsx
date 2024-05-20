import { expect, it, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import Page from "./page";

describe("Page Component", () => {
  const setup = () => {
    const utils = render(<Page />);
    return { ...utils };
  };
  it("should render Navbar component", () => {
    // Act
    setup();

    // Assert
    expect(screen.getByText("Features")).toBeInTheDocument();
  });

  it("should render Hero component", () => {
    // Act
    setup();

    // Assert
    expect(
      screen.getByRole("heading", {
        name: /The largest community of photo enthusiasts/i,
      })
    ).toBeInTheDocument();
  });

  it("should render Content component", () => {
    // Act
    setup();

    // Assert
    expect(
      screen.getByRole("heading", {
        name: /Snap photos and share like never before/i,
      })
    ).toBeInTheDocument();
  });

  it("should render ImageContent and ImageContentReverse component", () => {
    // Act
    setup();

    // Assert
    expect(
      screen.getAllByRole("heading", {
        name: /Sed ut perspiciatis unde omnis/i,
      })
    ).toHaveLength(2);
  });

  it("should render Testimonial component", () => {
    // Act
    setup();

    // Assert
    expect(
      screen.getByRole("heading", { name: /You’re in good company/i })
    ).toBeInTheDocument();
  });

  it("should render Signup component", () => {
    // Act
    setup();

    // Assert
    expect(
      screen.getByRole("heading", {
        name: /The largest community of photo enthusiasts/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /Contact us/i })
    ).toBeInTheDocument();
  });

  it("should render Footer component", () => {
    // Act
    setup();

    // Assert
    expect(
      screen.getByText(/© Photo, Inc. 2019. We love our users!/i)
    ).toBeInTheDocument();
  });
});
