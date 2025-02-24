import { Hiddn } from './assets/components/hiden/hiden'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [value, setValue] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <div className="cont">

        <div className="btns">
          <button onClick={() => setCount((count) => count - 1)}>-</button>
          <h1>{count}</h1>
          <button onClick={() => setCount((count) => count + 1)}>+</button>
        </div>
        <hr />

        <div className="input">
          <h2>Input Change</h2>
          <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
          <h3>Your Text:  {value} {count}</h3>
        </div>
        <hr />

        <div className="hdd">
          <div className="hdd-b">
            <button className="hidden" onClick={() => setIsVisible(!isVisible)}>Hidden</button>
            <button className="show" onClick={() => setIsVisible(!isVisible)}>Show</button>
          </div>

          {isVisible && <Hiddn />}
        </div>
      </div>
    </>
  )
}

export default App
