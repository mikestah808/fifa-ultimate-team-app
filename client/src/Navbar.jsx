import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";



function NavBar() {
    // const currentUser = useSelector((state) => state.users.user)



    function handleLogoutClick(){
        console.log("log me out!")
    }



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
          <Button color="inherit" to="/" component={ Link }>Home</Button>
          <Button color="inherit" to="/countries" component={ Link }>All Countries</Button>
          <Button color="inherit" to="/teams" component={ Link }>My Teams</Button>
          <Button color="inherit" onClick={handleLogoutClick} component={ Link }>Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
