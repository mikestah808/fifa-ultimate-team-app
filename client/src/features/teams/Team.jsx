import React from "react";
import { useDispatch } from "react-redux"
import { Link } from 'react-router-dom';
import { Button } from "@mui/material";
import { deleteTeam } from "./teamsSlice";

function Team({ team }) {
  const dispatch = useDispatch();
  const {id } = team

  

  function handleDeleteClick(){
    dispatch(deleteTeam(id))
  }



  return (
    <div className="grid-container">
      <li>
        <h4>{team.name}</h4>
        <Button sx={{ color: 'white' }} component={ Link } to={`${team.id}`}>View Team</Button>
        <Button sx={{ color: 'white' }} onClick={handleDeleteClick}> Delete Team </Button>
      </li>
    </div>
  );
}

export default Team;