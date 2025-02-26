import React from "react";

const Search = ({ searchTerm, setSearchTerm, onSearch }) => {
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      onSearch();
    }
  };
  return (
    <div className="search w-full bg-light-100/5 px-4 py-3 rounded-lg max-w-3xl mx-auto border border-blue-400">
      <div className="relative flex items-center">
        <img
          src="search.svg"
          alt="search"
          className="absolute left-2 h-5 w-5"
        />
        <input
          type="text"
          className="w-full bg-transparent py-2 sm:pr-10 pl-10 text-base text-gray-200 placeholder-light-200 outline-hidden"
          placeholder="Search through movies"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          onKeyDown={handleKeyPress}
        />
      </div>
    </div>
  );
};

export default Search;
