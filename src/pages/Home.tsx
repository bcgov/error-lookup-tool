import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button } from "@bcgov/design-system-react-components";
import { ErrorEntry } from "../types";
import errorData from "../data/errors.json";

export const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const filteredErrors = errorData.filter((error: ErrorEntry) =>
    Object.values(error).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div>
      <div className="mb-6">
        <TextField
          type="search"
          label="Search errors"
          id="search"
          value={searchTerm}
          size="medium"
          onChange={(e) => setSearchTerm(e)}
        />
      </div>

      <div className="mt-4">
        <Button onPress={() => navigate("/feedback")} variant="secondary">
          Provide Feedback
        </Button>
      </div>
    </div>
  );
};
