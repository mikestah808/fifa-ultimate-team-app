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