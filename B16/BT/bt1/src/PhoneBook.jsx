import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addContact, addFavorite, removeContact, removeFavorite } from "./store/phonebook";
export default function PhoneBook() {
  const [nameValue, setNameValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const contacts = useSelector((state) => state.phonebook.contacts);
  const favorites = useSelector((state) => state.phonebook.favorites);
  const dispatch = useDispatch();
  const handleChangeName = (event) => {
    const { value } = event.target;
    setNameValue(value);
  };
  const handleChangePhone = (event) => {
    const { value } = event.target;
    setPhoneValue(value);
  };
  const handleAddContact = (event) => {
    event.preventDefault();
    const name = nameValue.trim();
    const phone = phoneValue.trim();
    if (name && phone) {
      dispatch(addContact({ name, phone }));
      setNameValue("");
      setPhoneValue("");
    }
  };
  const handleRemoveContact = (id) => {
    dispatch(removeContact(id));
    dispatch(removeFavorite(id))
    };
    const handleAddFavorite = (id) => {
        dispatch(addFavorite(id))
    }
  const handleRemoveFavorite = (id) => {
      dispatch(removeFavorite(id));
  };
  return (
    <div style={{ width: 600 }}>
      <form onSubmit={handleAddContact}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={nameValue}
          onChange={handleChangeName}
        />
        <label htmlFor="phone">Phone number</label>
        <input
          type="tel"
          name="phone"
          value={phoneValue}
          onChange={handleChangePhone}
        />
        <button onClick={handleAddContact}>Add</button>
      </form>
      <div>
        <h5>Favorites</h5>
        <ul>
          {favorites.map((contact) => (
            <li
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "5px 0",
                borderBottom: "1px solid black",
              }}
              key={contact.id}
            >
              <span>{contact.name}</span>
              <span>{contact.phone}</span>
              <button onClick={() => handleRemoveFavorite(contact.id)}>
                Remove favorite
              </button>
            </li>
          ))}
        </ul>
        <h5>Contacts</h5>
        <ul>
          {contacts.map((contact) => (
            <li
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "5px 0",
                borderBottom: "1px solid black",
              }}
              key={contact.id}
            >
              <span>{contact.name}</span>
              <span>{contact.phone}</span>
              <button onClick={() => handleAddFavorite(contact.id)}>
                Add to favorite
              </button>
              <button onClick={() => handleRemoveContact(contact.id)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
