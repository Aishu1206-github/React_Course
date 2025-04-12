import React from 'react'

function Animals() {
  let animals= ['dog','deer','cow']
  return (
    <>
    <ul>
      <h1>
    {animals.map(animal => (
      <li>{animal}</li>
    ))}
    </h1>
    </ul> 
    </>
  )
}

export default Animals