import React from "react";
// import ReviewsContainer from "../reviews/ReviewsContainer";
import { useDispatch } from "react-redux"
import { teamRemoved } from "./teamsSlice"

function Team({ team }) {
  const dispatch = useDispatch();

  function handleDeleteClick(){
    dispatch(teamRemoved(team))
  }

  function handleViewClick(){
    console.log("specific team!!")
  }

  return (
    <div>
      <li>
        {team.name}
        <button onClick={handleViewClick}>View Team</button>
        <button onClick={handleDeleteClick}> Delete Team </button>
        {/* <ReviewsContainer restaurantId = {restaurant.id}/> */}
      </li>
    </div>
  );
}

export default Team;