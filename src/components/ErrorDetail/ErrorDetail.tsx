import { LimitedData } from "./LimitedData";
import { TechnicalDetails } from "./TechnicalDetails";

interface ErrorDetailProps {
    errorCode: string;
    errorMessage: string;
    limitedData: boolean;
}

export const ErrorDetail = ({ errorCode, errorMessage, limitedData }: ErrorDetailProps) => {
    return (
        <div>
            <h1>{errorCode}</h1>
            <p>{errorMessage || "No message available"}</p>
            {limitedData && <LimitedData />}
            <TechnicalDetails />
        </div>
    );
};
