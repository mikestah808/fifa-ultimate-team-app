// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


// // export const fetchUser = createAsyncThunk("user/fetchUser", () => {
// //   // return a Promise containing the data we want
// //   return fetch("/me")
// //     .then((response) => response.json())
// //     .then((user) => user);
// // });


// const sessionsSlice = createSlice({
//   name: "sessions",
//   initialState: {
//     user: {}, // user object stored in session
//     status: "idle", // loading state
//   },
//   reducers: {
//     login(state, action) {
//         // debugger;
//       state.user = action.payload
//     },
//     logout(state, action) {
//         debugger;
//         const index = state.user.find((user) => user === action.payload);
//         state.user.splice(index, 1);
//     }
//   },
// //   extraReducers: {
// //     // handle async actions: pending, fulfilled, rejected (for errors)
// //     [fetchUser.pending](state) {
// //       state.status = "loading";
// //     },
// //     [fetchUser.fulfilled](state, action) {
// //       state.user = action.payload;
// //       state.status = "idle";
// //     },
// //   },
// });

// export const { login, logout } = sessionsSlice.actions;

// export default sessionsSlice.reducer;