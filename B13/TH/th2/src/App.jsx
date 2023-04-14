import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

const Loading = () => {
  return (
    <div class="loader"></div>
  );
}
export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 5000)
  }, [])
  return (
    <div className='container'>{isLoading && <Loading/> }</div>
  );
}
