import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function NavBar() {
  const {user, logout} = useContext(UserContext)

  // console.log("user", user.id)
 


  function handleLogout() {
    fetch("/logout", {
      method: "DELETE"
    })
    .then(() => {
      logout()
    })
  }
    // if the user contains an id, then it will render this... else... then it will return the latter 
    // why doesn't this work? once the handleLogout function runs, it deletes the user id from the session hash 
    // the next step is that the logout function is invoked, which sets users state to NULL
    // after this, it will navigate to the login page --->  navigate("/login")
    if(user.id){
      return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <h3>Welcome, {user.first_name}!</h3>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Movie Keeper
              </Typography>
                <Button color="inherit" to="/genres" component={ Link }>My Genres</Button>
                <Button color="inherit" to="/movies" component={ Link }>My Movies</Button>
                <Button color="inherit" to="/" component={ Link }>Home</Button>
                <Button color="inherit" onClick={handleLogout}>Logout</Button>
            </Toolbar>
          </AppBar>
        </Box>
      );
    } else {
      return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Movie Keeper
              </Typography>
                <Button color="inherit" to="/signup" component={ Link }>Sign Up</Button>
            </Toolbar>
          </AppBar>
        </Box>
      );
    }
  }


export default NavBar;