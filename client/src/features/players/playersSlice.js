import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

export const fetchPlayers = createAsyncThunk("players/fetchPlayers", () => {
  // return a Promise containing the data we want
  return fetch("http://localhost:3000/players")
    .then((response) => response.json())
    .then((players) => players.image_url);
});

const playersSlice = createSlice({
  name: "players",
  initialState: {
    entities: [], // array of players
    status: "idle", // loading state
  },
  reducers: {
    playerAdded(state, action) {
      // using createSlice lets us mutate state!
      state.entities.push(action.payload);
    },
    playerUpdated(state, action) {
      const player = state.entities.find((player) => player.id === action.payload.id);
      player.image_url = action.payload.image_url;
    },
    playerRemoved(state, action) {
      const index = state.entities.findIndex((player) => player === action.payload);
      state.entities.splice(index, 1);
    },
  },
  extraReducers: {
    // handle async actions: pending, fulfilled, rejected (for errors)
    [fetchPlayers.pending](state) {
      state.status = "loading";
    },
    [fetchPlayers.fulfilled](state, action) {
      state.entities = action.payload;
      state.status = "idle";
    },
  },
});

export const { playerAdded, playerUpdated, playerRemoved } = playersSlice.actions;

export default playersSlice.reducer;