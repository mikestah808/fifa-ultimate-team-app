import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import Player from '../players/Player';


function CountryDetails() {
  // Get the teamId param from the URL.
  const { id } = useParams();
  const countries = useSelector((state) => state.countries.entities) 

  const [selectedCountry, setSelectedCountry] = useState({
    players: []
  })


const renderCountriesPlayers = selectedCountry.players.map((player) => {
  return <Player key={player.id} player={player} />
})



 useEffect(() => {
    //debugger;
    const findCountry = countries.find(country => country.id === parseInt(id))
    if (findCountry){
      setSelectedCountry(findCountry)
    }
  }, [countries])

  console.log("selected country", selectedCountry)


  return (
    <div>
        <h1>Country: {selectedCountry.name}</h1>
        <br />
        <h1>Players</h1>
        <li>{renderCountriesPlayers}</li>
    </div>
      )
}

export default CountryDetails;