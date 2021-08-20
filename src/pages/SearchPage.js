import React from "react";
import Search from "../components/Search";

const SearchPage = ({ books, updateShelf }) => {
  return (
    <div>
      <Search books={books} updateShelf={updateShelf} />
    </div>
  );
};

export default SearchPage;
