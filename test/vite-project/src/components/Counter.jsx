import React, {useState} from 'react'

function Counter() {
  const [count, setCount] = useState(0)
  const [factor, setFactor] = useState(0)

  function incrementCount() {
    setCount(count + factor)
  }
  function decrementCount() {
    setCount(count - factor)
  }

  function incrementFactor() {
    setFactor(factor + 1)
  }
  function decrementFactor() {
    setFactor(factor - 1)
  }
  return (
    <>
    <div>
      <h1> This is my Counter : {count}</h1>
      <button onClick={incrementCount}>Increment </button>
      <button onClick={decrementCount}>Decrement </button>
    </div>
    <div>
      <h1> This is my Factor : {factor}</h1>
      <button onClick={incrementFactor}>Increment </button>
      <button onClick={decrementFactor}>Decrement </button>
    </div>
    </>
  )
}

export default Counter