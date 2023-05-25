import React, { useEffect, useState } from "react";
import {
  addBookAsync,
  editBookAsync,
  getBookAsync,
  removeBookAsync,
  selectBook,
} from "./store/books/books";
import { useDispatch, useSelector } from "react-redux";

export default function BookManagement() {
  const dispatch = useDispatch();
  const { books } = useSelector(selectBook);
  const [currentBook, setCurrentBook] = useState({ id: 1, name: "" });
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    dispatch(getBookAsync());
  }, [dispatch]);
  const onChange = (event) => {
    const { value } = event.target;
    setCurrentBook({ ...currentBook, name: value });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    const nextID = () => {
      let maxID = 0;
      books.forEach((book) => {
        if (book.id > maxID) {
          maxID = book.id;
        }
      });
      return maxID + 1;
    };
    const book = { id: nextID(), name: currentBook.name };
    dispatch(addBookAsync(book));
    setCurrentBook({ id: "", name: "" });
  };
  const onEdit = (book) => {
    setCurrentBook({ id: book.id, name: book.name });
    setVisible(true);
  };
  const onSave = () => {
    dispatch(editBookAsync({ id: currentBook.id, name: currentBook.name }));
    onCancel();
  };
  const onCancel = () => {
    setCurrentBook({ name: "" });
    setVisible(false);
  };
  const onDelete = (id) => {
    dispatch(removeBookAsync({ id }));
  };
  return (
    <div>
      <form onSubmit={() => onSubmit()}>
        <textarea
          type="text"
          placeholder="Add book"
          onChange={onChange}
          value={currentBook.name}
        />
        {!visible && (
          <button type="submit" onClick={onSubmit}>
            Add
          </button>
        )}
        {visible && (
          <div>
            <button type="submit" onClick={() => onSave()}>
              Save
            </button>
            <button onClick={() => onCancel()}>Cancel</button>
          </div>
        )}
      </form>
      <ul>
        {books?.map((book) => (
          <li key={book.id}>
            <span>{book.name} </span>
            <button onClick={() => onEdit(book)}>Edit</button>
            <button onClick={() => onDelete(book.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
