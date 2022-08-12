import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import BooksGrid from "../components/BooksGrid";
import * as BooksAPI from "../BooksAPI";

const SearchPage = ({ books, onShelfChange }) => {
  const [searchResult, setSearchResult] = useState([]);

  const handleSearch = (query) => {
    const searchBooks = async () => {
      const result = await BooksAPI.search(query.trim().replace(".", ""));
      if (Array.isArray(result)) {
        setSearchResult(result);
      } else {
        setSearchResult([]);
      }
      console.log(result);
    };

    if (query.length > 0) {
      searchBooks();
    } else {
      setSearchResult([]);
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
        <BooksGrid books={searchResult} onShelfChange={onShelfChange} />
      </div>
    </div>
  );
};

SearchPage.propTypes = {};

export default SearchPage;
