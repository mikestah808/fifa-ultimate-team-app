import React, { useEffect } from "react";
import TeamInput from "./TeamInput";
// import Teams from "./Teams";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeams } from "./teamsSlice"

import Team from "./Team";

function TeamsContainer() {
  const dispatch = useDispatch();
  const usersTeams = useSelector((state) => state.teams.entities) 


  useEffect(() => {
    // debugger;
    dispatch(fetchTeams());
  }, [dispatch])

  const renderTeams = usersTeams.map((team) => {
    return <Team key={team.id} team={team} />
  })


  return (
    <div>
      <TeamInput/>
      {renderTeams}
      {/* <Teams teams={usersTeams}/> */}
    </div>
  );
}

export default TeamsContainer;