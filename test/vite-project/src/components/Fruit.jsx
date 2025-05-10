import React from 'react'

function Fruit({Name,Price}) {
  return (
    // <li> The price of {Name} is {Price}.</li>
    <div>{Price >100 ? <h3>The price of {Name} is {Price}.</h3> : " "}</div>
  )
}

export default Fruit