import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { v4 as uuid } from "uuid";

export const fetchTeams = createAsyncThunk("players/fetchTeams", () => {
  // return a Promise containing the data we want
  return fetch("/teams")
    .then((response) => response.json())
    .then((teams) => teams);
});


export const createTeam = createAsyncThunk("user/createTeam", (name) => {
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
  // reducers: {
  //   teamAdded(state, action) {
  //     // using createSlice lets us mutate state!
  //     state.entities.push(action.payload);
  //   },
  //   teamRemoved(state, action) {
  //     const index = state.entities.findIndex((team) => team.id === action.payload);
  //     state.entities.splice(index, 1);
  //   },
  // },
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
    .addCase(createTeam.fulfilled, (state, action) => {
        state.status = 'idle';
        if (action.payload.errors){
            state.errorMessages = action.payload.errors;
        } else{
            state.errorMessages = null;
            state.entities.push(action.payload)
        }
    })
    .addCase(deleteTeam.fulfilled, (state, action) => {
      state.status = 'idle';
      if (action.payload.errors){
          state.errorMessages = action.payload.errors;
      } else{
          state.errorMessages = null;
          const index = state.entities.findIndex((team) => team.id === action.payload);
          state.entities.splice(index, 1);
      }
  })
    // .addCase(logout.fulfilled, (state, action) => {
    //     state.status = 'idle';
    //     if (action.payload.errors){
    //         state.errorMessages = action.payload.errors;
    //     } else{
    //         state.errorMessages = null;
    //         state.user = action.payload;
    //     }
    // })
  }
  // extraReducers: {
  //   // handle async actions: pending, fulfilled, rejected (for errors)
  //   [fetchTeams.pending](state) {
  //     state.status = "loading";
  //   },
  //   [fetchTeams.fulfilled](state, action) {
  //     state.entities = action.payload;
  //     state.status = "idle";
  //   },
  // },
});

export const { teamAdded, teamRemoved } = teamsSlice.actions;

export default teamsSlice.reducer;