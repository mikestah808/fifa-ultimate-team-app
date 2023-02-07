import React from "react";
import { useDispatch } from "react-redux"
import { Link } from 'react-router-dom';
import { Button } from "@mui/material";
import { deleteTeam } from "./teamsSlice";

function Team({ team }) {
  const dispatch = useDispatch();
  // const {id, user_id, name, players } = team

  

  function handleDeleteClick(){

    // const teamData = {
    //   id: id,
    //   user_id: user_id,
    //   name: name,
    //   players: players
    // }

    dispatch(deleteTeam(team.id))
  }



  return (
    <div>
      <li>
        <h4>{team.name}</h4>
        <Button sx={{ color: 'white' }} component={ Link } to={`${team.id}`}>View Team</Button>
        <Button sx={{ color: 'white' }} onClick={handleDeleteClick}> Delete Team </Button>
      </li>
    </div>
  );
}

export default Team;