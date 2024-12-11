import { useState, useEffect } from "react";
import GroceryList from "../components/GroceryList";
import axios from "axios";
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
  const handleSearch = (searchTerm) => {
    if (!searchTerm) {
      setFilteredGroceries(groceries);
      return;
    }
    const results = groceries.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
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