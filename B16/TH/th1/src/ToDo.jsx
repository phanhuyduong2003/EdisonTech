import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, finishTodo, removeTodo } from "./store/todo";
import { useMemo } from "react";
export default function ToDo() {
  const [inputValue, setInputValue] = useState("");
  const [filter, setFilter] = useState("");
  const todoList = useSelector((state) => state.todo.items);
  const parseTodo = useMemo(() => {
    return todoList.filter((item) => {
      if (!filter) {
        return true;
      }
      return item.status === filter;
    });
  }, [todoList, filter]);
  const filterList = (type) => {
    setFilter(type);
  };
  const dispatch = useDispatch();
  const handleChange = (event) => {
    const { value } = event.target;
    setInputValue(value)
  };
    const handleSubmit = (event) => {
        event.preventDefault()
      const value = inputValue.trim()
    if (value) {
      dispatch(addTodo(value));
      setInputValue("");
    }
  };
  const handleFinish = (id) => {
    dispatch(finishTodo(id));
  };
  const handleRemove = (id) => {
    dispatch(removeTodo(id));
  };
  return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: 20}}>
      <h1>Todo App</h1>
      <div>
        <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="todo"
              id=""
              placeholder="Add new todo"
              value={inputValue}
              onChange={handleChange}
            />
            <button onClick={handleSubmit}>Add</button>
        </form>
      </div>
      <span>Todo List:</span>
      <div>
        <button onClick={() => filterList("")}>All</button>
        <button onClick={() => filterList("todo")}>Todo</button>
        <button onClick={() => filterList("finish")}>Done</button>
      </div>
      <ul style={{listStyleType: 'none', margin: 0, padding: 0}}>
        {parseTodo &&
          parseTodo.map((todoItem) => {
            return (
              <li>
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: 200, borderBottom: '1px solid black', paddingBottom: 5}}>
                  <span style={todoItem.status === 'finish' ? {textDecoration: 'line-through'} : {}}>{todoItem.content} </span>
                  <div>
                    {todoItem.status === "todo" ? (
                      <button onClick={() => handleFinish(todoItem.id)}>
                        Finish
                      </button>
                    ) : (
                      <button onClick={() => handleRemove(todoItem.id)}>
                        Remove
                      </button>
                    )}
                  </div>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
