import { useRef } from "react";

function SearchBar({ searchTerm, setSearchTerm }) {
  const searchInputRef = useRef(null);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleClear = () => {
    setSearchTerm("");
    searchInputRef.current.focus();
  };

  return (
    <div className="search-bar">
      <label htmlFor="product-search">
        Search Products
      </label>

      <input
        ref={searchInputRef}
        id="product-search"
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleChange}
      />

      {searchTerm && (
        <button type="button" onClick={handleClear}>
          Clear
        </button>
      )}
    </div>
  );
}

export default SearchBar;