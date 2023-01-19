import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CountryInput from './CountryInput';
import Country from './Country';
import { fetchCountries } from './countriesSlice';

function Countries() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.entities)

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch])


  //this function component should contain other components which will render the different countries within my database 
  //i need to grab countries state by importing useSelector which will give me access to countries state 
  //from there, map through the countries state and for each country return a country component 

  const renderCountries = countries.map((country) => {
    return <Country key={country.id} country={country} />
  })



  return (
    <div>
      <CountryInput />
      <h1>Countries</h1>
      {renderCountries}
    </div>
  )
}

export default Countries