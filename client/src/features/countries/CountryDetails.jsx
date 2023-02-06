import React from 'react'
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import CountryPlayer from './CountryPlayer'
import { useNavigate } from 'react-router-dom';


function CountryDetails() {
  // Get the teamId param from the URL.
  const { id } = useParams();
  let navigate = useNavigate();
  const currentUser = useSelector((state) => state.users) 
  const {user, loggedIn} = currentUser
  const countries = useSelector((state) => state.countries.entities) 
  const findCountry = countries.find((country) => country.id === parseInt(id))


if(loggedIn){

  const renderCountriesPlayers = findCountry.players.map((player) => {
    return <CountryPlayer key={player.id} player={player} />
  })

  return (
    <div>
        <h1>Country: {findCountry.name}</h1>
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