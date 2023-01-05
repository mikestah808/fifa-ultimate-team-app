import { configureStore } from "@reduxjs/toolkit"
import playersReducer from "./features/players/playersSlice"

const store = configureStore({
  reducer: {
    players: playersReducer,
  }
})

export default store