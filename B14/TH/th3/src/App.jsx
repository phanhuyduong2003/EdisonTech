import logo from "./logo.svg";
import "./App.css";
import {
  useSearchParams,
  createSearchParams,
  Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [queryParam] = useSearchParams();
  const value = queryParam.get("type");
  setQueryParam(
  createSearchParams({
  frunt: "hello",
  xinchao: "hi",
  }).toString()
  );
  return <div>The value of 'type' is: {value}</div>;
}

export default App;
