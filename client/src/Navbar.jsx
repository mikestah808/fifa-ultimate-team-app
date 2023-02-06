import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { logout } from './features/users/usersSlice';


function NavBar() {
    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.users) 
    const {user, loggedIn} = currentUser 
    let navigate = useNavigate();


    function handleLogoutClick(){
      // debugger;
      dispatch(logout())
      //why doesn't the path redirect to "/login" ? it does not work...
      navigate("/")
      console.log("log me out!")
    }


    if(loggedIn){
        return (
            <Box sx={{ flexGrow: 1 }}>
              <AppBar position="static">
                <Toolbar>
                  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Welcome {user.first_name}!
                  </Typography>
                  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Ultimate Team
                  </Typography>
                  <Button color="inherit" to="/" component={ Link }>Home</Button>
                  <Button color="inherit" to="/countries" component={ Link }>All Countries</Button>
                  <Button color="inherit" to="/teams" component={ Link }>My Teams</Button>
                  <Button color="inherit" onClick={handleLogoutClick} component={ Link }>Logout</Button>
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
                    Ultimate Team
                  </Typography>
                  <Button color="inherit" to="/" component={ Link }>Login</Button>
                  <Button color="inherit" to="/signup" component={ Link }>Signup</Button>
                </Toolbar>
              </AppBar>
            </Box>
        )
    }
}

export default NavBar;
