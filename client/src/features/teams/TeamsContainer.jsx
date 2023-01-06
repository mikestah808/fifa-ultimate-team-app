import React from "react";
import TeamInput from "./TeamInput";
import Teams from "./Teams";
import { useDispatch, useSelector } from "react-redux";
import { teamAdded } from "./teamsSlice"


function TeamsContainer() {
  const dispatch = useDispatch();
  const teams = useSelector((state) => state.teams.entities);

  function handleTeamSubmit(name){
    dispatch(teamAdded(name))
  }


  return (
    <div>
      <TeamInput handleTeamSubmit={handleTeamSubmit}/>
      <Teams teams={teams}/>
    </div>
  );
}

export default TeamsContainer;