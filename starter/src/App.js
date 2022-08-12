import "./App.css";
import { useState } from "react";
import SearchPage from "./pages/SearchPage";
import BooksPage from "./pages/BooksPage";
import { Routes, Route, useNavigate } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<BooksPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </div>
  );
}

export default App;
