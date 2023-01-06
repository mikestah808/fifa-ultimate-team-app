import React, { useState } from 'react'




function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault()
        fetch("/login", {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({
            email: email,
            password: password
          })
        })
        .then((res) => res.json())
        .then(user => {
          if (!user.error) {
            // login(user)
            console.log("you have successfuly logged in")
          } else {
            setEmail("")
            setPassword("")
            console.log("invalid email or password")
            setError("Invalid Email or Password")
          }
        })
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