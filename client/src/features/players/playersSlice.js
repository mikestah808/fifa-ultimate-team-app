import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";


export const createPlayer = createAsyncThunk("player/createPlayer", (name, age, image_url, position, rating, club, price, pace, dribbling, shooting, defending, passing, physical, team_id, country_id) => {
  // return a Promise containing the data we want
  return fetch("/players", {
      method: "POST",
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(name, age, image_url, position, rating, club, price, pace, dribbling, shooting, defending, passing, physical, team_id, country_id)
      })
      .then((resp) => resp.json())
      .then((player) => player)
})

export const deletePlayer = createAsyncThunk("player/deletePlayer", (id) => {
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
    entities: [], // array of players
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
      // debugger;
        state.status = 'idle';
        if (action.payload.errors){
            state.errorMessages = action.payload.errors;
        } else{
            // debugger;
            state.errorMessages = null;
            state.entities.push({
              id: uuid(),
              name: action.payload.name, 
              age: action.payload.age, 
              image_url: action.payload.image_url, 
              position: action.payload.position, 
              rating: action.payload.rating, 
              club: action.payload.club, 
              price: action.payload.price, 
              pace: action.payload.pace, 
              dribbling: action.payload.dribbling, 
              shooting: action.payload.shooting, 
              defending: action.payload.defending, 
              passing: action.payload.passing, 
              physical: action.payload.physical, 
              team_id: action.payload.team_id, 
              country_id: action.payload.country_id
            })
        }
    })
    .addCase(deletePlayer.fulfilled, (state, action) => {
      // debugger;
      state.status = 'idle';
      if (action.payload.errors){
          state.errorMessages = action.payload.errors;
      } else{
          // debugger;
          state.errorMessages = null;
          const index = state.entities.findIndex((player) => player.id === action.payload.id)
          state.entities.splice(index, 1)
      }
  })
  }
});

export default playersSlice.reducer;