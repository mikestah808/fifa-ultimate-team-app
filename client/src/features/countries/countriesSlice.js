import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCountries = createAsyncThunk("country/fetchCountries", () => {
  // return a Promise containing the data we want
  return fetch("/countries")
    .then((response) => response.json())
    .then((countries) => countries);
});


export const addCountry = createAsyncThunk("country/addCountry", ({name, image_url}) => {
  // return a Promise containing the data we want
  return fetch("/countries", {
      method: "POST",
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({name,image_url})
      })
      .then((resp) => resp.json())
      .then((countries) => countries)
})

// export const deleteCountry = createAsyncThunk("country/deleteTeam", (id) => {
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
  //   .addCase(deleteCountry.fulfilled, (state, action) => {
  //     state.status = 'idle';
  //     if (action.payload.errors){
  //         state.errorMessages = action.payload.errors;
  //     } else{
  //       state.errorMessages = null;
  //       const index = state.entities.findIndex((country) => country.id === action.payload)
  //       state.entities.splice(index, 1)
  //     }
  // })
  }
});


export default countriesSlice.reducer;