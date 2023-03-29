import logo from "./logo.svg";
import "./App.css";

function App() {
  const array = ["dog", "cat", "tiger", "lion", "fish"];
  const person = { name: "Duong", age: 20, country: "Viet Nam" };
  return (
    <div className="App">
      {array.map((animal, index) => {
        return <p key={index}>{animal}</p>;
      })}
      <p>Name: {person.name}</p>
      <p>Age: {person.age}</p>
      <p>Country: {person.country}</p>
    </div>
  );
}

export default App;
