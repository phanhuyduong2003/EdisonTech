import { useState } from "react";
import "./App.css";

function App() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const handleChangeUserName = (event) => {
    setUserName(event.target.value);
  };
  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!username && !password) {
      setMessage("Please enter username and password");
    } else {
      if (username !== "phanhuyduong2003" || password !== "phanhuyduong2003") {
        setMessage("Username or password is incorrect");
      }
    }
    if (username && password === "phanhuyduong2003") {
      setMessage("Log in successful");
    }
  };
  return (
    <div>
      <form
        action=""
        style={{
          display: "flex",
          flexDirection: "column",
          width: 300,
          margin: 10,
        }}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Enter username"
          style={{ margin: 10 }}
          onChange={handleChangeUserName}
        />
        <input
          type="password"
          placeholder="Enter password"
          name="password"
          style={{ margin: 10 }}
          onChange={handleChangePassword}
        />
        <button
          type="submit"
          style={{ margin: 10, width: 80 }}
          data-testid="btn"
        >
          Log in
        </button>
      </form>
      {message && <div data-testid="message">{message}</div>}
    </div>
  );
}

export default App;
