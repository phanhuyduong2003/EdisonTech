import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewUser, deleteUser, getListUser, selectUser } from "./store/users";
import { useState } from "react";

function User({ user, onDelete }) {
  const onClick = (event) => {
    event.preventDefault();
    onDelete(user.id);
  };
  return (
    <li>
      <span className="username">{user.name}</span>
      <button onClick={onClick}>Delete</button>
    </li>
  );
}
export default function UserManagement() {
  const dispatch = useDispatch();
  const { users } = useSelector(selectUser);
  const [currentUser, setCurrentUser] = useState({ id: 1, name: "" });
  useEffect(() => {
    dispatch(getListUser());
  }, [dispatch]);
  const onChange = (event) => {
    const { value } = event.target;
    setCurrentUser({ ...currentUser, name: value });
  };
  const onClick = () => {
    const user = { id: users.length + 1, name: currentUser.name };
    dispatch(addNewUser(user));
    setCurrentUser({ id: users.length + 2, name: "" });
  };
  const onDelete = (id) => {
    dispatch(deleteUser({ id }));
  };
  return (
    <div className="container">
      <input type="text" onChange={onChange} value={currentUser.name} />
      <button onClick={onClick}>Add</button>
      <ul>
        {users?.map((user) => (
          <User key={user.id} user={user} onDelete={onDelete} />
        ))}
      </ul>
    </div>
  );
}
