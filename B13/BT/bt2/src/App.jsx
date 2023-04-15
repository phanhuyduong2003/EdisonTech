import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(new Date());
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <div>
      <div>Current time: {time.toLocaleTimeString()}</div>
    </div>
  );
}

export default App;
