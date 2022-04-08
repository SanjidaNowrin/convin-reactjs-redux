import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import users from "../fakeData.json";

// First, create the thunk
export const fetchUsers = createAsyncThunk("fetchSingleUser", async () => {
  const response = await fetch("https://reqres.in/api/users?page=2").then(
    (res) => res.json()
  );
  console.log(response.data);
  return response;
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    status: "idle",
  },

  //fetch data
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload;
      state.status = "success";
    });
    builder.addCase(fetchUsers.pending, (state, action) => {
      state.status = "pending";
    });
  },
});

export default userSlice.reducer;
