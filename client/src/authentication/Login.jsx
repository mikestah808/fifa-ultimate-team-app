import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { login } from '../features/users/usersSlice';

import { Box } from '@mui/system';
import { TextField } from '@mui/material';
import { Button } from '@mui/material'


function Login() {
  let navigate = useNavigate();
  // const user = useSelector(state => state.users.user)
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
        // debugger;
        if(userData.email !== "" && userData.password !== ""){
          dispatch(login(userData))
          navigate("/")
        } else {
          setError("Email or Password Can't Be Blank")
          setEmail("")
          setPassword("")
        }
    }

    return (
      <div className='login'>
      <h1>Login Here!</h1>
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

    // return (
    //   <div className='login'>
    //   <h1>Login Here!</h1>
    //   <form onSubmit={handleSubmit}>
    //     <label>
    //      Email:
    //         <input type="text" onChange={(event) => setEmail(event.target.value)} value={email}/>
    //     </label>
    //     <label>
    //      Password:
    //        <input type="password" onChange={(event) => setPassword(event.target.value)} value={password}/>
    //     </label>
    //     <Button sx={{ color: 'white' }} type='submit' variant="outlined">Login</Button>
    //   </form>
    //   <h4>
    //     {error}
    //   </h4>
    //   </div>
    // );


}


export default Login;