import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchUser = createAsyncThunk("user/fetchUser", () => {
  // return a Promise containing the data we want
  return fetch("/me")
    .then((response) => response.json())
    .then((user) => user);
});


const sessionsSlice = createSlice({
  name: "session",
  initialState: {
    user: {}, // array of user
    status: "idle", // loading state
  },
  reducers: {
    currentUser(state, action) {
        // debugger;
      // using createSlice lets us mutate state!
      state.user = action.payload
    }
  },
  extraReducers: {
    // handle async actions: pending, fulfilled, rejected (for errors)
    [fetchUser.pending](state) {
      state.status = "loading";
    },
    [fetchUser.fulfilled](state, action) {
      state.user = action.payload;
      state.status = "idle";
    },
  },
});

export const { currentUser } = sessionsSlice.actions;

export default sessionsSlice.reducer;