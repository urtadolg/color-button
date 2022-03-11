import { render, screen, fireEvent } from "@testing-library/react";
import App, { formatColorName } from "./App";

test("button has correct initial color", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });

  expect(colorButton).toHaveStyle({ backgroundColor: "mediumVioletRed" });

  fireEvent.click(colorButton);

  expect(colorButton).toHaveStyle({ backgroundColor: "midnightBlue" });

  expect(colorButton).toHaveTextContent("Change to Medium Violet Red");
});

test("initial conditions", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });

  expect(colorButton).toBeEnabled();

  const checkBox = screen.getByRole("checkbox");

  expect(checkBox).not.toBeChecked();
});

test("button disabled after checkbox checked", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });

  fireEvent.click(checkbox);

  expect(colorButton).toBeDisabled();

  fireEvent.click(checkbox);

  expect(colorButton).toBeEnabled();
});

test("button workflow behaviour", () => {
  render(<App />);
  const btn = screen.getByRole("button", { name: "Change to Midnight Blue" });
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });

  fireEvent.click(checkbox);
  expect(btn).toHaveStyle({ backgroundColor: "gray" });
  fireEvent.click(checkbox);
  expect(btn).toHaveStyle({ backgroundColor: "mediumVioletRed" });

  fireEvent.click(btn);
  fireEvent.click(checkbox);
  expect(btn).toHaveStyle({ backgroundColor: "gray" });
  fireEvent.click(checkbox);
  expect(btn).toHaveStyle({ backgroundColor: "midnightBlue" });
});

describe("Format Color Name Group", () => {
  test("Simple color name works", () => {
    expect(formatColorName("Red")).toBe("Red");
  });
  test("Single capital letter works", () => {
    expect(formatColorName("MidnightBlue")).toBe("Midnight Blue");
  });
  test("Multiple capital letter works", () => {
    expect(formatColorName("MediumVioletRed")).toBe("Medium Violet Red");
  });
});
