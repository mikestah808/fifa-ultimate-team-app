import React, { useState } from "react";

function TeamInput({ handleTeamSubmit }) {
  const [name, setName] = useState("")

  function handleChange(event){
    setName(event.target.value)
  }

  function handleSubmit(event){
    event.preventDefault();
    handleTeamSubmit(name)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>name
      <input onChange={handleChange} value={name}/> 
      </label>
      <button type="submit">add team</button>
    </form>
  )
}

export default TeamInput;