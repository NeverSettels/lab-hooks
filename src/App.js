import React, { useState } from 'react'

import './App.css'

function App() {
  const [counter, setcounter] = useState(0)
  const [left, setleft] = useState('')
  const [right, setright] = useState('')
  const [center, setcenter] = useState('')
  function add() {
    setcounter(prevstate => counter++)
  }
  function sub() {
    setcounter(prevstate => counter--)
  }
  inputRightChange = e => {
    const {
      target: { name, value }
    } = e
    setright({
      [name]: value
    })
  }
  inputleftChange = e => {
    const {
      target: { name, value }
    } = e
    setleft({
      [name]: value
    })
  }

  inputcenterChange = e => {
    const {
      target: { name, value }
    } = e
    setcenter({
      [name]: value
    })
  }
  return (
    <div className="App">
      <p>{counter}</p>
      <button onClick={add}>+</button>
      <button onClick={sub}>-</button>
      <div>
        <input type="text" name="left" onChange={inputleftChange} />
        <small>{left}</small>

        <input type="text" name="center" onChange={inputcenterChange} />
        <small>{center}</small>

        <input type="text" name="right" onChange={inputRightChange} />
        <small>{right}</small>
      </div>
    </div>
  )
}

export default App
