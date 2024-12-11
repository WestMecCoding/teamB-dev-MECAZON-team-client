import { useState, useEffect } from "react";
import GroceryList from "../components/GroceryList";
import axios from "axios";
import { sortAscending, filterByCategory } from "../utils/groceryFunctions"
import SearchBar from "../components/SearchBar";

export default function Groceries() {
  const [groceries, setGroceries] = useState([]);
  const [filteredGroceries, setFilteredGroceries] = useState([]);

  useEffect(() => {
    async function fetchGroceries() {
      try {
        const response = await axios.get("/dummy-data/groceries.json");
        setGroceries(response.data);
        setFilteredGroceries(response.data);
      } catch (err) {
        console.error("Something went wrong fetching groceries", err);
      }
    }
    fetchGroceries();
  }, []);

  const handleSearch = ({ term, category, priceRange }) => {
    let results = groceries;

    if (term) {
      results = results.filter((item) =>
        item.name.toLowerCase().includes(term.toLowerCase())
      );
    }

    if (category) {
      results = results.filter(
        (item) => item.category.toLowerCase() === category.toLowerCase()
      );
    }

    if (priceRange) {
      const [min, max] = priceRange;
      results = results.filter(
        (item) => item.price >= min && item.price <= max
      );
    }

    setFilteredGroceries(results);
  };
  useEffect(() => {
    sessionStorage.setItem("groceries", JSON.stringify(groceries));
    console.log(JSON.parse(sessionStorage.getItem("groceries")));
  }, [groceries]);
  return (
    <div>
      <h1>Groceries</h1>
      <SearchBar onSearch={handleSearch} />
      <GroceryList items={filteredGroceries} />
    </div>
  );
}