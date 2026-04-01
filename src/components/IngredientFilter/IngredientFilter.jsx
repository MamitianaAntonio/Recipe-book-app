import styles from "./IngredientFilter.module.css";

export default function IngredientFilter({
  allIngredients,
  selectedIngredients,
  onToggle,
}) {
  return (
    <div className={styles.container}>
      {allIngredients.map((ingredient) => (
        <label key={ingredient} className={styles.label}>
          <input
            type="checkbox"
            checked={selectedIngredients.includes(ingredient)}
            onChange={() => onToggle(ingredient)}
            className={styles.checkbox}
          />
          {ingredient}
        </label>
      ))}
    </div>
  );
}
