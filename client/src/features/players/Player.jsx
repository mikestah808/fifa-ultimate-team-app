import React from "react";
import { useDispatch } from "react-redux"
import { Button } from "@mui/material";
import { deletePlayer } from "../teams/teamsSlice";
import { useState } from "react";
import PlayerEdit from "./PlayerEdit";

function Player({ player }) {
  const dispatch = useDispatch();
  const [showForm, setShowForm] = useState(false)

  const {name, id, position, club, pace, dribbling, shooting, defending, passing, physical, image_url, team_id } = player

  function handleEditClick(){
    setShowForm(showForm => !showForm)
  }


  function handleDeleteClick(){

    const playerData = {
      id: id,
      team_id: team_id
    }

    dispatch(deletePlayer(playerData))
  }

  return (
  <div className="row">
  <div className="column">
  <div className="rcorners2">
  <h4>{name}</h4>
  <h4>Position: {position}</h4>
  <h4>Club: {club}</h4>
  <img src={image_url}/>
  <p>Pace: {pace}</p>
  <p>Dribbling: {dribbling}</p>
  <p>Shooting: {shooting}</p>
  <p>Defending: {defending}</p>
  <p>Passing: {passing}</p>
  <p>Physical: {physical}</p>
  <Button sx={{ color: 'white' }} onClick={handleEditClick}>Edit</Button>
  <Button sx={{ color: 'white' }} onClick={handleDeleteClick}>Delete</Button>
</div>
{showForm ? <PlayerEdit player={player} />: null}
</div>
</div>
  )
}

export default Player;