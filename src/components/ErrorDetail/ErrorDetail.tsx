import { Heading, Text } from "@bcgov/design-system-react-components";
import { LimitedData } from "./LimitedData";
import { TechnicalDetails } from "./TechnicalDetails";
import { HelpSolveYourProblem } from "../HelpSolveYourProblem/HelpSolveYourProblem";
import { ErrorEntry } from "../../types";
import "./ErrorDetail.css";
import { CauseAndFix } from "./CauseAndFix";

interface ErrorDetailProps {
  error: ErrorEntry;
}

export const ErrorDetail = ({ error }: ErrorDetailProps) => {
  return (
    <div className="error-detail-container">
      <Text size="small">Error Code</Text>
      <Heading level={1}>{error["ErrorCode"]}</Heading>
      <div className="message-container">
        <Text>
          <strong>Message</strong>
        </Text>
        <Text>{error["ErrorMessage"] || "No message data available"}</Text>
      </div>
      <CauseAndFix explanation={error["Explanation"]} fix={error["Fix"]} />
      {error["LimitedData"] && <LimitedData />}
      <TechnicalDetails
        errorCode={error["ErrorCode"]}
        entity={error["Entity"]}
        datagroup={error["Datagroup"]}
        actionedBy={error["ActionBy"]}
        source={error["SourceSystem"]}
      />
      <HelpSolveYourProblem />
    </div>
  );
};
