import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import CountryPlayer from './CountryPlayer'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchCountries } from './countriesSlice';


function CountryDetails() {
  // Get the teamId param from the URL.
  const { id } = useParams();
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.users) 
  const {user, loggedIn} = currentUser
  const countries = useSelector((state) => state.countries.entities) 

  const [country, setCountry] = useState({name: ""})
  // const findCountry = countries.find((country) => country.id === parseInt(id))

  // useEffect(() =>{
  //   dispatch(fetchCountries())
  // }, [])

  useEffect(() => {
    const findCountry = countries.find((country) => country.id === parseInt(id))
    if(findCountry){
      setCountry(findCountry)
    }
  }, [countries])

  // if(loggedIn && findCountry)
if(loggedIn){

  // const renderCountriesPlayers = findCountry.players?.map((player) => {
  //   return <CountryPlayer key={player.id} player={player} />
  // })

  const renderCountriesPlayers = country.players?.map((player) => {
    return <CountryPlayer key={player.id} player={player} />
  })

  // return (
  //   <div>
  //       <h1>Country: {findCountry.name}</h1>
  //       <br />
  //       <h1>Players</h1>
  //       <li>{renderCountriesPlayers}</li>
  //   </div>
  //     )

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