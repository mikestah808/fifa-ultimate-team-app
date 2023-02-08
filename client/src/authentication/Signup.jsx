import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "../features/users/usersSlice";
import { useSelector } from "react-redux";


import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import { Box } from "@mui/system";


function Signup() {
  const dispatch = useDispatch();
  const errorMessages = useSelector((state) => state.users.errorMessages) 
  
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: ""
  })

  function handleChange(e) {
    setUser({...user,
      [e.target.name] : e.target.value
    })
  }


  function createNewUser(e){
    e.preventDefault()
    dispatch(signup(user))
  }

  const renderErrorMessages = errorMessages?.map((e) => <h4>{e}</h4>)

  return (
    <div className="signup">
    <h1>Create an Account!</h1>
  <Box
    onSubmit={createNewUser}
    component="form"
    sx={{
      '& > :not(style)': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
    <br />
    <TextField type="text" name="first_name" value={user.first_name} onChange={handleChange} label="First Name" variant="outlined" sx={{
          input: {
          color: "white"
          },
          label: {
            color: "white"
          }
        }}/>
    <br />
    <TextField type="text" name="last_name" value={user.last_name} onChange={handleChange} label="Last Name" variant="outlined" sx={{
          input: {
          color: "white"
          },
          label: {
            color: "white"
          }
        }}/>
    <br />
    <TextField type="email" name="email" value={user.email} onChange={handleChange} label="Email" variant="outlined" sx={{
          input: {
          color: "white"
          },
          label: {
            color: "white"
          }
        }}/>
    <br />
    <TextField type="password" name="password" value={user.password} onChange={handleChange} label="Password" variant="outlined" sx={{
          input: {
          color: "white"
          },
          label: {
            color: "white"
          }
        }}/>
    <br />
    <Button sx={{ color: 'white' }} type='submit' variant="outlined">Sign Up</Button>
  </Box>
    <p>
        {renderErrorMessages}
    </p>
  </div>
)

  // return (
  //   <div className="signup">
  //     <h1>Create Account!</h1>
  //     <form className="rcorners2" onSubmit={createNewUser}>
  //       <br />
  //       <br />
  //       <br />
  //         <label>First Name: </label>
  //         <input type="text" name="first_name" onChange={handleChange} value={user.first_name}/>
  //         <br />
  //         <label>Last Name: </label>
  //         <input type="text" name="last_name" onChange={handleChange} value={user.last_name}/>
  //         <br />
  //         <label>Email: </label>
  //         <input type="text" name="email" onChange={handleChange} value={user.email}/>
  //         <br />
  //         <label>Password: </label>
  //         <input type="password" name="password" onChange={handleChange} value={user.password}/>
  //         <br />
  //         <Button sx={{ color: 'white' }} type='submit' variant="outlined">Sign Up</Button>
  //     </form>
  //     {renderErrorMessages}
  //   </div>
  // );
}

export default Signup