import React, { useState } from "react";

export default function App() {
  const [values, setValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    isRead: false,
  });
  const [errors, setErrors] = useState([]);
  const handleChange = (e) => {
    e.persist();
    if (e.target.name === "isRead") {
      setValues({ ...values, [e.target.name]: !values.isRead });
    } else {
      setValues({ ...values, [e.target.name]: e.target.value });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (errors.length > 0) {
      setErrors(errors);
      return;
    }
  };
  const stringJson = JSON.stringify(values);
  function validate() {
    const { email, password, confirmPassword, isRead } = values;
    const errors = [];
    if (email.length < 5) {
      errors.push("Email should be at least 5 characters long");
    }
    if (email.split("").filter((x) => x === "@").length !== 1) {
      errors.push("Email should contain a @");
    }
    if (email.indexOf(".") === -1) {
      errors.push("Email should contain at least one dot");
    }
    if (password.length < 6) {
      errors.push("Password should be at least 6 characters long");
    }
    if (password !== confirmPassword) {
      errors.push("Confirm password must be same as password");
    }
    if (!isRead) {
      errors.push("You must be accepted privacy policy");
    }
    return errors;
  }
  return (
    <div className="container">
      <h1>Đăng kí</h1>
      {errors.map((error) => (
        <p key={error}>Error: {error}</p>
      ))}
      <form onSubmit={handleSubmit}>
        <p>Nhập email:</p>
        <input
          type="text"
          name="email"
          defaultValue={values.email}
          onChange={handleChange}
        />
        <p>Nhập password</p>
        <input
          type="text"
          name="password"
          defaultValue={values.password}
          onChange={handleChange}
        />
        <p>Nhập password</p>
        <input
          type="text"
          name="confirmPassword"
          defaultValue={values.confirmPassword}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>I read and accept the privacy policy:</label>
        <input
          type="checkbox"
          name="isRead"
          checked={values.isRead}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
      <div className="show-json-string-setValues">{stringJson}</div>
    </div>
  );
}
