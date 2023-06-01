import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, selectCount } from "./store/count";

function App() {
  // const [count, setCount] = useState(0);
  const { count } = useSelector(selectCount);
  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(increment());
  };
  const handleSub = () => {
    dispatch(decrement());
  };
  return (
    <div>
      <button onClick={handleSub} data-testid="sub">
        -
      </button>
      <span data-testid="count">{count}</span>
      <button onClick={handleAdd} data-testid="add">
        +
      </button>
    </div>
  );
}

export default App;
