import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTeam } from "./teamsSlice";

function TeamInput() {
  //we are using this in order to grab the users id because we must pass it to our dispatch action to match the user_id with the action.payload.id when team is being added and removed to user
  // const user = useSelector((state) => state.users.user) 
  const teams = useSelector((state) => state.teams.entities) 
  const errorMessages = useSelector((state) => state.teams.errorMessages) 
  const [name, setName] = useState("")
  const dispatch = useDispatch();

  useEffect(() => {
    const findTeam = teams.find((team) => team.name === name)
    console.log("team that was just made", findTeam)
  }, [dispatch])


  function handleChange(event){
    setName(event.target.value)
  }

  function handleSubmit(event){


    event.preventDefault();
    dispatch(createTeam(name))  
    setName("")
  }

  const renderErrorMessages = errorMessages?.map((e) => <h4>{e}</h4>)



  return (
    <div>
      <form onSubmit={handleSubmit}>
      <label>Name
      <input onChange={handleChange} value={name}/> 
      </label>
      <button type="submit">Add Team</button>
    </form>
      {renderErrorMessages}
    </div>
  )
}

export default TeamInput;