import React, { useState } from 'react'

function Form() {
  const [name, setName] = useState({firstName: '',lastName: ''})

  function handleSubmit() {
    console.log(name)
  }

  return (
    <div>
      <h1> {name.firstName} - {name.lastName}</h1>
      <form>
        <label> FirstName : </label>
        <input type='text' onChange={(e) => setName({...name, firstName : e.target.value})} value={name.firstName}/>
        <label> LasttName : </label>
        <input type='text' onChange={(e) => setName({...name, lastName : e.target.value})} value={name.lastName}/>
        <button onClick={(e) => handleSubmit(e)}>Submit </button>
      </form>
    </div>
  )
}

export default Form