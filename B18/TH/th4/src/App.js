import { useState } from "react";
import "./App.css";
import { FetchAPI } from "./FetchAPI";
import { useEffect } from "react";

function App() {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const handleFetchAPI = () => {
    setLoading(true);
    return FetchAPI((resolve) => {
      setTimeout(() => {
        resolve();
      }, 3000);
    });
  };
  useEffect(() => {
    handleFetchAPI()
      .then((data) => {
        setData(data || "Hello World");
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
      }}
    >
      <div data-testid="data">{data}</div>
      <div>{loading && <div>Loading</div>}</div>
    </div>
  );
}

export default App;
