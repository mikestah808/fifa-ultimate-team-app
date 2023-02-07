import React from "react";
import { useDispatch } from "react-redux"
import { Button } from "@mui/material";
import { deletePlayer } from "../teams/teamsSlice";
import { playerRemovedFromTeam } from "../teams/teamsSlice";
import { useState } from "react";
import PlayerEdit from "./PlayerEdit";

function Player({ player }) {
  const dispatch = useDispatch();
  const [showForm, setShowForm] = useState(false)

  const {name, id, position, club, pace, dribbling, shooting, defending, passing, physical, image_url, team_id } = player

  function handleEditClick(){
    console.log(player)
    //how do we get the edit form to pop up?
    //use component state to say where value is true or false, depending on whether button was clicked or not 
    //if the value is true, then you will render the PlayerInput component 
    //else, then PlayerInput component will not be rendered 
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
    <div className="container">
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
  <Button onClick={handleEditClick}>Edit</Button>
  <Button onClick={handleDeleteClick}>Delete</Button>
  {showForm ? <PlayerEdit player={player} />: null}
</div>
</div>
  )
}

export default Player;