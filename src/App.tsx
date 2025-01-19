import { useState } from 'react';
import Alef from "./Alef";
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Alef />
    </>
  )
}

export default App
