import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTeam } from "./teamsSlice";
import { teamAdded } from "./teamsSlice";

function TeamInput() {
  const [name, setName] = useState("")
  const dispatch = useDispatch();


  function handleChange(event){
    setName(event.target.value)
  }

  function handleSubmit(event){
    event.preventDefault();
    dispatch(createTeam(name))
    setName("")
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