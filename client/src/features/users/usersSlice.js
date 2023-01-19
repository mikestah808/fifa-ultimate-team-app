import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk("user/fetchUser", () => {
    // return a Promise containing the data we want
    return fetch("/me")
      .then((response) => response.json())
      .then((user) => user);
  });


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

export const login = createAsyncThunk("user/loginUser", ({email, password}) => {
  // return a Promise containing the data we want
  return fetch("/login", {
      method: "POST",
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({email, password})
      })
      .then((resp) => resp.json())
      .then((user) => user)
})

export const logout = createAsyncThunk("user/logoutUser", () => {
    // return a Promise containing the data we want
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
    user: {}, // user object 
    status: "idle", // loading state
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
    })
    .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = 'idle';
        if (action.payload.errors){
            state.errorMessages = action.payload.errors;
        } else{
            state.errorMessages = null;
            state.user = action.payload;
        }
    })
    .addCase(logout.fulfilled, (state, action) => {
        state.status = 'idle';
        if (action.payload.errors){
            state.errorMessages = action.payload.errors;
        } else{
            state.errorMessages = null;
            state.user = action.payload;
        }
    })
    .addCase(login.fulfilled, (state, action) => {
        state.status = 'idle';
        if (action.payload.errors){
            state.errorMessages = action.payload.errors;
        } else{
            state.errorMessages = null;
            state.user = action.payload;
        }
    })
  }
});

// export const { login } = usersSlice.actions;

export default usersSlice.reducer;