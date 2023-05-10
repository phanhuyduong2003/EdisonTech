import { createSlice } from "@reduxjs/toolkit";
const todoSlice = createSlice({
  name: "todo",
  initialState: {
    items: [],
  },
  reducers: {
    addTodo: (state, action) => {
      console.log("state", state.items);
      console.log("action", action);
      const newTodo = { id: state.items.length + 1, content: action.payload, status: "todo" };
      state.items.push(newTodo);
    },
    finishTodo: (state, action) => {
      console.log("state", state.items);
      console.log("action", action);
      const index = state.items.findIndex(
        (value) => value.id === action.payload
      );
      if (index !== -1) {
        state.items[index].status = "finish";
      }
    },
    removeTodo: (state, action) => {
      state.items = state.items.filter((item) => {
        return item.id !== action.payload;
      });
    },
  },
});
const todoReducer = todoSlice.reducer;
export const { addTodo } = todoSlice.actions;
export const { finishTodo } = todoSlice.actions;
export const { removeTodo } = todoSlice.actions;
export default todoReducer;
