import React from "react";
import { useDispatch } from "react-redux"
import { Link } from 'react-router-dom';
import { Button } from "@mui/material";
// import { deleteCountry } from "./countriesSlice";

function Team({ country }) {
  const dispatch = useDispatch();
  

  // function handleDeleteClick(){
  //   dispatch(deleteCountry(country.id))
  // }


  return (
    <div>
      <li>
        <h4>{country.name}</h4>
        <img className="countryflag" src={country.image_url}/>
        <br />
        <Button sx={{ color: 'white' }} component={ Link } to={`${country.id}`}>View Country</Button>
        {/* <Button sx={{ color: 'white' }} onClick={handleDeleteClick}> Delete Country </Button> */}
      </li>
    </div>
  );
}

export default Team;