import React from "react";
import { Link } from 'react-router-dom';
import { Button } from "@mui/material";

function Team({ country }) {


  return (
    <div className="grid-container">
      <li>
        <h4>{country.name}</h4>
        <img className="countryflag" src={country.image_url}/>
        <br />
        <Button sx={{ color: 'white' }} component={ Link } to={`${country.id}`}>View Country</Button>
      </li>
    </div>
  );
}

export default Team;