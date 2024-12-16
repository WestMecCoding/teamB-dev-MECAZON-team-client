import { useState, useEffect } from "react";
import styles from "../components/GroceryList";
import { sortAscending, filterByCategory } from "../utils/groceryFunctions";
import axios from "axios";
import SearchBar from "../components/SearchBar";



export function ItemPage({ i }) {
    const [itempage, setItempage] = useState([]);
    return(
    <div className={i}>
      <h1>{items.name}</h1>

      <p>{}</p>

      <p>{items.price}</p>
        </div>
    )
}