import React from 'react'

function Message() {
      function sayHello() {
        return(
          <h1> Hello! </h1>
        )
      }
  return (
    <button onClick={sayHello}> Click me</button>
  )
}

export default Message