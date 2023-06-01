import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";

test("Check input have less than 15 characters", () => {
  render(<App />);
  const input = screen.queryByTestId("input_name");
  expect(input).toBeDefined();
  fireEvent.change(input, { target: { value: "less than 15" } });
  fireEvent.keyPress(input, { key: "Enter", code: "Enter", charCode: 13 });
  const error = screen.queryByTestId("error_message");
  expect(error.textContent).toContain("Nội dung hợp lệ");
});
test("Check user type more than 15 characters", () => {
  render(<App />);
  const input = screen.queryByTestId("input_name");
  expect(input).toBeDefined();
  fireEvent.change(input, {
    target: { value: "more than 15 characters (will show error now)" },
  });
  fireEvent.keyPress(input, { key: "Enter", code: "Enter", charCode: 13 });
  const error = screen.queryByTestId("error_message");
  expect(error.textContent).not.toContain("Nội dung hợp lệ.");
  expect(error.textContent).toContain(
    "Nội dung quá dài, vui lòng đảm bảo nội dung nhỏ hơn hoặc bằng 15 ký tự"
  );
});
test("Check user do not type anything", () => {
  render(<App />);
  const input = screen.queryByTestId("input_name");
  expect(input).toBeDefined();
  fireEvent.keyPress(input, { key: "Enter", code: "Enter", charCode: 13 });
  const error = screen.queryByTestId("error_message");
  expect(error).toBeNull();
});
