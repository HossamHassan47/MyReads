import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import BookShelf from "../components/BookShelf";
import * as BooksAPI from "../BooksAPI";

const BooksPage = (props) => {
  const categories = [
    { id: "currentlyReading", title: "Currently Reading" },
    { id: "wantToRead", title: "Want To Read" },
    { id: "read", title: "Read" },
  ];

  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    const loadAllBooks = async () => {
      const result = await BooksAPI.getAll();
      setAllBooks(result);
      console.log(result);
    };
    loadAllBooks();
  }, []);

  const handleOnShelfChange = (book, shelf) => {
    const result = BooksAPI.update(book, shelf);

    setAllBooks(
      allBooks.map((b) => (b.id === book.id ? { ...b, shelf: shelf } : b))
    );
  };

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
              books={allBooks.filter((b) => b.shelf === c.id)}
              onShelfChange={handleOnShelfChange}
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
