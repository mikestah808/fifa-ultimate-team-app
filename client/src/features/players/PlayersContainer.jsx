import React from "react";
import PlayerInput from "./PlayerInput";
import Players from "./Players";
import { useDispatch, useSelector } from "react-redux"
import { playerAdded } from "./playersSlice"

function PlayersContainer({ teamId }) {
  const dispatch = useDispatch();
  const players = useSelector((state) => state.players.entities) 

  function handlePlayersSubmit(name){
    dispatch(playerAdded({teamId, name}))
  }

  return (
    <div>
      <PlayerInput handlePlayersSubmit={handlePlayersSubmit}/>
      <Players players={players}/>
    </div>
  );
}

export default PlayersContainer;