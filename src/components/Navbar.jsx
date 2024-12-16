import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";
import SearchBar from "./SearchBar";
export default function Navbar() {
  const handleSearch = ({ term }) => {
    let results = groceries;

    if (term) {
      results = results.filter((item) =>
        item.name.toLowerCase().includes(term.toLowerCase())
      );
    }
    setFilteredGroceries(results);
  }
  return (
    <nav className={styles.nav}>
      <Link to="/">Home</Link>
      <Link to="/groceries">Groceries</Link>
      <SearchBar onSearch={handleSearch} />
    </nav>
  );
}
