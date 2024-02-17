
import './App.css'
import Board from './Components/Board'

function App() {
  return (
    <div >
      <Board/>
    </div>
  )
}

export default App

/*import { useState } from 'react';

const App = () => {
  let [value, setValue] = useState(0);

  const clickHandler = ()=>{
    setValue((value)=>{
      return value+1
    })
  }

  return (
    <div>
      <button onClick={clickHandler} type='button'>Click me</button>
      <h2 style={{border:"2px solid black", padding:"2px"}}>value: {value}</h2>
    </div>
  )
}

export default App
*/