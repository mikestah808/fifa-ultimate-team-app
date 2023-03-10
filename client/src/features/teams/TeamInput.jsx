import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTeam } from "./teamsSlice";

import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import { render } from "react-dom";

function TeamInput() {
  const teams = useSelector((state) => state.teams.entities) 
  const errorMessages = useSelector((state) => state.teams.errorMessages) 
  const [name, setName] = useState("")
  const dispatch = useDispatch();

  useEffect(() => {
    const findTeam = teams.find((team) => team.name === name)
    console.log("team that was just made", findTeam)
  }, [dispatch])


  function handleChange(event){
    setName(event.target.value)
  }

  function handleSubmit(event){


    event.preventDefault();
    dispatch(createTeam(name))  
    setName("")
  }

  const renderErrorMessages = errorMessages?.map((e) => <h4>{e}</h4>)



  // return (
  //   <div>
  //     <form onSubmit={handleSubmit}>
  //     <label>Name
  //     <input onChange={handleChange} value={name}/> 
  //     </label>
  //     <button type="submit">Add Team</button>
  //   </form>
  //     {renderErrorMessages}
  //   </div>
  // )

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
        <TextField type="text" id="email" value={name} onChange={handleChange} label="Name" variant="outlined" sx={{
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

export default TeamInput;