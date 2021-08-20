import React from "react";
import Book from "./Book";

const SearchResults = ({ newBooks, updateShelf }) => {
  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {newBooks &&
          newBooks.map((book) => {
            return <Book key={book.id} book={book} updateShelf={updateShelf} />;
          })}
      </ol>
    </div>
  );
};

export default SearchResults;
