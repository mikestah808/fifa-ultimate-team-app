import React from "react";


function Player({ player }) {

  const {name, position, club, pace, dribbling, shooting, defending, passing, physical, image_url } = player


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
</div>
</div>
  )
}

export default Player;