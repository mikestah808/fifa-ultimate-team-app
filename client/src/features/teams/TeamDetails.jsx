import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import Player from '../players/Player';
import PlayerInput from '../players/PlayerInput';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';


function TeamDetails() {
  let navigate = useNavigate();
  const { id } = useParams();
  const currentUser = useSelector((state) => state.users) 
  const teams = useSelector((state) => state.teams.entities) 
  const {user, loggedIn} = currentUser
  const [showAddPlayerForm, setShowAddPlayerForm] = useState(false)
  const [team, setTeam] = useState({name: ""})

  useEffect(() => {
    const findTeam = teams?.find((team) => team.id === parseInt(id))
    if(findTeam){
      setTeam(findTeam)
    }
  },[teams])

  console.log(teams)


  function addPlayerFormClick(){
    setShowAddPlayerForm(showAddPlayerForm => !showAddPlayerForm)
  }



  if(loggedIn){

    const renderTeamPlayers = team.players?.map((player) => {
      return <Player key={player.id} player={player} />
    })


  return (
    <div className='teamdetails'>
        <h1>Team: {team.name}</h1>
        <br />
        <h1>PLAYERS</h1>
        <br />
        <br />
        <Button sx={{ color: 'white' }} onClick={addPlayerFormClick}>Add Player</Button>
        {showAddPlayerForm ? <PlayerInput teamId={id} /> : null}
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