import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import Player from '../players/Player';
import PlayerInput from '../players/PlayerInput';
// import { fetchTeams } from "./teamsSlice"
// import { fetchTeam } from './teamsSlice';


function TeamDetails() {
  // const dispatch = useDispatch();
  // Get the teamId param from the URL.
  const { id } = useParams();
  // const usersTeams = useSelector((state) => state.teams.entities) 

  const [selectedTeam, setSelectedTeam] = useState({
    players: []
  })

  //when page is refreshed, selectedTeam is empty 
  //in order to fix this, we must use a useEffect function that will populate the state of selectedTeam with the found team based on whether the team.id matches the id of the param

  console.log(selectedTeam)


const renderTeamsPlayers = selectedTeam.players.map((player) => {
  return <Player key={player.id} player={player} />
})

useEffect(() => {
  fetch(`/teams/${id}`)
  .then((resp) => resp.json())
  .then((team) => setSelectedTeam(team))
},[])


//  useEffect(() => {
//     // debugger;
//     const findTeam = usersTeams.find(team => team.id === parseInt(id))
//     if (findTeam){
//       setSelectedTeam(findTeam)
//     }
//   }, [])


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