import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";
import SearchResults from "./SearchResults";

function Search({ books, updateShelf }) {
  const [search, setSearch] = useState("");
  const [searchBooks, setSearchBooks] = useState([]);

  useEffect(() => {
    if (search) {
      BooksAPI.search(search).then((books) => {
        books.length > 0 ? setSearchBooks(books) : setSearchBooks([]);
      });
    } else {
      setSearchBooks([]);
    }
  }, [search]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            value={search}
            onChange={handleChange}
            placeholder="Search by title or author"
          />
        </div>
      </div>
      <SearchResults newBooks={searchBooks} updateShelf={updateShelf} />
    </div>
  );
}

export default Search;
