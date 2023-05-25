import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getListTodo = createAsyncThunk("todos/getListTodo", async () => {
  const list = await axios.get("http://localhost:3000/todos");
  return list;
});
export const addNewTodo = createAsyncThunk(
  "todos/addNewTodo",
  async (data, thunkAPI) => {
    const newTodo = {
      id: data.id,
      title: data.title
    }
    const list = await axios.post("http://localhost:3000/todos", newTodo);
    thunkAPI.dispatch(getListTodo());
    return list;
  }
);
export const updateTodo = createAsyncThunk(
  "todos/updateTodo",
  async ({ id, title }, thunkAPI) => {
    const list = await axios.put(`http://localhost:3000/todos/${id}`, { id, title });
    thunkAPI.dispatch(getListTodo());
    return list;
  }
);
export const deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  async (params, thunkAPI) => {
    const list = await axios.delete(`http://localhost:3000/todos/${params?.id}`);
    thunkAPI.dispatch(getListTodo());
    return list;
  }
);

const initialState = {
  todos: [],
  status: "idle",
};
export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    removeTodo: (state, action) => {
      const index = state.todos.findIndex(
        (user) => user.id === action.payload.id
      );
      if (index !== -1) {
        state.todos.splice(index, 1);
      }
    },
    editTodo: (state, action) => {
      const index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      if (index !== -1) {
        state.todos[index] = action.payload;
      }
    },
  },
  extraReducers: {
    [getListTodo.pending]: (state) => {
      state.loading = true;
    },
    [getListTodo.fulfilled]: (state, action) => {
      state.loading = false;
      state.todos = action.payload.data;
    },
    [getListTodo.rejected]: (state) => {
      state.loading = false;
    },
    [addNewTodo.pending]: (state) => {
      state.loading = true;
    },
    [addNewTodo.fulfilled]: (state, action) => {
      state.loading = false;
      state.todos.push(action.payload);
    },
    [addNewTodo.rejected]: (state) => {
      state.loading = false;
    },
    [updateTodo.pending]: (state) => {
      state.loading = true;
    },
    [updateTodo.fulfilled]: (state, action) => {
      state.loading = false;
      const index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      if (index !== -1) {
        state.todos.splice(index, 1, action.payload);
      }
    },
    [updateTodo.rejected]: (state) => {
      state.loading = false;
    },
    [deleteTodo.pending]: (state) => {
      state.loading = true;
    },
    [deleteTodo.fulfilled]: (state, action) => {
      state.loading = false;
      state.todos = [];
    },
    [deleteTodo.rejected]: (state) => {
      state.loading = false;
    },
  },
});
export const { addTodo, editTodo, removeTodo } = todoSlice.actions;
export const selectTodo = (state) => state.todo;
const reducer = todoSlice.reducer;
export default reducer;
