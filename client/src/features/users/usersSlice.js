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
        // .then((response) => {
        //     if (response.ok) {
        //       response.json().then((user) => console.log(user));
        //     } else {
        //       response.json().then((errorData) => console.log(errorData));
        //     }
        //   })
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
    user: {},
    loggedIn: false, // user object 
    status: "idle", // loading state
  },
  // reducers: {
    
  //   teamAddedToUser(state, action) {
  //   //   debugger;
  //     state.user.teams.push(action.payload)
  //   },
  //   teamRemovedFromUser(state, action) {
  //   //   debugger;
  //     const index = state.user.teams.findIndex((team) => team.id === action.payload.id)
  //     state.user.teams.splice(index, 1)
  //   },
  // },

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
            //write conditional that shows whether a user exists, else set state.loggedIn = false 
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
            // state.user = action.payload;
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

// export const { teamAddedToUser, teamRemovedFromUser } = usersSlice.actions;

export default usersSlice.reducer;