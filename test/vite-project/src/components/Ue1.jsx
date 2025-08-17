import React, {useEffect} from 'react'
import { useState } from 'react'

function Ue1() {
  const [count, setCount] = useState(0)
  //  const [text, setText] = useState('')

  let incrementCount =()=>{
      setCount(count+1)
  }

  //  let handleChange = (e)=>{
  //    setText(e.target.value)
  //  }


  return (
  
    <div>
      <h1> This is a my Count Value : {count} </h1>
      <button onClick={incrementCount}> Increment</button>

      {/* <input onChange={handleChange} type='text' value={text}> </input>
      <h2>{text}</h2>  */}
    </div>

  )
}

export default Ue1