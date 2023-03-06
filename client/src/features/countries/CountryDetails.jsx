import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import CountryPlayer from './CountryPlayer'
import { useNavigate } from 'react-router-dom';


function CountryDetails() {
  const { id } = useParams();
  let navigate = useNavigate();
  const currentUser = useSelector((state) => state.users) 
  const {loggedIn} = currentUser
  const countries = useSelector((state) => state.countries.entities) 

  const [country, setCountry] = useState({name: ""})

  useEffect(() => {
    const findCountry = countries.find((country) => country.id === parseInt(id))
    if(findCountry){
      setCountry(findCountry)
    }
  }, [countries])


if(loggedIn){

  const renderCountriesPlayers = country.players?.map((player) => {
    return <CountryPlayer key={player.id} player={player} />
  })


      return (
        <div>
            <h1>Country: {country.name}</h1>
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