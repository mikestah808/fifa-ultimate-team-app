import React from "react";
import { useDispatch } from "react-redux"
import { Link } from 'react-router-dom';
import { Button } from "@mui/material";
import { deleteTeam } from "./teamsSlice";
import { useSelector } from "react-redux";
// import { teamRemovedFromUser } from "../users/usersSlice";

function Team({ team }) {
  const dispatch = useDispatch();
  // const currentUser = useSelector((state) => state.users) 
  const {id, user_id, name, players } = team

  

  function handleDeleteClick(){

    const teamData = {
      id: id,
      user_id: user_id,
      name: name,
      players: players
    }

    dispatch(deleteTeam(team.id))
    // dispatch(teamRemovedFromUser(teamData))
  }



  return (
    <div>
      <li>
        <h4>{team.name}</h4>
        <Button component={ Link } to={`${team.id}`}>View Team</Button>
        <Button onClick={handleDeleteClick}> Delete Team </Button>
      </li>
    </div>
  );
}

export default Team;