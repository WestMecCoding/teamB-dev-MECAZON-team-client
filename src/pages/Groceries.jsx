import { useState, useEffect } from "react";
import GroceryList from "../components/GroceryList";
import { sortAssending, filterByCategory } from "../utils/groceryFunctions";
import axios from "axios";

export default function Groceries() {
  const [groceries, setGroceries] = useState([]);
  const [filteredItems, setFIlteredItems] = useState([])
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

  const handelSort = () => {
    const sorted = sortAscending(groceries);
    setFIlteredItems(sorted);
  }
  const handleCategoryFilter = (category) => {
    const filtered = filteredByCategory(groceries, category);
    setFIlteredItems(filtered);
  }
  return (
    <div>
      <div>
        <button onClick={handleSort}>Sort by price</button>
        <select onChange={e => handleCaegoryFilter(e.targer.value)}>
          <option value="all">All Items</option>
          <option value="dairy">Dairy Products</option>
        </select>
      </div>
      <h1>Groceries</h1>
      <GroceryList items={filteredItems} />
    </div>
  );
}
