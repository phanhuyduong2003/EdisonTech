import React from "react";
import "./Manage.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addArticle, addUser, removeArticle, removeUser } from "./store/manage";

export default function Manage() {
  const [inputValue, setInputValue] = useState("");
  const [inputArticle, setInputArticle] = useState([]);
  const userList = useSelector((state) => state.manage.users);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { value } = event.target;
    setInputValue(value);
  };

  const handleChangeArticle = (event, userID) => {
    const { value } = event.target;
    setInputArticle((prevValues) => {
      const newValues = [...prevValues];
      newValues[userID] = value;
      return newValues;
    });
  };

  const handleAddUser = (event) => {
    event.preventDefault();
    const value = inputValue.trim();
    if (value) {
      dispatch(addUser(value));
      setInputValue("");
    }
  };

  const handleRemoveUser = (id) => {
    dispatch(removeUser(id));
  };

  const handleAddArticle = (event, userID) => {
    event.preventDefault();
    const value = inputArticle[userID].trim();
    if (value) {
      dispatch(addArticle({ id: userID, article: value }));
      setInputArticle((prevValues) => {
        const newValues = [...prevValues];
        newValues[userID] = "";
        return newValues;
      });
    }
  };

  const handleRemoveArticle = (userID, article) => {
    dispatch(removeArticle({ id: userID, articleID: article }));
  };

  return (
    <div>
      <form onSubmit={handleAddUser}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Add new user"
          value={inputValue}
          onChange={handleChange}
        />
        <button onClick={handleAddUser}>Add</button>
      </form>
      <div>
        <table
          style={{ border: "1px solid black", borderCollapse: "collapse" }}
        >
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Articles</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {userList &&
              userList.map((user) => {
                return (
                  <tr key={user.id}>
                    <td>{user.id} </td>
                    <td>{user.name} </td>
                    <td>
                      <div>
                        <form
                          onSubmit={(event) => handleAddArticle(event, user.id)}
                        >
                          <label>Article</label>
                          <input
                            type="text"
                            placeholder="Add new article"
                            value={inputArticle[user.id]}
                            onChange={(event) =>
                              handleChangeArticle(event, user.id)
                            }
                          />
                          <button
                            type="submit"
                            onClick={(event) =>
                              handleAddArticle(event, user.id)
                            }
                          >
                            Add
                          </button>
                        </form>
                        <ul>
                          {user.articles &&
                            user.articles.map((article, index) => {
                              return (
                                <li key={`${article} - ${index}`}>
                                  <div className="list-article">
                                    <span>{article.name}</span>
                                    <button
                                      onClick={() =>
                                        handleRemoveArticle(user.id, article.id)
                                      }
                                    >
                                      Delete
                                    </button>
                                  </div>
                                </li>
                              );
                            })}
                        </ul>
                      </div>
                    </td>
                    <td>
                      <button onClick={() => handleRemoveUser(user.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
