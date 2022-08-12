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
    const getMyBooks = async () => {
      const result = await BooksAPI.getAll();
      setMyBooks(result);
      console.log(result);
    };
    getMyBooks();
  }, []);

  const handleOnShelfChange = (book, shelf) => {
    BooksAPI.update(book, shelf);

    setMyBooks(
      myBooks.map((b) => (b.id === book.id ? { ...b, shelf: shelf } : b))
    );
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
