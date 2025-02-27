import { useState } from "react";
import { ErrorEntry } from "../../types";
import data from "../../data/errors.json";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import "./Search.css";

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState<ErrorEntry[]>(
    data["errors"]
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    const filtered = data["errors"].filter((error) =>
      Object.values(error).some((field) =>
        field.toLowerCase().includes(value.toLowerCase())
      )
    );
    setFilteredData(filtered);
  };

  return (
    <>
      <SearchBar searchTerm={searchTerm} onSearchChange={handleSearch} />
      <SearchResults filteredData={filteredData} />
    </>
  );
};
