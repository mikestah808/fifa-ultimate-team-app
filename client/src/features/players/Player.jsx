import React from "react";
import { useDispatch } from "react-redux"

function Player({ player }) {
  const dispatch = useDispatch();

  const {name, position, age, club, pace, dribbling, shooting, defending, passing, physical, image_url } = player

  function handleDeleteClick(){
    // dispatch(reviewRemoved(review))
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
</div>
</div>
  )
}

export default Player;

// "position": "FWD",
// "rating": 94,
// "club": "Paris Saint Germain",
// "price": 50000000,
// "pace": 95,
// "dribbling": 99,
// "shooting": 92,
// "defending": 50,
// "passing": 95,
// "physical": 40