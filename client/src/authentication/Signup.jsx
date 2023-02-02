import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "../features/users/usersSlice";
import { useSelector } from "react-redux";


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
    <div>
      <h1>Create Account!</h1>
      <form onSubmit={createNewUser}>
        Create Account!
        <br />
        <br />
        <br />
          <label>First Name: </label>
          <input type="text" name="first_name" onChange={handleChange} value={user.first_name}/>
          <br />
          <label>Last Name: </label>
          <input type="text" name="last_name" onChange={handleChange} value={user.last_name}/>
          <br />
          <label>Email: </label>
          <input type="text" name="email" onChange={handleChange} value={user.email}/>
          <br />
          <label>Password: </label>
          <input type="password" name="password" onChange={handleChange} value={user.password}/>
          <br />
        <button type="submit">Sign up</button>
      </form>
      {renderErrorMessages}
    </div>
  );
}

export default Signup