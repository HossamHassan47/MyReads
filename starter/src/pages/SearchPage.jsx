import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import BooksGrid from "../components/BooksGrid";

const SearchPage = (props) => {
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Add a book
        </Link>

        <div className="search-books-input-wrapper">
          <input type="text" placeholder="Search by title, author, or ISBN" />
        </div>
      </div>
      <div className="search-books-results">
        <BooksGrid />
      </div>
    </div>
  );
};

SearchPage.propTypes = {};

export default SearchPage;
