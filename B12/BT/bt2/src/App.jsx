import { React, useState } from 'react';
import './App.css';
import styled from 'styled-components'

const Color = styled.div`
  width: 200px;
  height: 80px;
  background-color: ${props => props.time === 'day' ? 'blue' : 'black'};
`
function App() {
  const [time, setTime] = useState('day')
  function handleClick(value) {setTime(value)}
  return (
    <div className='container'>
      <button onClick={()=>handleClick('night')}>Night</button>
      <button onClick={()=>handleClick('day')}>Day</button>
      <Color time={time}></Color>
    </div>
  );
}

export default App;
