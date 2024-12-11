import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onSearch({
        term: searchTerm,
        category,
        priceRange:
          minPrice && maxPrice
            ? [parseFloat(minPrice), parseFloat(maxPrice)]
            : null,
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
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Filter by category..."
      />
      <input
        type="number"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Min price..."
      />
      <input
        type="number"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Max price..."
      />
    </div>
  );
}
