import "./App.css";
import { useEffect, useState } from "react";
import SearchPage from "./pages/SearchPage";
import BooksPage from "./pages/BooksPage";
import { Routes, Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";

function App() {
  const categories = [
    { id: "currentlyReading", title: "Currently Reading" },
    { id: "wantToRead", title: "Want To Read" },
    { id: "read", title: "Read" },
  ];

  const [myBooks, setMyBooks] = useState([]);

  useEffect(() => {
    getMyBooks();
  }, []);

  const getMyBooks = async () => {
    const result = await BooksAPI.getAll();
    setMyBooks(result);
    //console.log(result);
  };

  const handleOnShelfChange = async (book, shelf) => {
    const result = await BooksAPI.update(book, shelf);

    getMyBooks();
  };

  return (
    <div className="app">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <BooksPage
              categories={categories}
              books={myBooks}
              onShelfChange={handleOnShelfChange}
            />
          }
        />
        <Route
          path="/search"
          element={
            <SearchPage books={myBooks} onShelfChange={handleOnShelfChange} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
