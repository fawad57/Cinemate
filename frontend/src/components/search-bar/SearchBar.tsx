import React from "react";
import { CiSearch } from "react-icons/ci";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="wrap">
      <div className="search">
        <input
          type="text"
          className="searchTerm"
          placeholder="What are you looking for?"
        />
        <button type="submit" className="searchButton">
          <CiSearch />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
