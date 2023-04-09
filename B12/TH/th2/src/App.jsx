import logo from './logo.svg';
import './App.css';
import { React, useState } from 'react';
import styles from './styles.module.css'

function App() {
  const [numClicked, setNumClicked] = useState(0);
  const handleClick = () => {
    setNumClicked((current) => {
      return current += 1;
    })
  }
  const textStyle = (numClicked % 2 === 0) ? styles.textBlue : styles.textRed;
  return (
    <div className="App">
      <button onClick={handleClick}>Click here</button>
      <h6 className={textStyle}>You clicked {numClicked} times</h6>
    </div>
  );
}

export default App;
