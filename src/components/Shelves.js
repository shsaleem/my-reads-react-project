import React from "react";
import Book from "./Book";

const Shelves = ({ books, updateShelf }) => {
  const bookShelves = [
    { id: 1, type: "currentlyReading", title: "Currently Reading" },
    { id: 2, type: "wantToRead", title: "Want to Read" },
    { id: 3, type: "read", title: "Read" },
  ];

  return (
    <div className="list-books-content">
      {bookShelves.map((shelf) => {
        const { id, title, type } = shelf;
        const filteredBooks = books.filter((book) => book.shelf === type);
        return (
          <div className="bookshelf" key={id}>
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {filteredBooks.map((book) => (
                  <Book key={book.id} book={book} updateShelf={updateShelf} />
                ))}
              </ol>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Shelves;
