import {
  Button,
  ButtonGroup,
  Heading,
} from "@bcgov/design-system-react-components";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import data from "../../data/errors.json";
import "./PopularPages.css";

export const PopularPages = () => {
  const navigate = useNavigate();
  const [orientation, setOrientation] = useState<"horizontal" | "vertical">("horizontal");
  const popularPages = data["popular-pages"];

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setOrientation("vertical");
    } else {
      setOrientation("horizontal");
    }
  };

  useEffect(() => {
    handleResize();
    
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleButtonClick = (path: string) => {
    navigate(`/${path}`);
  };

  return (
    <div className="popular-pages">
      <Heading level={4}>Popular pages</Heading>
      <ButtonGroup
        alignment="start"
        ariaLabel="Popular pages"
        orientation={orientation}
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