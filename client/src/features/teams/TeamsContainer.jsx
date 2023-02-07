import React from "react";
import TeamInput from "./TeamInput";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Team from "./Team";

function TeamsContainer() {
  // const usersTeams = useSelector((state) => state.teams.entities) 
  let navigate = useNavigate();
  const userTeams = useSelector((state) => state.teams.entities) 
  const currentUser = useSelector((state) => state.users) 
  const {user, loggedIn} = currentUser 

  console.log(userTeams)


  if(loggedIn){

    const renderTeams = userTeams.map((team) => {
      return <Team key={team.id} team={team} />
    })

    return (
      <div>
        {renderTeams}
        <TeamInput/>
      </div>
    )
  } else {
    return (
      navigate("/")
    )
  }



}

export default TeamsContainer;