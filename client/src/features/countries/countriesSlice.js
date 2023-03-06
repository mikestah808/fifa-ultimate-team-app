import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCountries = createAsyncThunk("country/fetchCountries", () => {
  return fetch("/countries")
    .then((response) => response.json())
    .then((countries) => countries);
});


export const addCountry = createAsyncThunk("country/addCountry", ({name, image_url}) => {
  return fetch("/countries", {
      method: "POST",
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({name,image_url})
      })
      .then((resp) => resp.json())
      .then((countries) => countries)
})


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


export default countriesSlice.reducer;