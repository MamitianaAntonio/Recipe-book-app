import styles from "./SearchBar.module.css";

export default function SearchBar({ searchQuery, setSearchQuery }) {
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  return (
    <input
      type="text"
      placeholder="Search recipe by name..."
      value={searchQuery}
      onChange={handleInputChange}
      className={styles.items}
    />
  );
}
