import styles from "../styles/GroceryList.module.css";

export default function GroceryList({ items, onItemClick }) {
  return (
    <div className={styles.list}>
      {items.map((i) => (
        <div
          key={i.id}
          className={styles.item}
          onClick={() => onItemClick(i)}
        >
          <h2>{i.name}</h2>
          <p>Category: {i.category}</p>
          <p>Price: ${i.price}</p>
        </div>
      ))}
    </div>
  );
}
