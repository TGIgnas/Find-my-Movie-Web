import React from "react";

const HomeButton = () => {
  const handleRefresh = () => {
    window.location.reload();
  };
  return (
    <button
      onClick={handleRefresh}
      className="bg-purple-800 text-white p-2 rounded-2xl hover:bg-purple-500 transition-all duration-500 flex items-center justify-center w-12 h-12"
    >
      <img src="./home.svg" alt="Home" className="w-6 h-6" />
    </button>
  );
};

export default HomeButton;
