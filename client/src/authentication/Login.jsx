import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
// import { loginUser } from '../features/sessions/sessionsSlice';
import { login } from '../features/users/usersSlice';


function Login() {
  let navigate = useNavigate();
  const user = useSelector(state => state.users.user)
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
          // dispatch(loginUser(userData))
          fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(userData)
        })
        .then((resp) => resp.json())
        .then(user => dispatch(login(user)))
          navigate("/")
        } else {
          console.log("Invalid email or password!")
          setEmail("")
          setPassword("")
        }
        // fetch("/login", {
        //   method: "POST",
        //   headers: {"Content-Type": "application/json"},
        //   body: JSON.stringify({
        //     email: email,
        //     password: password
        //   })
        // })
        // .then((res) => res.json())
        // .then(user => {
        //   if (!user.error) {
        //     navigate("/")
        //     console.log("you have successfuly logged in")
        //   } else {
        //     setEmail("")
        //     setPassword("")
        //     console.log("invalid email or password")
        //     setError("Invalid Email or Password")
        //   }
        // })
    }

    return (
      <>
      <h1>Login Here!</h1>
      <form onSubmit={handleSubmit}>
        <label>
         Email:
            <input type="text" onChange={(event) => setEmail(event.target.value)} value={email}/>
        </label>
        <label>
         Password:
           <input type="password" onChange={(event) => setPassword(event.target.value)} value={password}/>
        </label>
        <button type='submit'>Login</button>
      </form>
      <h4>
        {error}
      </h4>
      </>
    );


}


export default Login;