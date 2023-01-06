import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

export const fetchTeams = createAsyncThunk("players/fetchTeams", () => {
  // return a Promise containing the data we want
  return fetch("http://localhost:3000/teams")
    .then((response) => response.json())
    .then((teams) => teams);
});

const teamsSlice = createSlice({
  name: "teams",
  initialState: {
    entities: [], // array of teams
    status: "idle", // loading state
  },
  reducers: {
    teamAdded(state, action) {
      // using createSlice lets us mutate state!
      state.entities.push(action.payload);
    },
    teamRemoved(state, action) {
      const index = state.entities.findIndex((team) => team === action.payload);
      state.entities.splice(index, 1);
    },
  },
  extraReducers: {
    // handle async actions: pending, fulfilled, rejected (for errors)
    [fetchTeams.pending](state) {
      state.status = "loading";
    },
    [fetchTeams.fulfilled](state, action) {
      state.entities = action.payload;
      state.status = "idle";
    },
  },
});

export const { teamAdded, teamRemoved } = teamsSlice.actions;

export default teamsSlice.reducer;