import React from "react";
import { useDispatch } from "react-redux"
import { Link } from 'react-router-dom';
import { Button } from "@mui/material";
import { deleteTeam } from "./teamsSlice";

function Team({ team }) {
  const dispatch = useDispatch();
  

  function handleDeleteClick(){
    dispatch(deleteTeam(team.id))
  }



  return (
    <div>
      <li>
        <h4>{team.name}</h4>
        <Button component={ Link } to={`${team.id}`}>View Team</Button>
        <Button onClick={handleDeleteClick}> Delete Team </Button>
        {/* <ReviewsContainer restaurantId = {restaurant.id}/> */}
      </li>
    </div>
  );
}

export default Team;