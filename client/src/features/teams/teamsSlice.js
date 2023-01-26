import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

export const fetchTeams = createAsyncThunk("team/fetchTeams", () => {
  // return a Promise containing the data we want
  return fetch("/teams")
    .then((response) => response.json())
    .then((teams) => teams);
});

export const fetchTeam = createAsyncThunk("team/fetchTeam", (id) => {
  // return a Promise containing the data we want
  return fetch(`/teams/${id}`)
    .then((response) => response.json())
    .then((team) => team);
});


export const createTeam = createAsyncThunk("team/createTeam", (name) => {
  // return a Promise containing the data we want
  return fetch("/teams", {
      method: "POST",
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({name})
      })
      .then((resp) => resp.json())
      .then((teamData) => teamData)
})

export const deleteTeam = createAsyncThunk("user/deleteTeam", (id) => {
  // return a Promise containing the data we want
  return fetch(`/teams/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json"
      }
    })
      .then((resp) => resp.ok)
  })

const teamsSlice = createSlice({
  name: "teams",
  initialState: {
    entities: [], // array of teams
    status: "idle", // loading state
  },
  reducers: {
    playerAddedToTeam(state, action) {
      state.entities.players.push(action.payload)
    },
    playerRemovedFromTeam(state, action) {
      const index = state.entities.players.findIndex((player) => player.id === action.payload)
      state.entities.players.splice(index, 1)
    },
  },
  extraReducers: (builder) => { 
    // handle async actions: pending, fulfilled, rejected (for errors)
    builder
    .addCase(fetchTeams.fulfilled, (state, action) => {
        state.status = 'idle';
        if (action.payload.errors){
            state.errorMessages = action.payload.errors;
        } else{
            state.errorMessages = null;
            state.entities = action.payload;
        }
    })
    .addCase(fetchTeam.fulfilled, (state, action) => {
      state.status = 'idle';
      if (action.payload.errors){
          state.errorMessages = action.payload.errors;
      } else{
          state.errorMessages = null;
          state.entities = action.payload;
      }
  })
    .addCase(createTeam.fulfilled, (state, action) => {
        state.status = 'idle';
        if (action.payload.errors){
            state.errorMessages = action.payload.errors;
        } else{
            state.errorMessages = null;
            state.entities.push({
              id: uuid(),
              name: action.payload
            })
        }
    })
    .addCase(deleteTeam.fulfilled, (state, action) => {
      state.status = 'idle';
      if (action.payload.errors){
          state.errorMessages = action.payload.errors;
      } else{
          state.errorMessages = null;
          const index = state.entities.findIndex((team) => team.id === action.payload)
          state.entities.splice(index, 1)
      }
  })
  }
});

export const { playerAddedToTeam, playerRemovedFromTeam } = teamsSlice.actions;

export default teamsSlice.reducer;