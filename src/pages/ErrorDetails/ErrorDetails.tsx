import { useParams } from "react-router-dom";

import { ErrorEntry } from "../../types";
import errorData from "../../data/errors.json";
import { AboutThisTool } from "../../components/AboutThisTool/AboutThisTool";
import { BackToSearch } from "../../components/BackToSearch/BackToSearch";

export const ErrorDetails = () => {
  const { errorCode } = useParams();
  const error = errorData.find(
    (e: ErrorEntry) => e["Error Code"] === errorCode
  );

  if (!error) {
    return <div>Error not found</div>;
  }

  return (
    <>
      <BackToSearch />

      <h1>{error["Error Code"]}</h1>

      <div>
        {Object.entries(error).map(([key, value]) => (
          <div key={key}>
            <div>{key}</div>
            <div>{value || "N/A"}</div>
          </div>
        ))}
      </div>

      <AboutThisTool />
    </>
  );
};
