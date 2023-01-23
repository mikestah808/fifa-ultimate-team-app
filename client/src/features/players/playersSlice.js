import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { v4 as uuid } from "uuid";


export const createPlayer = createAsyncThunk("user/createPlayer", ({ name, age, image_url, position, rating, club, price, pace, dribbling, shooting, defending, passing, physical, team_id, country_id }) => {
  // return a Promise containing the data we want
  return fetch("/players", {
      method: "POST",
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({ name, age, image_url, position, rating, club, price, pace, dribbling, shooting, defending, passing, physical, team_id, country_id })
      })
      .then((resp) => resp.json())
      .then((player) => player)
})

export const deleteTeam = createAsyncThunk("user/deleteTeam", (id) => {
  // return a Promise containing the data we want
  return fetch(`/players/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json"
      }
    })
      .then((resp) => resp.ok)
  })

const playersSlice = createSlice({
  name: "players",
  initialState: {
    entities: [], // array of teams
    status: "idle", // loading state
  },
  extraReducers: (builder) => { 
    // handle async actions: pending, fulfilled, rejected (for errors)
    builder
    // .addCase(fetchTeams.fulfilled, (state, action) => {
    //     state.status = 'idle';
    //     if (action.payload.errors){
    //         state.errorMessages = action.payload.errors;
    //     } else{
    //         state.errorMessages = null;
    //         state.entities = action.payload;
    //     }
    // })
    .addCase(createPlayer.fulfilled, (state, action) => {
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
  }
});

export default playersSlice.reducer;