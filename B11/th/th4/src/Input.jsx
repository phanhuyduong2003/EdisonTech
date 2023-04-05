import React from "react";
import { useState } from "react";

export default function Input() {
  const [userInput, setUserInput] = useState("");
  const handleInputChange = (e) => {
    setUserInput(e.target.value);
    };
    const handleButtonClick = (e) => {
        alert(userInput);
    }
  return (
    <div>
      <input
        type="text"
        name="user"
        placeholder="Please type something"
        onChange={handleInputChange}
      />
      <button onClick={handleButtonClick}>Print</button>
    </div>
  );
}
