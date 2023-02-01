import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import Player from '../players/Player';
import { useNavigate } from 'react-router-dom';


function CountryDetails() {
  // Get the teamId param from the URL.
  const { id } = useParams();
  let navigate = useNavigate();
  const currentUser = useSelector((state) => state.users) 
  const {user, loggedIn} = currentUser
  // const countries = useSelector((state) => state.countries.entities) 

  const [selectedCountry, setSelectedCountry] = useState({
    players: []
  })


useEffect(() => {
  fetch(`/countries/${id}`)
  .then((resp) => resp.json())
  .then((country) => setSelectedCountry(country))
},[])

if(loggedIn){

  const renderCountriesPlayers = selectedCountry.players.map((player) => {
    return <Player key={player.id} player={player} />
  })

  return (
    <div>
        <h1>Country: {selectedCountry.name}</h1>
        <br />
        <h1>Players</h1>
        <li>{renderCountriesPlayers}</li>
    </div>
      )

} else {
  return (
    navigate("/")
  )
}

}

export default CountryDetails;