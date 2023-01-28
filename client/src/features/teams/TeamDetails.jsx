import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import Player from '../players/Player';
import PlayerInput from '../players/PlayerInput';
import PlayerEdit from '../players/PlayerEdit';
import { fetchTeam } from './teamsSlice';
import { Button } from '@mui/material';


function TeamDetails() {
  const dispatch = useDispatch();
  // Get the teamId param from the URL.
  const { id } = useParams();
  const selectedTeam = useSelector((state) => state.teams.entities) 
  //use state for whether form will be ADD PLAYER OR EDIT PLAYER
  const [showAddPlayerForm, setShowAddPlayerForm] = useState(false)
  const [showEditPlayerForm, setShowEditPlayerForm] = useState(false)

  function addPlayerFormClick(){
    setShowAddPlayerForm(showAddPlayerForm => !showAddPlayerForm)
  }

  function editPlayerFormClick(){
    setShowEditPlayerForm(showEditPlayerForm => !showEditPlayerForm)
  }




  useEffect(() => {
    dispatch(fetchTeam(id))
  },[dispatch])

  console.log(selectedTeam)


const renderTeamsPlayers = selectedTeam.players?.map((player) => {
  return <Player key={player.id} player={player} />
})



  return (
    <div>
        {/* <PlayerInput teamId={id}/> */}
        <h1>Team: {selectedTeam.name}</h1>
        <br />
        <h1>PLAYERS</h1>
        <Button onClick={addPlayerFormClick}>Add Player</Button>
        <Button onClick={editPlayerFormClick}>Edit Player</Button>
        {showAddPlayerForm ? <PlayerInput teamId={id} /> : null}
        {showEditPlayerForm ? <PlayerEdit teamId={id}/> : null}
        <li>{renderTeamsPlayers}</li>
    </div>
      )
}

export default TeamDetails