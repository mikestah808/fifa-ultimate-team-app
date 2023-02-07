import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CountryInput from './CountryInput';
import Country from './Country';
import { fetchCountries } from './countriesSlice';
import { useNavigate } from 'react-router-dom';

function Countries() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.entities)
  const currentUser = useSelector((state) => state.users) 
  const {user, loggedIn} = currentUser 

  useEffect(() =>{
    dispatch(fetchCountries())
  }, [])




  if(loggedIn){

    const renderCountries = countries?.map((country) => {
      return <Country key={country.id} country={country} />
    })

    return (
      <>
      <br />
      <br />
      <div className='countrypage'>
      <h4>Add Country</h4>
      <CountryInput />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1>Countries</h1>
      {renderCountries}
    </div>
    </>
    )
  } else {
    return (
      navigate("/")
    )
  }
}

export default Countries