import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import Signup from './authentication/Signup'
import Login from './authentication/Login'
import Countries from './Countries'
import Teams from './Teams'
import NavBar from './Navbar'

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchUser } from './features/sessions/sessionsSlice';

function App() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const currentUser = useSelector((state) => state.sessions.user)


  useEffect(() => {
    if(currentUser === {}){
      navigate("/login")
    } else {
      dispatch(fetchUser())
    }
  }, [dispatch])


  return (
    <div className='App'>
        <NavBar />
        <Routes>
          <Route exact path="/" element={ <HomePage /> } />
          <Route exact path="/login" element={ <Login /> } />
          <Route exact path="/signup" element={ <Signup /> } />
          <Route exact path="/countries" element={ <Countries /> } />
          <Route exact path="/teams" element={ <Teams /> } />
        </Routes>
    </div>
  )
}

export default App;
