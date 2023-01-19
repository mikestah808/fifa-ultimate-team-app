import React from "react";
// import { useDispatch } from "react-redux"
import { Link } from 'react-router-dom';
import { Button } from "@mui/material";

function Team({ country }) {
//   const dispatch = useDispatch();
  

//   function handleDeleteClick(){
//     dispatch(deleteTeam(team.id))
//   }

//   function handleViewClick(){
//     //when this function is invoked, it should redirect and change the path of url to ---> "/teams/${id}"
//     console.log("specific team!!")
//   }


  return (
    <div>
      <li>
        <h4>{country.name}</h4>
        <Button component={ Link } to={`${country.id}`}>View Country</Button>
        {/* <Button onClick={handleDeleteClick}> Delete Country </Button> */}
      </li>
    </div>
  );
}

export default Team;