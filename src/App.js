import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import SearchPage from "./pages/SearchPage";
import HomePage from "./pages/HomePage";

function App() {
  const [books, setBooks] = useState([]);

  const getBooks = async () => {
    const booksData = await BooksAPI.getAll();
    setBooks(booksData);
  };

  useEffect(() => {
    getBooks();
  }, []);

  const updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      book.shelf = shelf;
      let newBooks = books.filter((b) => b.id !== book.id);
      setBooks([...newBooks, book]);
    });
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage books={books} updateShelf={updateShelf} />
        </Route>
        <Route exact path="/search">
          <SearchPage books={books} updateShelf={updateShelf} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
