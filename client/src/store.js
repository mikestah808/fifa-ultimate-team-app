import { configureStore } from "@reduxjs/toolkit"
import teamsReducer from "./features/teams/teamsSlice"
import playersReducer from "./features/players/playersSlice"
import usersReducer from "./features/users/usersSlice"

const store = configureStore({
  reducer: {
    users: usersReducer,
    teams: teamsReducer,
    players: playersReducer,
  }
})

export default store