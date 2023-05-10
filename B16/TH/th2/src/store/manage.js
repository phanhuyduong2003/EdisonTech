import { createSlice } from "@reduxjs/toolkit";
const manageSlice = createSlice({
  name: "manage",
  initialState: {
    users: [],
    // articles: []
  },
  reducers: {
    addUser: (state, action) => {
      console.log("state", state.users);
      console.log("action", action);
      const newUser = {
        id: state.users.length + 1,
        name: action.payload,
        articles: [],
      };
      state.users.push(newUser);
    },
    removeUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
    addArticle: (state, action) => {
      console.log("state", state.articles);
      console.log("action", action);
      // state.articles.push(newArticle)
      state.users = state.users.map((user) => {
        if (user.id === action.payload.id) {
          const newArticle = {
            id: user.articles.length + 1,
            name: action.payload.article,
          };
          user.articles.push(newArticle);
        }
        return user;
      });
    },
    removeArticle: (state, action) => {
      state.users = state.users.map((user) => {
        if (user.id === action.payload.id) {
          user.articles = user.articles.filter((article) => {
            return article.id !== action.payload.articleID;
          });
        }
        return user;
      });
    },
  },
});
const manageReducer = manageSlice.reducer;
export const { addUser } = manageSlice.actions;
export const { removeUser } = manageSlice.actions;
export const { addArticle } = manageSlice.actions;
export const { removeArticle } = manageSlice.actions;
export default manageReducer;
