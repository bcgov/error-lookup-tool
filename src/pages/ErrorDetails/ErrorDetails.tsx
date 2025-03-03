import { useParams } from "react-router-dom";

import { ErrorEntry } from "../../types";
import data from "../../data/errors.json";
import { AboutThisTool } from "../../components/AboutThisTool/AboutThisTool";
import { BackToSearch } from "../../components/BackToSearch/BackToSearch";
import { ErrorDetail } from "../../components/ErrorDetail/ErrorDetail";

export const ErrorDetails = () => {
  const { errorCode } = useParams();
  const error = data["errors"].find(
    (e: ErrorEntry) => e["ErrorCode"] === errorCode
  );

  if (!error) {
    return <div>Error not found</div>;
  }

  return (
    <>
      <BackToSearch />
      <ErrorDetail errorCode={error["ErrorCode"]} errorMessage={error["ErrorMessage"]} limitedData={error["LimitedData"]}  />
      <AboutThisTool />
    </>
  );
};
