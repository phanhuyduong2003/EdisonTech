import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { useMemo } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const color = useMemo(() => {
    if (number === 0) {
      return "white";
    }
    if (number % 2 === 0) {
      return "red";
    }
    if (number % 2 !== 0) {
      return "blue";
    }
    return "white";
  }, [number]);
  const handleClick = () => {
    setNumber(number + 1);
  };
  return (
    <div>
      <button onClick={handleClick} data-testid="button">
        Click here
      </button>
      <div
        style={{
          width: 80,
          height: 30,
          borderRadius: 6,
          backgroundColor: color,
        }}
        data-testid="color"
      ></div>
    </div>
  );
}

export default App;
