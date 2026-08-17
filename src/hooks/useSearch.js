import { useState, useMemo } from "react";

function useSearch(items = [], searchKey = "name") {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = useMemo(() => {
    if (!searchTerm.trim()) {
      return items;
    }
    return items.filter((item) =>
      item[searchKey]?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [items, searchTerm, searchKey]);

  return { searchTerm, setSearchTerm, filteredItems };
}

export default useSearch;