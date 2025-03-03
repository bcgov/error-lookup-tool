import {
  Text,
  Button,
  ButtonGroup,
} from "@bcgov/design-system-react-components";
import "./HelpSolveYourProblem.css";

export const HelpSolveYourProblem = () => {
  return (
    <div className="help-container">
      <Text size="small">Did this page help solve your problem?</Text>
      <ButtonGroup alignment="end">
        <Button size="small" variant="secondary">
          Yes
        </Button>
        <Button size="small" variant="secondary">
          No
        </Button>
      </ButtonGroup>
    </div>
  );
};
