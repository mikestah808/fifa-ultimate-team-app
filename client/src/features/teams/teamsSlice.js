import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchTeams = createAsyncThunk("team/fetchTeams", () => {
  return fetch("/teams")
    .then((response) => response.json())
    .then((teams) => teams);
});


export const createTeam = createAsyncThunk("team/createTeam", (name) => {
  return fetch("/teams", {
      method: "POST",
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({name})
      })
      .then((resp) => resp.json())
      .then((teamData) =>teamData)
})

export const deleteTeam = createAsyncThunk("team/deleteTeam", (id) => {
  return fetch(`/teams/${id}`, {
      method: "DELETE",
      headers: {"Content-type": "application/json"}
    })
      .then((resp) => resp.ok)
  })

  export const createPlayer = createAsyncThunk("player/createPlayer", (name, age, image_url, position, rating, club, price, pace, dribbling, shooting, defending, passing, physical, team_id, country_id) => {
    return fetch("/players", {
        method: "POST",
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(name, age, image_url, position, rating, club, price, pace, dribbling, shooting, defending, passing, physical, team_id, country_id)
        })
        .then((resp) => resp.json())
        .then((player) => player)
  })

  export const updatePlayer = createAsyncThunk("player/updatePlayer", (id, name, age, image_url, position, rating, club, price, pace, dribbling, shooting, defending, passing, physical, team_id, country_id) => {
    return fetch(`/players/${id.id}`, {
        method: "PATCH",
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(id, name, age, image_url, position, rating, club, price, pace, dribbling, shooting, defending, passing, physical, team_id, country_id)
        })
        .then((resp) => resp.json())
        .then((player) => player)
  })

  export const deletePlayer = createAsyncThunk("player/deletePlayer", (id) => {
    console.log("id", id.id)
    return fetch(`/players/${id.id}`, {
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
          const index = state.entities.findIndex((team) => team.id === action.meta.arg)
          state.entities.splice(index, 1)
      }
  })

  .addCase(createPlayer.fulfilled, (state, action) => {
        state.status = 'idle';
        if (action.payload.errors){
            state.errorMessages = action.payload.errors;
        } else{
            state.errorMessages = null;
            const findTeam = state.entities.find((team) => team.id === parseInt(action.payload.team_id))
            findTeam.players.push(action.payload)
        }
    })
    .addCase(updatePlayer.fulfilled, (state, action) => {
        state.status = 'idle';
        if (action.payload.errors){
            state.errorMessages = action.payload.errors;
        } else{
            state.errorMessages = null;
            const findTeam = state.entities.find((team) => team.id === parseInt(action.payload.team_id))
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
        }
    })
    .addCase(deletePlayer.fulfilled, (state, action) => {
      state.status = 'idle';
      if (action.payload.errors){
          state.errorMessages = action.payload.errors;
      } else{
          state.errorMessages = null;
          const findTeam = state.entities.find((team) => team.id === parseInt(action.meta.arg.team_id))
          const index = findTeam.players.findIndex((player) => player.id === action.meta.arg.id)
          findTeam.players.splice(index, 1)
      }
  })
  }
});


export default teamsSlice.reducer;