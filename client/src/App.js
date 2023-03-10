import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import Signup from './authentication/Signup'
import CountriesContainer from './features/countries/CountriesContainer'
import NavBar from './Navbar'
import TeamDetails from './features/teams/TeamDetails'
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchUser } from './features/users/usersSlice'
import TeamsContainer from './features/teams/TeamsContainer'
import CountryDetails from './features/countries/CountryDetails'
import { fetchTeams } from './features/teams/teamsSlice'
import { fetchCountries } from './features/countries/countriesSlice'

function App() {

  const dispatch = useDispatch();
  let navigate = useNavigate();
  const currentUser = useSelector((state) => state.users.user)


  useEffect(() => {
    if(currentUser === {} && currentUser === {"error": "Not authorized"}){
      navigate("/login")
    } else {
      dispatch(fetchUser(currentUser))
      dispatch(fetchTeams())
      dispatch(fetchCountries())
    }
  }, [])


  return (
    <div className='App'>
        <NavBar />
        <Routes>
          <Route exact path="/" element={ <HomePage /> } />
          <Route exact path="/signup" element={ <Signup /> } />
          <Route exact path="/countries" element={ <CountriesContainer /> } />
          <Route exact path="/teams" element={ <TeamsContainer /> } />
          <Route exact path="/teams/:id" element={ <TeamDetails /> } />
          <Route exact path="/countries/:id" element={ <CountryDetails /> } />
        </Routes>
    </div>
  )
}

export default App;
