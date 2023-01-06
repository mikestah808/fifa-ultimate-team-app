// import React, { useState } from 'react'
// import { Button } from '@mui/material'
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';




function Login() {
    

//     const [email, setEmail] = useState("")
//     const [password, setPassword] = useState("")
//     const [error, setError] = useState("")


//     const handleSubmit = (e) => {
//         e.preventDefault()
//         fetch("/login", {
//           method: "POST",
//           headers: {"Content-Type": "application/json"},
//           body: JSON.stringify({
//             email: email,
//             password: password
//           })
//         })
//         .then((res) => res.json())
//         .then(user => {
//           if (!user.error) {
//             login(user)
//             console.log("you have successfuly logged in")
//           } else {
//             setEmail("")
//             setPassword("")
//             console.log("invalid email or password")
//             setError("Invalid Email or Password")
//           }
//         })
//     }

//     return (
//       <>
//       <h1>Login Here!</h1>
//       <Box
//         onSubmit={handleSubmit}
//         component="form"
//         sx={{
//           '& > :not(style)': { m: 1, width: '25ch' },
//         }}
//         noValidate
//         autoComplete="off"
//       >
//         <br />
//         <TextField type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} label="Email" variant="outlined" />
//         <br />
//         <TextField type="password" id="email" value={password} onChange={(e) => setPassword(e.target.value)} label="Password" variant="outlined" />
//         <br />
//         <Button type='submit' variant="outlined">Login</Button>
//       </Box>
//       <h4>
//         {error}
//       </h4>
//       </>
//     );


}


export default Login;