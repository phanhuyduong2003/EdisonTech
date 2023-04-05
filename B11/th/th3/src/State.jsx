import { useState } from "react";
const DemoComponent = (props) => {
  return (
    <div>
      <div>Day la tuoi: {props.age}</div>
      <div>Day la ten: {props.displayName}</div>
    </div>
  );
};
export default function State() {
    const [age, setAge] = useState(0)
  const [name, setName] = useState("Duong");
  const onIncreaseAge = () => {
    setAge(age + 1);
  };
  return (
    <div className="container">
      <div>{age}</div>
      <button type="submit" onClick={onIncreaseAge}>
        Tang age len 1
      </button>
      <DemoComponent age={age} displayName={name} />
    </div>
  );
}
