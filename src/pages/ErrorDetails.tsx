import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@bcgov/design-system-react-components";
import { ErrorEntry } from "../types";
import errorData from "../data/errors.json";

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
      <Button
        onPress={() => navigate("/")}
        variant="secondary"
        className="mb-4"
      >
        Back to list
      </Button>

      <h1 className="text-2xl font-bold mb-6">{error["Error Code"]}</h1>

      <div className="grid gap-4">
        {Object.entries(error).map(([key, value]) => (
          <div key={key} className="border-b pb-2">
            <div className="font-semibold">{key}</div>
            <div>{value || "N/A"}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
