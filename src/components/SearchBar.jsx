import React, { useState } from "react";
export default function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onSearch({
        term: searchTerm,
      });
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Search by name..."
      />
    </div>
  );
}
