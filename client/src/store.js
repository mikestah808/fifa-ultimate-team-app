import { configureStore } from "@reduxjs/toolkit"
import teamsReducer from "./features/teams/teamsSlice"
import playersReducer from "./features/players/playersSlice"
import usersReducer from "./features/users/usersSlice"
import countriesReducer from "./features/countries/countriesSlice"

const store = configureStore({
  reducer: {
    users: usersReducer,
    teams: teamsReducer,
    players: playersReducer,
    countries: countriesReducer
  }
})

export default store