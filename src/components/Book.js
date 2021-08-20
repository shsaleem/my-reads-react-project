import React from "react";

const Book = ({ book, updateShelf }) => {
  const { id, imageLinks, shelf, title, authors } = book;

  const handleChange = (e) => {
    updateShelf(book, e.target.value);
  };

  return imageLinks ? (
    <li key={id}>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${imageLinks.thumbnail})`,
            }}
          />

          <div className="book-shelf-changer">
            <select value={shelf ? shelf : "none"} onChange={handleChange}>
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>

        <div className="book-title">
          {title ? title : "Tilte not Available"}
        </div>
        <div className="book-authors">
          {authors ? authors.join(", ") : "Unknown Author"}
        </div>
      </div>
    </li>
  ) : null;
};

export default Book;
