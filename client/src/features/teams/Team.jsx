import React from "react";
// import ReviewsContainer from "../reviews/ReviewsContainer";
import { useDispatch } from "react-redux"
import { teamRemoved } from "./teamsSlice"
// import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Button } from "@mui/material";

function Team({ team }) {
  const dispatch = useDispatch();
  // Get the userId param from the URL.
  // const { id } = useParams();

  function handleDeleteClick(){
    dispatch(teamRemoved(team))
  }

  function handleViewClick(){
    //when this function is invoked, it should redirect and change the path of url to ---> "/teams/${id}"
    console.log("specific team!!")
  }


  // useEffect(() => {
  //   //debugger;
  //   const findWorkout = workouts.find(workout => workout.id === parseInt(id))
  //   if (findWorkout){
  //     setSelectedWorkout(findWorkout)
  //   }
  // }, [workouts])

  return (
    <div>
      <li>
        <h4>{team.name}</h4>
        <Button onClick={handleViewClick} component={ Link } to={`${team.id}`}>View Team</Button>
        <Button onClick={handleDeleteClick}> Delete Team </Button>
        {/* <ReviewsContainer restaurantId = {restaurant.id}/> */}
      </li>
    </div>
  );
}

export default Team;