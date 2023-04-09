import logo from "./logo.svg";
import "./App.css";
import image from "./assets/images/space.png";
import { base64Image } from "./components/Base64";

function App() {
  return (
    <div className="container">
      <p>Image</p>
      <img src={image} alt="" style={{ width: 305, height: 320 }} />
      <p>Image use required</p>
      <img
        src={require("./assets/images/space.png")}
        alt=""
        style={{ width: 305, height: 320 }}
      />
      <p>Image use link</p>
      <img src="https://i.imgur.com/0BJobQo.jpg" alt="" />
      <p>Image use base64</p>
      <img src={base64Image} alt="" />
      <p>Image SVG format</p>
      <img src={logo} alt="" />
    </div>
  );
}

export default App;
