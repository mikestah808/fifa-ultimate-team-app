import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import Player from '../players/Player';
import PlayerInput from '../players/PlayerInput';


function TeamDetails() {
  // Get the teamId param from the URL.
  const { id } = useParams();
  const usersTeams = useSelector((state) => state.teams.entities) 

  const [selectedTeam, setSelectedTeam] = useState({
    players: []
  })


const renderTeamsPlayers = selectedTeam.players.map((player) => {
  return <Player key={player.id} player={player} />
})



 useEffect(() => {
    //debugger;
    const findTeam = usersTeams.find(team => team.id === parseInt(id))
    if (findTeam){
      setSelectedTeam(findTeam)
    }
  }, [usersTeams])

  console.log("selected team", usersTeams)


  return (
    <div>
        <PlayerInput teamId={id}/>
        <h1>Team: {selectedTeam.name}</h1>
        <br />
        <h1>Players</h1>
        <li>{renderTeamsPlayers}</li>
    </div>
      )
}

export default TeamDetails