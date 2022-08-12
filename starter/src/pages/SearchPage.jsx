import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import BooksGrid from "../components/BooksGrid";
import * as BooksAPI from "../BooksAPI";

const SearchPage = (props) => {
  const [books, setBooks] = useState([]);

  const handleSearch = (query) => {
    const searchBooks = async () => {
      const result = await BooksAPI.search(query.trim().replace(".", ""));
      if (Array.isArray(result)) {
        setBooks(result);
      } else {
        setBooks([]);
      }
      console.log(result);
    };

    if (query.length > 0) {
      searchBooks();
    } else {
      setBooks([]);
    }
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Add a book
        </Link>

        <div className="search-books-input-wrapper">
          <input
            type="text"
            onChange={(e) => {
              handleSearch(e.target.value);
            }}
            placeholder="Search by title, author, or ISBN"
          />
        </div>
      </div>
      <div className="search-books-results">
        <BooksGrid books={books} />
      </div>
    </div>
  );
};

SearchPage.propTypes = {};

export default SearchPage;
