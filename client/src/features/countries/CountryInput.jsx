import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCountry } from "./countriesSlice";
import { useSelector } from "react-redux";

function CountryInput() {
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const dispatch = useDispatch();
  const errorMessages = useSelector((state) => state.countries.errorMessages) 


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

  const renderErrorMessages = errorMessages?.map((error) => <h4>{error}</h4>)

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <label>Name
      <input onChange={handleNameChange} value={name}/> 
      </label>
      <label>Image
      <input onChange={handleImageChange} value={image}/> 
      </label>
      <button type="submit">add country</button>
    </form>
    {renderErrorMessages}
    </div>
  )
}

export default CountryInput