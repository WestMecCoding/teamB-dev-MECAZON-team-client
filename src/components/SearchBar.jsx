

export default function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onSearch({
        term: searchTerm
      });
    }
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
      <GroceryList items={filteredGroceries} />
    </div>
  );

}


// {
//   /* onClick={ItemClick} */
// }

// function ItemClick() {
//   const handleClick = (items) => {
//     <Link to="/ItemPage"></Link>;
//   };
// }
