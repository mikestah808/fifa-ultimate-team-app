import React from "react";
import { useDispatch } from "react-redux"
import { playerRemoved } from "./playersSlice"

function Player({ player }) {
  const dispatch = useDispatch();

  function handleDeleteClick(){
    dispatch(playerRemoved(player))
  }

  return (
    <li>
      {player.name}
      <button onClick={handleDeleteClick}> Delete Player </button>
    </li>
  );
}

export default Player;