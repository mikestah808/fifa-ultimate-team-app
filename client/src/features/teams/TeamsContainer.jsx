import React, { useEffect } from "react";
import TeamInput from "./TeamInput";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Team from "./Team";

function TeamsContainer() {
  let navigate = useNavigate();
  const userTeams = useSelector((state) => state.teams.entities) 
  const currentUser = useSelector((state) => state.users) 
  const {loggedIn} = currentUser 



  if(loggedIn){

    const renderTeams = userTeams.map((team) => {
      return <Team key={team.id} team={team} />
    })

    return (
      <div className="teampage">
        <br />
        <br />
        <h4>Add Team</h4>
        <TeamInput/>
        <br />
        <br />
        <br />
        <br />
        <br />
        {renderTeams}
      </div>
    )
  } else {
    return (
      navigate("/")
    )
  }



}

export default TeamsContainer;