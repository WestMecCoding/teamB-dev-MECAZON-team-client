import { useState, useEffect } from "react";
import GroceryList from "../components/GroceryList";
import SearchBar from "../components/SearchBar"
import axios from "axios";

export default function GroceriesSearch() {
  const [groceries, setGroceries] = useState([]);
  useEffect(() => {
    async function fetchGroceries() {
      try {
        const response = await axios.get("/dummy-data/groceries.json");

        // set the state of the groceries to the response.data
        setGroceries(response.data);
      } catch (err) {
        console.error("something went wrong fetching groceries", err);
      }
    }
    fetchGroceries();
  }, []);

  useEffect(() => {
    // console.log(groceries);
    sessionStorage.setItem("groceries", JSON.stringify(groceries));
    console.log(JSON.parse(sessionStorage.getItem("groceries")));
  }, [groceries]);
  return (
    <div>
          <h1>Groceries</h1>
          <SearchBar>Search For Groceries</SearchBar>
      <GroceryList items={groceries} />
    </div>
  );
}
