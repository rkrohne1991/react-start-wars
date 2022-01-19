import React from "react";

import { render, screen } from "@testing-library/react";

import Logo from "./Logo.js";

describe("Header component", () => {
  test('Logo must have src = "../../assets/logo.svg" and alt = "Logo"', () => {
    render(<Logo />);
    const logo = screen.getByRole("img");
    expect(logo).toHaveAttribute("src", "/logo.svg");
    expect(logo).toHaveAttribute("alt", "Logo");
  });
});
