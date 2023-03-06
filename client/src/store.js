import { configureStore } from "@reduxjs/toolkit"
import teamsReducer from "./features/teams/teamsSlice"
import usersReducer from "./features/users/usersSlice"
import countriesReducer from "./features/countries/countriesSlice"

const store = configureStore({
  reducer: {
    users: usersReducer,
    teams: teamsReducer,
    countries: countriesReducer
  }
})

export default store