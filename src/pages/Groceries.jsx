import { useState, useEffect } from "react";
import GroceryList from "../components/GroceryList";
import Modal from "../components/ItemDataModal";
import { sortAscending, filterByCategory } from "../utils/groceryFunctions";
import axios from "axios";
import SearchBar from "../components/SearchBar";

export default function Groceries() {
  const [groceries, setGroceries] = useState([]);
  const [filteredGroceries, setFilteredGroceries] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

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

  const handleSearch = ({ term }) => {
    let results = groceries;

    if (term) {
      results = results.filter((item) =>
        item.name.toLowerCase().includes(term.toLowerCase())
      );
    }
    setFilteredGroceries(results);
  };
  useEffect(() => {
    sessionStorage.setItem("groceries", JSON.stringify(groceries));
    console.log(JSON.parse(sessionStorage.getItem("groceries")));
  }, [groceries]);

  const handleSort = () => {
    const sorted = sortAscending(groceries);
    setFilteredGroceries(sorted);
  };
  const handleCategoryFilter = (category) => {
    const filtered = filterByCategory(groceries, category);
    setFilteredGroceries(filtered);
  };
  const handleItemClick = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedItem(null);
  };

  return (
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
      <GroceryList items={filteredGroceries} onItemClick={handleItemClick} />
      <Modal
        isVisible={isModalVisible}
        onClose={closeModal}
        title={selectedItem?.name || "Item Details"}
      >
        {selectedItem && (
          <div>
            <p>Category: {selectedItem.category}</p>
            <p>Price: ${selectedItem.price}</p>
            <button>Add to Cart</button>
          </div>
        )}
      </Modal>
    </div>
  );
}
