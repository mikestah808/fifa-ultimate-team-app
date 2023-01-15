import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { logout } from './features/users/usersSlice';


function NavBar() {
    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.users.user)
    let navigate = useNavigate();

    console.log(currentUser)


    function handleLogoutClick(){
        // debugger;
        // fetch(`/logout`, {
        //     method: "DELETE",
        //     headers: {
        //       "Content-type": "application/json"
        //     }
        //   })
            dispatch(logout())
            // navigate("/login")
            console.log("log me out!")
    }

    if(currentUser !== {} && currentUser !== undefined && currentUser.error !== 'Not authorized' && currentUser !== true){
        return (
            <Box sx={{ flexGrow: 1 }}>
              <AppBar position="static">
                <Toolbar>
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Welcome {currentUser.first_name}!
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
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Ultimate Team
                  </Typography>
                  <Button color="inherit" to="/login" component={ Link }>Login</Button>
                  <Button color="inherit" to="/signup" component={ Link }>Signup</Button>
                </Toolbar>
              </AppBar>
            </Box>
        )
    }
}

export default NavBar;
