import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  users: [],
  status: "idle",
};
export const getListUser = createAsyncThunk(
  "users/getListUser",
  async (params, thunkAPI) => {
    const list = await axios.get("http://localhost:3000/users");
    return list;
  }
);
export const addNewUser = createAsyncThunk(
  "users/addNewUser",
  async (userData, thunkAPI) => {
    const list = await axios.post(`http://localhost:3000/users`, userData);
    thunkAPI.dispatch(getListUser());
    return list;
  }
);
export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async (params, thunkAPI) => {
    const list = await axios.delete(
      `http://localhost:3000/users/${params?.id}`
    );
    thunkAPI.dispatch(getListUser());
    return list;
  }
);
export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    removeUser: (state, action) => {
      const index = state.users.findIndex(
        (user) => user.id === action.payload.id
      );
      if (index !== -1) {
        state.users.splice(index, 1);
      }
    },
  },
  extraReducers: {
    [getListUser.pending]: (state, action) => {
      state.loading = true;
    },
    [getListUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.users = action.payload.data;
    },
    [getListUser.rejected]: (state, action) => {
      state.loading = false;
    },
    [addNewUser.pending]: (state, action) => {
      state.loading = true;
    },
    [addNewUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.users.push(action.payload);
    },
    [addNewUser.rejected]: (state, action) => {
      state.loading = false;
    },
    [deleteUser.pending]: (state, action) => {
      state.loading = true;
    },
    [deleteUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.users = [];
    },
    [deleteUser.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});
export const { addUser, removeUser } = userSlice.actions;
export const selectUser = (state) => state.user;
export default userSlice.reducer;
