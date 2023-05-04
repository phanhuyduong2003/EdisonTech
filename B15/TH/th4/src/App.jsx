import "./App.css";
import { useState } from "react";

function App() {
  const [values, setValues] = useState({ email: "", name: "", content: "" });
  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(values));
  };
  return (
    <div className="container">
      <h1>Đăng kí</h1>
      <form onSubmit={handleSubmit}>
        <p>Nhập name:</p>
        <input
          type="text"
          name="name"
          defaultValue={values.name}
          onChange={handleChange}
        />
        <p>Nhập email: </p>
        <input
          type="text"
          name="email"
          defaultValue={values.email}
          onChange={handleChange}
        />
        <p>Nội dung muốn gửi: </p>
        <textarea
          name="content"
          defaultValue={values.content}
          onChange={handleChange}
        />
        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
