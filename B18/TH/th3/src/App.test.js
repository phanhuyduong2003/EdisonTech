import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store/store";

test("Check render", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const number = screen.queryByTestId("count");
  const addButton = screen.queryByTestId("add");
  const subButton = screen.queryByTestId("sub");
  expect(number.textContent).toEqual("0");
});
test("Check click add button", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const number = screen.queryByTestId("count");
  const addButton = screen.queryByTestId("add");
  const subButton = screen.queryByTestId("sub");
  fireEvent.click(addButton);
  expect(number.textContent).toEqual("1");
  fireEvent.click(addButton);
  expect(number.textContent).toEqual("2");
  fireEvent.click(subButton);
  fireEvent.click(subButton);
});
test("Check click sub button", async () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const number = screen.queryByTestId("count");
  const addButton = screen.queryByTestId("add");
  const subButton = screen.queryByTestId("sub");
  fireEvent.click(subButton);
  expect(number.textContent).toEqual("0");
  fireEvent.click(addButton)
  fireEvent.click(addButton)
  fireEvent.click(subButton)
  expect(number.textContent).toEqual('1')
});
