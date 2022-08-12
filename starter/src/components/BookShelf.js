import React from "react";
import PropTypes from "prop-types";
import BooksGrid from "./BooksGrid";

const BookShelf = ({ title, books, onShelfChange }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <BooksGrid books={books} onShelfChange={onShelfChange} />
      </div>
    </div>
  );
};

BookShelf.propTypes = {};

export default BookShelf;
