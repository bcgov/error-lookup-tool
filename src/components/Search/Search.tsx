import { useState } from "react";
import { ErrorEntry } from "../../types";
import errorData from "../../data/errors.json";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState<ErrorEntry[]>(errorData);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    const filtered = errorData.filter((error) =>
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
