import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import Player from '../players/Player';
import PlayerInput from '../players/PlayerInput';
import PlayerEdit from '../players/PlayerEdit';
import { fetchTeam } from './teamsSlice';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';


function TeamDetails() {
  // const dispatch = useDispatch();
  let navigate = useNavigate();
  // Get the teamId param from the URL.
  const { id } = useParams();
  const teams = useSelector((state) => state.teams.entities) 
  const currentUser = useSelector((state) => state.users) 
  const {user, loggedIn} = currentUser
  //use state for whether form will be ADD PLAYER OR EDIT PLAYER
  const [showAddPlayerForm, setShowAddPlayerForm] = useState(false)
  const [showEditPlayerForm, setShowEditPlayerForm] = useState(false)
  const [team, setTeam] = useState({name: ""})

  useEffect(() => {
    const findTeam = teams?.find((team) => team.id === parseInt(id))
    if(findTeam){
      setTeam(findTeam)
    }
  },[teams])


  function addPlayerFormClick(){
    setShowAddPlayerForm(showAddPlayerForm => !showAddPlayerForm)
  }

  function editPlayerFormClick(){
    setShowEditPlayerForm(showEditPlayerForm => !showEditPlayerForm)
  }


  if(loggedIn){

    const renderTeamPlayers = team.players?.map((player) => {
      return <Player key={player.id} player={player} />
    })


  return (
    <div>
        {/* <PlayerInput teamId={id}/> */}
        <h1>Team: {team.name}</h1>
        <br />
        <h1>PLAYERS</h1>
        <Button onClick={addPlayerFormClick}>Add Player</Button>
        <Button onClick={editPlayerFormClick}>Edit Player</Button>
        {showAddPlayerForm ? <PlayerInput teamId={id} /> : null}
        {showEditPlayerForm ? <PlayerEdit teamId={id}/> : null}
        <li>{renderTeamPlayers}</li>
    </div>
      )

    
  } else {
    return (
      navigate("/")
    )
  }


}

export default TeamDetails