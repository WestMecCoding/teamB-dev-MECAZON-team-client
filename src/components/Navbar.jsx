import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";
import SearchBar from "./SearchBar";
export default function Navbar() {
  return (
    <nav className={styles.nav}>

      <Link to="/">Home</Link>
      <Link to="/groceries">Groceries</Link>
      <Link to="/Login">Login</Link>
      <Link to= "/Signup" >Signup</Link>
      <Link to="/shoppingcart"></Link>
      <Link to="/cart">Cart</Link>
    </nav>
  );
}
