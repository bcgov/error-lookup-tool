import { Heading, Text } from "@bcgov/design-system-react-components";
import { LimitedData } from "./LimitedData";
import { TechnicalDetails } from "./TechnicalDetails";
import './ErrorDetail.css'

interface ErrorDetailProps {
    errorCode: string;
    errorMessage: string;
    limitedData: boolean;
}

export const ErrorDetail = ({ errorCode, errorMessage, limitedData }: ErrorDetailProps) => {
    return (
        <div className="error-detail-container">
            <Text size='small'></Text>
            <Heading level={4}>{errorCode}</Heading>
            <Text>{errorMessage || "No message data available"}</Text>
            {limitedData && <LimitedData />}
            <TechnicalDetails />
        </div>
    );
};
