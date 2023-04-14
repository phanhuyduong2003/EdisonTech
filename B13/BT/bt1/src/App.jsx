import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [number1, setNumber1] = useState();
  const [number2, setNumber2] = useState();
  const [sum, setSum] = useState();
  const [multiply, setMultiply] = useState();
  const handleSum = () => {
    const num1 = parseInt(number1);
    const num2 = parseInt(number2);
    setSum(num1 + num2);
  };
  const handleMultiply = () => {
    setMultiply(number1 * number2);
  };
  return (
    <div>
      <input type='number'
        placeholder="Enter number 1"
        value={number1}
        onChange={(e) => setNumber1(e.target.value)}
      />
      <br />
      <input type='number'
        placeholder="Enter number 2"
        value={number2}
        onChange={(e) => setNumber2(e.target.value)}
      />
      <br />
      <button onClick={handleSum}>Tính tổng</button>
      <div>
        Sum of {number1} and {number2} is: {sum}
      </div>
      <button onClick={handleMultiply}>Tính tích</button>
      <div>
        Multiply of {number1} and {number2} is: {multiply}
      </div>
    </div>
  );
}

export default App;
