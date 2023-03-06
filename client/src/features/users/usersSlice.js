import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk("user/fetchUser", () => {
    return fetch("/me")
      .then((response) => response.json())
      .then((user) => user);
  });


export const signup = createAsyncThunk("user/createUser", ({first_name, last_name, email, password}) => {
    return fetch("/signup", {
        method: "POST",
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({first_name, last_name, email, password})
        })
        .then((resp) => resp.json())
        .then((user) => user)
})

export const login = createAsyncThunk("user/loginUser", ({email, password}) => {
  return fetch("/login", {
      method: "POST",
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({email, password})
      })
      .then((resp) => resp.json())
      .then((user) => user)
})

export const logout = createAsyncThunk("user/logoutUser", () => {
    return fetch("/logout", {
        method: "DELETE",
        headers: {
          "Content-type": "application/json"
        }
      })
        .then((resp) => resp.ok)
    })


const usersSlice = createSlice({
  name: "users",
  initialState: {
    user: {error: []},
    loggedIn: false, // user object 
    status: "idle", // loading state
    errorMessages: []
  },

  extraReducers: (builder) => { 
    builder
    .addCase(signup.fulfilled, (state, action) => {
        state.status = 'idle';
        if (action.payload.errors){
            state.errorMessages = action.payload.errors;
        } else{
            state.errorMessages = null;
            state.user = action.payload;
            state.loggedIn = true;
        }
    })
    .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = 'idle';
        if (action.payload.errors){
            state.errorMessages = action.payload.errors;
        } else{
            state.errorMessages = null;
            state.user = action.payload;
            if(!action.payload.error){
                state.loggedIn = true
            } else {
                state.loggedIn = false
            } 

        }
    })
    .addCase(logout.fulfilled, (state, action) => {
        state.status = 'idle';
        if (action.payload.errors){
            state.errorMessages = action.payload.errors;
        } else{
            state.errorMessages = null;
            state.user = {}
            state.loggedIn = false;
        }
    })
    .addCase(login.fulfilled, (state, action) => {
        state.status = 'idle';
        if (action.payload.errors){
            state.errorMessages = action.payload.errors;
        } else{
            state.errorMessages = null;
            state.user = action.payload;
            state.loggedIn = true;
        }
    })
  }
});


export default usersSlice.reducer;