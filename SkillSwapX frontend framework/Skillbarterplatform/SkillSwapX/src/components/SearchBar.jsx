// src/components/SearchBar.jsx
import React from 'react';

const SearchBar = () => {
  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search for skills or users"
        className="border p-2 rounded w-full"
      />
    </div>
  );
};

export default SearchBar;