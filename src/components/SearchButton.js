import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const SearchButton = () => {
  return (
    <div className="open-search">
      <Link to="/search" className="search-link">
        Add a book
      </Link>
    </div>
  );
};

export default SearchButton;
