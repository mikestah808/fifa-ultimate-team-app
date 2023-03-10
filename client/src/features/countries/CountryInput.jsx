import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCountry } from "./countriesSlice";
import { useSelector } from "react-redux";

import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import { Box } from "@mui/system";

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
    <Box
        onSubmit={handleSubmit}
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <br />
        <TextField type="text" id="Name" value={name} onChange={handleNameChange} label="Name" variant="outlined" sx={{
          input: {
          color: "white"
          },
          label: {
            color: "white"
          }
        }}/>
        <br />
         <TextField type="text" id="Image" value={image} onChange={handleImageChange} label="Image" variant="outlined" sx={{
          input: {
          color: "white"
          },
          label: {
            color: "white"
          }
        }}/>
        <br />
        <br />
        <Button sx={{ color: 'white' }} type='submit' variant="outlined">Submit</Button>
      </Box>
        {renderErrorMessages}
      </div>
  )
}

export default CountryInput