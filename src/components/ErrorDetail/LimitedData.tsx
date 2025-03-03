import {
  Heading,
  Text,
  Button,
  ButtonGroup,
} from "@bcgov/design-system-react-components";
import "./ErrorDetail.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export const LimitedData = () => {
  const navigate = useNavigate();
  const [orientation, setOrientation] = useState<"horizontal" | "vertical">(
    "horizontal"
  );

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

  return (
    <div className="limited-data-container">
      <Heading level={4}>Limited Data</Heading>
      <Text size="small">
        Not all error messages have been documented in KLAMM yet, and some may
        be missing. You can help us improve the look-up tool by requesting
        documentation for this code.
      </Text>
      <ButtonGroup orientation={orientation}>
        <Button onPress={() => navigate("/feedback")}>
          Request documentation
        </Button>
        <Button
          onPress={() => navigate("/troubleshooting")}
          variant="secondary"
        >
          Troubleshooting help
        </Button>
      </ButtonGroup>
    </div>
  );
};
