import React from "react";
import PropTypes from "prop-types";

const Book = ({ book, onShelfChange }) => {
  const handleOnChange = (e) => {
    onShelfChange(book, e.target.value);
  };
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage:
              book.imageLinks !== undefined
                ? `url("${book.imageLinks.smallThumbnail}")`
                : "",
          }}
        ></div>
        <div className="book-shelf-changer">
          <select defaultValue={book.shelf} onChange={handleOnChange}>
            <option value="none" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            {book.shelf !== "none" && <option value="none">None</option>}
          </select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors}</div>
    </div>
  );
};

Book.propTypes = {};

export default Book;
