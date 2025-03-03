import {
  Heading,
  Text,
  Button,
  ButtonGroup,
} from "@bcgov/design-system-react-components";
import "./ErrorDetail.css";
import { useNavigate } from "react-router-dom";

export const LimitedData = () => {
  const navigate = useNavigate();
  return (
    <div className="limited-data-container">
      <Heading level={4}>Limited Data</Heading>
      <Text size="small">
        Not all error messages have been documented in KLAMM yet, and some may
        be missing. You can help us improve the look-up tool by requesting
        documentation for this code.
      </Text>
      <ButtonGroup>
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
