import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import Player from '../players/Player';
import PlayerInput from '../players/PlayerInput';
import { fetchTeam } from './teamsSlice';


function TeamDetails() {
  const dispatch = useDispatch();
  // Get the teamId param from the URL.
  const { id } = useParams();
  const selectedTeam = useSelector((state) => state.teams.entities) 

  // const [selectedTeam, setSelectedTeam] = useState({
  //   players: []
  // })
  
  // const countries = useSelector((state) => state.countries.entities)
  // const [selectedCountry, setSelectedCountry] = useState({})

  //useEfffect function to fetch countries on each page refresh 
  // useEffect(() => {
  //   dispatch(fetchCountries())
  // },[dispatch])

  useEffect(() => {
    dispatch(fetchTeam(id))
  },[dispatch])

  console.log(selectedTeam)


const renderTeamsPlayers = selectedTeam.players?.map((player) => {
  return <Player key={player.id} player={player} />
})

// useEffect(() => {
//   fetch(`/teams/${id}`)
//   .then((resp) => resp.json())
//   .then((team) => setSelectedTeam(team))
// },[])




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