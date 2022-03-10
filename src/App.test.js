import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("button has correct initial color", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  expect(colorButton).toHaveStyle({ backgroundColor: "red" });

  fireEvent.click(colorButton);

  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });

  expect(colorButton).toHaveTextContent("Change to red");
});

test("initial conditions", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  expect(colorButton).toBeEnabled();

  const checkBox = screen.getByRole("checkbox");

  expect(checkBox).not.toBeChecked();
});

test("button disabled after checkbox checked", () => {
  render(<App />);
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  const checkbox = screen.getByRole("checkbox");

  fireEvent.click(checkbox);

  expect(colorButton).toBeDisabled();

  fireEvent.click(checkbox);

  expect(colorButton).toBeEnabled();
});
