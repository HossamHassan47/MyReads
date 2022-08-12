import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import BookShelf from "../components/BookShelf";

const BooksPage = ({ categories, books, onShelfChange }) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {categories.map((c) => (
            <BookShelf
              key={c.id}
              title={c.title}
              books={books.filter((b) => b.shelf === c.id)}
              onShelfChange={onShelfChange}
            />
          ))}
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};

BooksPage.propTypes = {};

export default BooksPage;
