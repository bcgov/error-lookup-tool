import {
  TextField,
  Text,
  Heading,
  Button,
} from "@bcgov/design-system-react-components";
import data from "../../data/errors.json";
import StarImage from "../../assets/star.png";
import SearchIcon from "@mui/icons-material/Search";

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  onSearchClick: () => void;
}

const SearchBar = ({ searchTerm, setSearchTerm, onSearchClick }: SearchBarProps) => {
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
            onChange={(e) => setSearchTerm(e)}
            className="wide-search-bar"
          />
          <Button onPress={onSearchClick} className="search-button">
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
