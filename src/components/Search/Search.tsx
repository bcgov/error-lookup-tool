import { useState } from "react";
import { ErrorEntry } from "../../types";
import data from "../../data/errors.json";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import "./Search.css";

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState<ErrorEntry[]>(data["errors"]);

  const handleSearch = () => {
    const filtered = data["errors"].filter((error) =>
      Object.values(error).some((field) =>
        field.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setFilteredData(filtered);
  };

  return (
    <>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} onSearchClick={handleSearch} />
      <SearchResults filteredData={filteredData} />
    </>
  );
};
