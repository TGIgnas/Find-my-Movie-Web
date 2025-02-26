import React, { useState } from "react";
import Search from "./Search";
import HomeButton from "./HomeButton";

const Header = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    if (searchTerm.trim()) {
      onSearch(searchTerm);
    }
  };
  return (
    <header>
      <h1 className="mx-auto max-w-4xl text-center text-5xl font-bold leading-tight tracking-[-1%] text-white sm:text-[64px] sm:leading-[76px]">
        Find my
        <span className="mx-2">
          <span className="bg-gradient-to-r from-[#D6C7FF] to-[#AB8BFF] bg-clip-text text-transparent">
            Movie
          </span>
        </span>
      </h1>

      <div className="flex items-center gap-4 mt-6 w-full max-w-3xl mx-auto">
        <HomeButton />
        <Search
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onSearch={handleSearch}
        />
      </div>
    </header>
  );
};

export default Header;
