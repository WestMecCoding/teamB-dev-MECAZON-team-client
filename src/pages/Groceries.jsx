import { useState, useEffect } from "react";
import GroceryList from "../components/GroceryList";
import { sortAscending, filterByCategory } from "../utils/groceryFunctions";
// import Apple from "./pages/Apple";
import axios from "axios";
import SearchBar from "../components/SearchBar";

export default function Groceries() {
  const [groceries, setGroceries] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  useEffect(() => {
    async function fetchGroceries() {
      try {
        const response = await axios.get("/dummy-data/groceries.json");
        setGroceries(response.data);
        setFilteredItems(response.data);
      } catch (err) {
        console.error("Something went wrong fetching groceries", err);
      }
    }
    fetchGroceries();
  }, []);
  const handleSearch = (searchTerm) => {
    if (!searchTerm) {
      setFilteredItems(groceries);
      return;
    }
    const results = groceries.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(results);
  };
  useEffect(() => {
    sessionStorage.setItem("groceries", JSON.stringify(groceries));
    console.log(JSON.parse(sessionStorage.getItem("groceries")));
  }, [groceries]);


const handleSort = () => {
  const sorted = sortAscending(groceries);
  setFilteredItems(sorted);
};
const handleCategoryFilter = (category) => {
  const filtered = filterByCategory(groceries, category);
  setFilteredItems(filtered);
};
  return (
    <div>
      <button onClick={handleSort}>Sort by Price</button>
      <select onChange={(e) => handleCategoryFilter(e.target.value)}>
        <option value="all">All Items</option>
        <option value="dairy">Dairy Products</option>
      </select>
      <h1>Groceries</h1>
      <SearchBar onSearch={handleSearch} />
      <GroceryList items={filteredItems} />
    </div>
  );
}



