import React from "react";
import { useDispatch } from "react-redux"
import { Button } from "@mui/material";
import { deletePlayer } from "./playersSlice";
import { playerRemovedFromTeam } from "../teams/teamsSlice";
import { useState } from "react";
import PlayerEdit from "./PlayerEdit";

function Player({ player }) {
  const dispatch = useDispatch();
  const [showForm, setShowForm] = useState(false)

  const {name, id, position, age, club, pace, dribbling, shooting, defending, passing, physical, image_url, team_id } = player

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

    dispatch(deletePlayer(id))
    dispatch(playerRemovedFromTeam(playerData))
  }

  return (
    <div className="container">
{/* <img src="https://upload.wikimedia.org/wikipedia/commons/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg" style="width:100%"/> */}
<div className="rcorners2">
  <h4>{name}</h4>
  <h4>Position: {position}</h4>
  {/* <p>Age: {age}</p> */}
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