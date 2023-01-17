import { useSelector, useDispatch } from "react-redux";
import React from "react";
import Team from "./Team"

function Teams({ teams }) {


  const renderTeams = teams.map((team) => {
    return (
      <Team key={team.id} team={team}/>
    )
  })


  return <div>{renderTeams}</div>;
}

export default Teams;