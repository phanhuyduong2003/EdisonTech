import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { useForm } from "react-hook-form";

function App() {
  const [values, setValues] = useState({
    email: "",
    password: ",",
    confirmPassword: "",
    isRead: false,
  });
  // const [errors, setErrors] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const handleChange = (event) => {
    event.persist();
    if (event.target.name === "isRead") {
      setValues({ ...values, [event.target.name]: !values.isRead });
    } else {
      setValues({ ...values, [event.target.name]: event.target.value });
    }
  };
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  // };
  console.log(errors);
  const stringJson = JSON.stringify(values);
  return (
    <div className="container">
      <h1>Đăng kí</h1>
      {/* {errors.map(error => (
        <p key={error}>Error: {error}</p>
      ))} */}
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <p>Nhập email:</p>
        <input
          {...register("email", {
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalide email address",
            },
          })}
        />
        {errors?.email && <div>{errors?.email?.message}</div>}
        <p>Nhập password: </p>
        <input
          {...register("password", {
            required: true,
            min: {
              value: 3,
              message: "min length is 3",
            },
            max: {
              value: 20,
              message: "max length is 20",
            },
          })}
          type="password"
        />
        {errors?.password && <div>{errors?.password?.message}</div>}
        <p>Nhập lại password: </p>
        <input
          type="password"
          {...register("confirmPassword", {
            required: true,
            min: {
              value: 3,
              message: "min length is 3",
            },
            max: {
              value: 20,
              message: "min length is 20",
            },
            validate: (val) => {
              if (watch("password") !== val) {
                return "Your passwords do no match";
              }
            },
          })}
        />
        {errors?.confirmPassword && (
          <div>{errors?.confirmPassword?.message} </div>
        )}
        <br />
        <br />
        <label htmlFor="">I read and accept the privacy policy</label>
        <input
          type="checkbox"
          {...register("isRead", {
            required: true,
          })}
        />
        <button type="submit">Submit</button>
      </form>
      <div className="show-json-string-setValues">{stringJson}</div>
    </div>
  );
}

export default App;
