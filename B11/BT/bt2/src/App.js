import logo from "./logo.svg";
import "./App.css";
import UserForm from "./UserForm";
import Greeting from "./Greeting";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState("");
  const handleInput = (e) => {
    setUserInput(e.target.value);
  }
  return (
    <div>
      <UserForm inputValue={ handleInput} />
      <Greeting name={userInput}/>
    </div>
  );
}

export default App;
