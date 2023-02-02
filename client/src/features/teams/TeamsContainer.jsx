import React from "react";
import TeamInput from "./TeamInput";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Team from "./Team";

function TeamsContainer() {
  // const usersTeams = useSelector((state) => state.teams.entities) 
  let navigate = useNavigate();
  const currentUser = useSelector((state) => state.users) 
  const {user, loggedIn} = currentUser 


  if(loggedIn){

    const renderTeams = user.teams.map((team) => {
      return <Team key={team.id} team={team} />
    })

    return (
      <div>
        <TeamInput/>
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