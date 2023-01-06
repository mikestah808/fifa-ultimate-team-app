import React, { useState } from "react";
import Players from "./Reviews";

function PlayerInput({ handlePlayersSubmit }) {
  const [name, setName] = useState("")

  function handleChange(event){
    setName(event.target.value)
  }

  function handleSubmit(event){
    event.preventDefault();
    handlePlayersSubmit(name)
  }


  return (
    <>
    <form onSubmit={handleSubmit}>
      <label>Name
      <textarea name="name" onChange={handleChange} value={name}>name</textarea>
      </label>
      <button type="submit">add player</button>
    </form>
    
    </>
  )
}

export default PlayerInput;