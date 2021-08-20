import React from "react";
import Header from "../components/Header";
import Shelves from "../components/Shelves";
import SearchButton from "../components/SearchButton";

const HomePage = ({ books, updateShelf }) => {
  return (
    <div>
      <Header />
      <Shelves books={books} updateShelf={updateShelf} />
      <SearchButton />
    </div>
  );
};

export default HomePage;
