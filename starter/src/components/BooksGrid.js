import React from "react";
import PropTypes from "prop-types";
import Book from "./Book";

const BooksGrid = ({ books, onShelfChange }) => {
  return (
    <ol className="books-grid">
      {books.map((b) => (
        <li key={b.id}>
          <Book book={b} onShelfChange={onShelfChange} />
        </li>
      ))}
    </ol>
  );
};

BooksGrid.propTypes = {};

export default BooksGrid;
