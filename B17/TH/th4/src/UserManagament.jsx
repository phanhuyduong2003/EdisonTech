import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectUser,
  getUserAsync,
  addUserAsync,
  removeUserAsync,
} from "./store/users/users";
import { nanoid } from "nanoid";

function User({ user, onDelete }) {
  const dispatch = useDispatch();
  onDelete = (id) => {
    dispatch(removeUserAsync({ id }));
  };

  return (
    <li>
      <span className="user-name">{user.name}</span>
      <button onClick={() => onDelete(user.id)}>Delete</button>
    </li>
  );
}

export default function UserManagement() {
  const dispatch = useDispatch();
  const { users } = useSelector(selectUser);
  const [currentUser, setCurrentUser] = useState({ id: 1, name: "" });

  useEffect(() => {
    dispatch(getUserAsync());
  }, [dispatch]);
  const onChange = (event) => {
    const { value } = event.target;
    setCurrentUser({ id: nanoid(), name: value });
  };

  const onClick = () => {
    const user = { id: users.length + 1, name: currentUser.name };
    dispatch(addUserAsync(user));
    setCurrentUser({ id: user.length + 2, name: "" });
  };

  const onDelete = (id) => {
    dispatch(removeUserAsync({ id }));
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
