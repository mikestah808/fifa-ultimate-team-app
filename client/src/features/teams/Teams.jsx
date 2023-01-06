// import { render } from "@testing-library/react";
import React from "react";
import Team from "./Team"

function Teams({ teams }) {

  const renderTeams = teams.map((team) => {
    return (
      <Team key={team.id} team={team}/>
    )
  })


  return <ul>{renderTeams}</ul>;
}

export default Teams;