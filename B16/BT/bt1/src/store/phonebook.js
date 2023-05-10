import { createSlice } from "@reduxjs/toolkit";

const phonebookSlice = createSlice({
  name: "phonebook",
  initialState: {
    contacts: [],
    favorites: [],
  },
  reducers: {
      addContact: (state, action) => {
          console.log('state', state);
          console.log('action', action.payload);
          const {name, phone} = action.payload
          const newContact = {id: state.contacts.length + 1, name, phone}
          state.contacts.push(newContact);
    },
    removeContact: (state, action) => {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );
    },
      addFavorite: (state, action) => {
          console.log('state', state);
          console.log('action', action.payload);
      const contact = state.contacts.find(
        (contact) => contact.id === action.payload
      );
      if (contact && !state.favorites.includes(contact)) {
        state.favorites.push(contact);
      }
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});
const phonebookReducer = phonebookSlice.reducer;
export const { addContact, removeContact, addFavorite, removeFavorite } =
  phonebookSlice.actions;
export default phonebookReducer;
