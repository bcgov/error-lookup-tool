import { TextField } from "@bcgov/design-system-react-components";

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar = ({ searchTerm, onSearchChange }: SearchBarProps) => {
  return (
    <div>
      <TextField
        type="search"
        label="Search errors"
        id="search"
        value={searchTerm}
        size="medium"
        onInput={onSearchChange}
      />
    </div>
  );
};

export default SearchBar;
