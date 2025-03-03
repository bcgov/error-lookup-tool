import { useState } from "react";
import {
  Text,
  Button,
  ButtonGroup,
} from "@bcgov/design-system-react-components";
import "./HelpSolveYourProblem.css";

export const HelpSolveYourProblem = () => {
  const [response, setResponse] = useState<string | null>(null);

  const handleResponse = (answer: "Yes" | "No"): void => {
    setResponse(answer);
  };

  return (
    <div className="help-container">
      {!response ? (
        <>
          <Text>Did this page help solve your problem?</Text>
          <ButtonGroup alignment="end">
            <Button variant="secondary" onPress={() => handleResponse("Yes")}>
              Yes
            </Button>
            <Button variant="secondary" onPress={() => handleResponse("No")}>
              No
            </Button>
          </ButtonGroup>
        </>
      ) : (
        <div className="response-message">
          <Text>Thank you for your response.</Text>
        </div>
      )}
    </div>
  );
};
