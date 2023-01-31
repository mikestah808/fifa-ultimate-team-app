import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { v4 as uuid } from "uuid";

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
      headers: {"Content-type": "application/json"}
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
      // debugger;
      // state.entities.push(action.payload)
      //find the team using .find and return the team that is equal to the action.payload.team_id
      const findTeam = state.entities.find((team) => team.id === parseInt(action.payload.team_id))
      //after finding the team, you want to push the player object into the array of findTeam 
      findTeam.players.push(action.payload)
    },
    playerUpdated(state, action) {
      // debugger;
      //find the team using .find and return the team that is equal to the action.payload.team_id
      const findTeam = state.entities.find((team) => team.id === parseInt(action.payload.team_id))
      //now find the player by using .find on findTeam object 
      const player = findTeam.players.find((player) => player.id === action.payload.id);
      player.country_id = action.payload.country_id
      player.name = action.payload.name
      player.age = action.payload.age
      player.image_url = action.payload.image_url
      player.position = action.payload.position
      player.rating = action.payload.rating
      player.club = action.payload.club
      player.price = action.payload.price
      player.pace = action.payload.pace
      player.dribbling = action.payload.dribbling
      player.shooting = action.payload.shooting
      player.defending = action.payload.defending
      player.passing = action.payload.passing
      player.physical = action.payload.physical
      //after you find the player that matches the action.payload.id, you want to replace the player with the action.payload (updatedPlayer)
    },
    playerRemovedFromTeam(state, action) {
      debugger;
      const findTeam = state.entities.find((team) => team.id !== action.payload.team_id)
      //after finding the team, you want to filter through the team players and return players that ARE NOT EQUAL to the action.payload.id
      const teamPlayers = findTeam.players.filter((player) => player.id !== action.payload)
      //after filtering through the team players, you want to replace the team players with the NEW TEAM PLAYERS
      findTeam.players.splice(teamPlayers, 1)
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
            state.entities.push(action.payload)
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

export const { playerAddedToTeam, playerUpdated, playerRemovedFromTeam } = teamsSlice.actions;

export default teamsSlice.reducer;