import React, { useEffect } from "react";
import TeamInput from "./TeamInput";
import Teams from "./Teams";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeams } from "./teamsSlice"


function TeamsContainer() {
  const dispatch = useDispatch();
  const usersTeams = useSelector((state) => state.teams.entities) 


  useEffect(() => {
    dispatch(fetchTeams());
  }, [dispatch])


  return (
    <div>
      <TeamInput/>
      <Teams teams={usersTeams}/>
    </div>
  );
}

export default TeamsContainer;