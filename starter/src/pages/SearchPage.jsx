import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import BooksGrid from "../components/BooksGrid";
import * as BooksAPI from "../BooksAPI";

const SearchPage = (props) => {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const searchBooks = async () => {
      const result = await BooksAPI.search(query);
      setBooks(result);
      console.log(result);
    };

    searchBooks();
  }, [query]);

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Add a book
        </Link>

        <div className="search-books-input-wrapper">
          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            placeholder="Search by title, author, or ISBN"
          />
        </div>
      </div>
      <div className="search-books-results">
        <BooksGrid books={[]} />
      </div>
    </div>
  );
};

SearchPage.propTypes = {};

export default SearchPage;
