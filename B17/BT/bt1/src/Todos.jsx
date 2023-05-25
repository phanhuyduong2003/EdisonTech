import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addNewTodo,
  deleteTodo,
  getListTodo,
  selectTodo,
  updateTodo,
} from "./store/todos/todos";

export default function Todos() {
  const dispatch = useDispatch();
  const { todos } = useSelector(selectTodo);
  const [currentTodo, setCurrentTodo] = useState({ id: 1, title: "" });
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    dispatch(getListTodo());
  }, [dispatch]);
  const onChange = (event) => {
    const { value } = event.target;
    setCurrentTodo({ ...currentTodo, title: value });
  };
  const onSubmit = () => {
    const nextID = () => {
      let maxID = 0
      todos.forEach(todo => {
        if (todo.id > maxID) {
          maxID = todo.id
        }
      })
      return maxID + 1
    }
    const todo = { id: nextID(), title: currentTodo.title };
    dispatch(addNewTodo(todo));
    setCurrentTodo({ id: "", title: "" });
  };
  const onEdit = (todo) => {
    setCurrentTodo({ id: todo.id, title: todo.title });
    setVisible(true);
  };
  const onDelete = (id) => {
    dispatch(deleteTodo({ id }));
  };
  const onSave = () => {
    dispatch(updateTodo({ id: currentTodo.id, title: currentTodo.title }));
    onCancel();
  };
  const onCancel = () => {
    setCurrentTodo({ title: "" });
    setVisible(false);
  };
  return (
    <div>
      <form onSubmit={(event) => event.preventDefault()}>
        <input
          type="text"
          name="todo"
          placeholder="Add todo"
          value={currentTodo.title}
          onChange={onChange}
        />
        {!visible && (
          <button type="submit" onSubmit={onSubmit} onClick={onSubmit}>
            Add
          </button>
        )}
        {visible && (
          <div>
            <button type="submit" onSubmit={onSave} onClick={onSave}>
              Save
            </button>
            <button onClick={onCancel}>Cancel</button>
          </div>
        )}
      </form>
      <ul>
        {todos?.map((todo) => (
          <div key={todo.id}>
            <li>
              <span>{todo.title} </span>
              <button onClick={() => onEdit(todo)}>Edit</button>
              <button onClick={() => onDelete(todo.id)}>Delete</button>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}
