import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const signup = createAsyncThunk("user/createUser", ({first_name, last_name, email, password}) => {
    // return a Promise containing the data we want
    return fetch("/signup", {
        method: "POST",
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({first_name, last_name, email, password})
        })
        .then((resp) => resp.json())
        .then((user) => user)
})


const usersSlice = createSlice({
  name: "users",
  initialState: {
    user: {}, // user object 
    status: "idle", // loading state
  },
  reducers: {
    newUser(state, action) {
        // debugger;
      // using createSlice lets us mutate state!
      state.user = action.payload
    }
  },
  extraReducers: (builder) => { 
    // handle async actions: pending, fulfilled, rejected (for errors)
    builder
    .addCase(signup.fulfilled, (state, action) => {
        state.status = 'idle';
        if (action.payload.errors){
            state.errorMessages = action.payload.errors;
        } else{
            state.errorMessages = null;
            state.user = action.payload;
        }
        console.log(action.payload);
    })
  }
});

export const { newUser } = usersSlice.actions;

export default usersSlice.reducer;