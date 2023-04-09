import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { login } from '../features/users/usersSlice';
import { fetchTeams } from '../features/teams/teamsSlice';

import { Box } from '@mui/system';
import { TextField } from '@mui/material';
import { Button } from '@mui/material'


function Login() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
    


    const handleSubmit = (e) => {

      const userData = {
        email: email,
        password: password
      }

        e.preventDefault()
        if(userData.email !== "" && userData.password !== ""){
          dispatch(login(userData))
          dispatch(fetchTeams())
          navigate("/")
        } else {
          setError("Email or Password Can't Be Blank")
          setEmail("")
          setPassword("")
        }
    }

    return (
      <div className='login'>
      <h1>LOGIN PAGE</h1>
      <br />
      <br />
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
        <TextField type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} label="Email" variant="outlined" sx={{
          input: {
          color: "white"
          },
          label: {
            color: "white"
          }
        }}/>
        <br />
        <TextField type="password" id="email" value={password} onChange={(e) => setPassword(e.target.value)} label="Password" variant="outlined" sx={{
          input: {
          color: "white"
          },
          label: {
            color: "white"
          }
        }}/>
        <br />
        <Button sx={{ color: 'white' }} type='submit' variant="outlined">Login</Button>
      </Box>
      <h4>
        {error}
      </h4>
      </div>
    );
}


export default Login;