import {
  TextField,
  Text,
  Heading,
} from "@bcgov/design-system-react-components";
import data from "../../data/errors.json";
import StarImage from "../../assets/star.png";
import SearchIcon from "@mui/icons-material/Search";

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar = ({ searchTerm, onSearchChange }: SearchBarProps) => {
  const lastUpdated = data["last-upated"];

  return (
    <div className="outer-search-bar">
      <div className="inner-search-bar">
        <Heading level={1}>ICM Error Look up</Heading>
        <div className="last-updated-container">
          <span>
            <img src={StarImage} alt="Star"></img>
            <Text>Last updated on {lastUpdated}</Text>
          </span>
        </div>
        <div className="search-field">
          <TextField
            iconLeft={<SearchIcon />}
            type="search"
            label="Search for error documentation"
            id="search"
            value={searchTerm}
            size="medium"
            onInput={onSearchChange}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
