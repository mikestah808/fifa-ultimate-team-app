import React from "react";
import Player from "./Player";

function Players({ players }) {

  const renderPlayers = players.map((player) => {
    return (
      <Player key={player.id} player={player}/>
    )
  })

  return <ul>{renderPlayers}</ul>

}

export default Players;