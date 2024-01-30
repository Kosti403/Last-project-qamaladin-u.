import { useState, ChangeEvent, KeyboardEvent } from "react";
import styles from "./search-bar.module.css";
type SearchBarProps = {
  searchedValue: string;
  onChangeSearchedValue: (value: string) => void;
};

const SearchBar = ({ onChangeSearchedValue }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = async () => {
    setLoading(true);
    await onChangeSearchedValue(searchTerm);
    setLoading(false);
  };

  const handleKeyPress = async (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      await handleSearch();
    }
  };

  return (
    <div className={styles.App}>
      <input
        className={styles.input}
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
        onKeyUp={handleKeyPress}
      />
      <button
        onClick={handleSearch}
        disabled={loading}
        className={styles.button}
      >
        {loading ? "Loading..." : "Search"}
      </button>
    </div>
  );
};

export default SearchBar;
