import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCountry } from "./countriesSlice";

function CountryInput() {
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const dispatch = useDispatch();


  function handleNameChange(event){
    setName(event.target.value)
  }

  function handleImageChange(event){
    setImage(event.target.value)
  }

  function handleSubmit(event){

    const countryForm = {
        name: name,
        image_url: image
    }


    event.preventDefault();
    dispatch(addCountry(countryForm))
    setName("")
    setImage("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>name
      <input onChange={handleNameChange} value={name}/> 
      </label>
      <label>image
      <input onChange={handleImageChange} value={image}/> 
      </label>
      <button type="submit">add country</button>
    </form>
  )
}

export default CountryInput