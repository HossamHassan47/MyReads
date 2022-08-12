import React from "react";
import PropTypes from "prop-types";
import Book from "./Book";

const BooksGrid = ({ books }) => {
  return (
    <ol className="books-grid">
      {books.map((b) => (
        <li key={b.id}>
          <Book book={b} />
        </li>
      ))}
    </ol>
  );
};

BooksGrid.propTypes = {};

export default BooksGrid;
