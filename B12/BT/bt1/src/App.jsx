import {React, useRef} from 'react';
import logo from './logo.svg';
import './App.css';
import styles from './styles.module.css'

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>LeftSide</div>
      <div className={styles.content}>RightSide</div>
    </div>
  );
}

export default App;
