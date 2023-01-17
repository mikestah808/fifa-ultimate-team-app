import React, { useEffect } from "react";
import TeamInput from "./TeamInput";
import Teams from "./Teams";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeams, teamAdded } from "./teamsSlice"


function TeamsContainer() {
  const dispatch = useDispatch();
  const usersTeams = useSelector((state) => state.teams.entities) 


  console.log(usersTeams)

  function handleTeamSubmit(name){
    dispatch(teamAdded(name))
  }

  useEffect(() => {
    dispatch(fetchTeams());
  }, [dispatch])


  return (
    <div>
      <TeamInput handleTeamSubmit={handleTeamSubmit}/>
      <Teams teams={usersTeams}/>
    </div>
  );
}

export default TeamsContainer;