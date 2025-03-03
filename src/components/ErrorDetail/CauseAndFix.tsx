import { Text } from "@bcgov/design-system-react-components";
import "./ErrorDetail.css";

interface CauseAndFixProps {
  explanation: string;
  fix: string;
}

export const CauseAndFix = ({ explanation, fix }: CauseAndFixProps) => {
  return (
    <div className="cause-and-fix-container">
      {explanation && (
        <div>
          <Text size="large">
            <strong>What caused this?</strong>
          </Text>
          <br />
          <Text>{explanation}</Text>
        </div>
      )}
      {fix && (
        <div>
          <Text size="large">
            <strong>How to resolve the error</strong>
          </Text>
          <br />
          <Text>{fix}</Text>
        </div>
      )}
    </div>
  );
};
