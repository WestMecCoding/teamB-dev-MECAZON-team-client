import { useState, useEffect } from "react";
import GroceryList from "../components/GroceryList";
import { sortAscending, filterByCategory } from "../utils/groceryFunctions";
<<<<<<< HEAD

=======
>>>>>>> Rylan
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
<<<<<<< HEAD
        setFilteredItems(response.data);
=======
        setFilteredGroceries(response.data);
>>>>>>> Rylan
      } catch (err) {
        console.error("Something went wrong fetching groceries", err);
      }
    }
    fetchGroceries();
  }, []);

  const handleSearch = ({ term }) => {
    let results = groceries;

    if (term) {
      results = results.filter((item) =>
        item.name.toLowerCase().includes(term.toLowerCase())
      );
    }
    setFilteredGroceries(results);
  };
<<<<<<< HEAD





  // function ItemClick() {
  //   const handleClick = (items) => {
  //     <Link to="/ItemPage"></Link>;
  //   };
  // }



=======
>>>>>>> Rylan
  useEffect(() => {
    sessionStorage.setItem("groceries", JSON.stringify(groceries));
    console.log(JSON.parse(sessionStorage.getItem("groceries")));
  }, [groceries]);


const handleSort = () => {
  const sorted = sortAscending(groceries);
<<<<<<< HEAD
  setFilteredItems(sorted);
  };


const handleCategoryFilter = (category) => {
  const filtered = filterByCategory(groceries, category);
  setFilteredGroceries(filtered);
};
  return (

=======
  setFilteredGroceries(sorted);
};
const handleCategoryFilter = (category) => {
  const filtered = filterByCategory(groceries, category);
  setFilteredGroceries(filtered);
};
  return (
>>>>>>> Rylan
    <div>
      <button onClick={handleSort}>Sort by Price</button>
      <select onChange={(e) => handleCategoryFilter(e.target.value)}>
        <option value="all">All Items</option>
        <option value="dairy">Dairy Products</option>
        <option value="vegetables">Vegetable Products</option>
        <option value="proteins">Protein Products</option>
        <option value="fruits">Fruit Products</option>
        <option value="nuts">Nut Products</option>
        <option value="grains">Grain Products</option>
      </select>
      <h1>Groceries</h1>
      <SearchBar onSearch={handleSearch} />
<<<<<<< HEAD
      <GroceryList items={filteredItems} />
      {/* onClick={ItemClick} */}
    </div>;
=======
      <GroceryList items={filteredGroceries} />
    </div>
  );
>>>>>>> Rylan
}