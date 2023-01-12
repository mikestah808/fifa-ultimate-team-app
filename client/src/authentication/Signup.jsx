import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { userAdded } from "../features/users/usersSlice";
// import { useSelector } from "react-redux";
import { signup } from "../features/users/usersSlice";
import { useNavigate } from "react-router-dom";


function Signup() {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  
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
    if(user.first_name !== "" && user.last_name !== "" && user.email !== "" && user.password !== ""){
      dispatch(signup(user))
      navigate("/")
      console.log(user)
    } else {
      console.log("You're missing something!") 
    }
  }

  return (
    <div>
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
    </div>
  );
}

export default Signup