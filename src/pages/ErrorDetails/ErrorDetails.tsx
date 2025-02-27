import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@bcgov/design-system-react-components";
import { ErrorEntry } from "../../types";
import errorData from "../../data/errors.json";

export const ErrorDetails = () => {
  const { errorCode } = useParams();
  const navigate = useNavigate();
  const error = errorData.find(
    (e: ErrorEntry) => e["Error Code"] === errorCode
  );

  if (!error) {
    return <div>Error not found</div>;
  }

  return (
    <div>
      <Button onPress={() => navigate("/")} variant="secondary">
        Back to list
      </Button>

      <h1>{error["Error Code"]}</h1>

      <div>
        {Object.entries(error).map(([key, value]) => (
          <div key={key}>
            <div>{key}</div>
            <div>{value || "N/A"}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
