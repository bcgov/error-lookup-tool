import {
  Button,
  ButtonGroup,
  Heading,
} from "@bcgov/design-system-react-components";
import { useNavigate } from "react-router-dom";
import data from "../../data/errors.json";
import "./PopularPages.css";

export const PopularPages = () => {
  const navigate = useNavigate();

  const popularPages = data["popular-pages"];

  const handleButtonClick = (path: string) => {
    navigate(`/${path}`);
  };

  return (
    <div className="popular-pages">
      <Heading level={4}>Popular pages</Heading>
      <ButtonGroup
        alignment="start"
        ariaLabel="Popular pages"
        orientation="horizontal" // make vetical on mobile/tablet
      >
        {popularPages.map((page, index) => (
          <Button
            key={index}
            onPress={() => handleButtonClick(page["path"])}
            variant="secondary"
          >
            {page["display-text"]}
          </Button>
        ))}
      </ButtonGroup>
    </div>
  );
};
