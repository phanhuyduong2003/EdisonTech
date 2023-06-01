import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("Check if not enter username and password", () => {
  render(<App />);
  
  const username = screen.queryByPlaceholderText("Enter username");
  expect(username).toBeVisible();
  fireEvent.change(username, { target: { value: "" } });

  const password = screen.queryByPlaceholderText("Enter password");
  expect(password).toBeVisible();
  fireEvent.change(password, { target: { value: "" } });

  const button = screen.queryByTestId("btn");
  expect(button.textContent).toEqual("Log in");
  fireEvent.click(button);

  const message = screen.queryByTestId("message");
  expect(message.textContent).toEqual("Please enter username and password");
});
test("Check if username or password is incorrect", () => {
  render(<App />);

  const username = screen.queryByPlaceholderText("Enter username");
  expect(username).toBeVisible();
  fireEvent.change(username, { target: { value: "phanhuyduong" } });

  const password = screen.queryByPlaceholderText("Enter password");
  expect(password).toBeVisible();
  fireEvent.change(password, { target: { value: "phanhuyduong" } });

  const button = screen.queryByTestId("btn");
  expect(button.textContent).toEqual("Log in");
  fireEvent.click(button);

  const message = screen.queryByTestId("message");
  expect(message.textContent).toEqual("Username or password is incorrect");
});
test("Check if log in is successful", () => {
  render(<App />);

  const username = screen.queryByPlaceholderText("Enter username");
  expect(username).toBeVisible();
  fireEvent.change(username, { target: { value: "phanhuyduong2003" } });

  const password = screen.queryByPlaceholderText("Enter password");
  expect(password).toBeVisible();
  fireEvent.change(password, { target: { value: "phanhuyduong2003" } });

  const button = screen.queryByTestId("btn");
  expect(button.textContent).toEqual("Log in");
  fireEvent.click(button);

  const message = screen.queryByTestId("message");
  expect(message.textContent).toEqual("Log in successful");
});
