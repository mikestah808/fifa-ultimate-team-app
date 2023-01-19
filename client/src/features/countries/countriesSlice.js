import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { v4 as uuid } from "uuid";

export const fetchCountries = createAsyncThunk("countries/fetchCountries", () => {
  // return a Promise containing the data we want
  return fetch("/countries")
    .then((response) => response.json())
    .then((countries) => countries);
});


export const addCountry = createAsyncThunk("user/addCountry", (name) => {
  // return a Promise containing the data we want
  return fetch("/countries", {
      method: "POST",
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({name})
      })
      .then((resp) => resp.json())
      .then((countries) => countries)
})

// export const deleteCountry = createAsyncThunk("user/deleteTeam", (id) => {
//   // return a Promise containing the data we want
//   return fetch(`/countries/${id}`, {
//       method: "DELETE",
//       headers: {
//         "Content-type": "application/json"
//       }
//     })
//       .then((resp) => resp.ok)
//   })

const countriesSlice = createSlice({
  name: "countries",
  initialState: {
    entities: [], // array of countries
    status: "idle", // loading state
  },
  
  extraReducers: (builder) => { 
    // handle async actions: pending, fulfilled, rejected (for errors)
    builder
    .addCase(fetchCountries.fulfilled, (state, action) => {
        state.status = 'idle';
        if (action.payload.errors){
            state.errorMessages = action.payload.errors;
        } else{
            state.errorMessages = null;
            state.entities = action.payload;
        }
    })
    .addCase(addCountry.fulfilled, (state, action) => {
        state.status = 'idle';
        if (action.payload.errors){
            state.errorMessages = action.payload.errors;
        } else{
            state.errorMessages = null;
            state.entities.push(action.payload)
        }
    })
  }
});

// export const { countryAdded } = teamsSlice.actions;

export default countriesSlice.reducer;