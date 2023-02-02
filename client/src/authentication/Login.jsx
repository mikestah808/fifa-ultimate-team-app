import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { login } from '../features/users/usersSlice';


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