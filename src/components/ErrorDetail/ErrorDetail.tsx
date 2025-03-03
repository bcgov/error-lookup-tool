import { Heading, Text } from "@bcgov/design-system-react-components";
import { LimitedData } from "./LimitedData";
import { TechnicalDetails } from "./TechnicalDetails";
import { HelpSolveYourProblem } from "../HelpSolveYourProblem/HelpSolveYourProblem";
import "./ErrorDetail.css";

interface ErrorDetailProps {
  errorCode: string;
  errorMessage: string;
  limitedData: boolean;
}

export const ErrorDetail = ({
  errorCode,
  errorMessage,
  limitedData,
}: ErrorDetailProps) => {
  return (
    <div className="error-detail-container">
      <Text size="small">Error Code</Text>
      <Heading level={1}>{errorCode}</Heading>
      <div className="message-container">
        <Text>Message</Text>
        <Text>{errorMessage || "No message data available"}</Text>
      </div>
      {limitedData && <LimitedData />}
      <TechnicalDetails />
      <HelpSolveYourProblem />
    </div>
  );
};
