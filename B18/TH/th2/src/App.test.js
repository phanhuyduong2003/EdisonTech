import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("Check current background color", () => {
  render(<App />);
  const button = screen.queryByTestId("button");
  expect(button).toBeVisible();
  const background = screen.queryByTestId("color");
  expect(background).toBeVisible();
  expect(background.style["backgroundColor"]).not.toEqual("blue");
  expect(background.style["backgroundColor"]).not.toEqual("red");
  expect(background.style["backgroundColor"]).toEqual("white");
});
test("Check background after one clicked", () => {
  render(<App />);
  const button = screen.queryByTestId("button");
  expect(button).toBeVisible();
  fireEvent.click(button)
  const background = screen.queryByTestId("color");
  expect(background).toBeVisible();
  expect(background.style["backgroundColor"]).toEqual("blue");
  expect(background.style["backgroundColor"]).not.toEqual("red");
  expect(background.style["backgroundColor"]).not.toEqual("white");
});
test("Check background after two clicked", () => {
  render(<App />);
  const button = screen.queryByTestId("button");
  expect(button).toBeVisible();
  fireEvent.click(button)
  fireEvent.click(button)
  const background = screen.queryByTestId("color");
  expect(background).toBeVisible();
  expect(background.style["backgroundColor"]).toEqual("red");
  expect(background.style["backgroundColor"]).not.toEqual("blue");
  expect(background.style["backgroundColor"]).not.toEqual("white");
});
