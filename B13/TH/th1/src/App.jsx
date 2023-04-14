import React from "react";
import { useState } from "react";

export default function App() {
  const [age, setAge] = useState(5);
  const onChangeAge = () => {
    setAge(age + 1);
  };
  return (<div><div>Tuổi: {age}</div>
  <button onClick={onChangeAge}>Tăng tuổi thêm 1</button></div>);
}
