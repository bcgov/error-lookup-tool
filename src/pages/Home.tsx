import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button } from "@bcgov/design-system-react-components";
import DataTable from "react-data-table-component";
import { ErrorEntry } from "../types";
import errorData from "../data/errors.json";

export const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState<ErrorEntry[]>(errorData);
  const navigate = useNavigate();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    const filtered = errorData.filter((error) =>
      Object.values(error).some((field) =>
        field.toLowerCase().includes(value.toLowerCase())
      )
    );
    setFilteredData(filtered);
  };

  const columns = [
    {
      name: "Error Code",
      selector: (row: ErrorEntry) => row["Error Code"],
      sortable: true,
    },
    {
      name: "Error Message",
      selector: (row: ErrorEntry) => row["Error Message"],
      sortable: true,
    },
    {
      name: "Source System",
      selector: (row: ErrorEntry) => row["Source System"],
      sortable: true,
    },
  ];

  return (
    <div>
      <div className="mb-6">
        <TextField
          type="search"
          label="Search errors"
          id="search"
          value={searchTerm}
          size="medium"
          onInput={handleSearch}
        />
      </div>

      <DataTable
        columns={columns}
        data={filteredData}
        pagination
        paginationPerPage={5}
        highlightOnHover
        pointerOnHover
        paginationRowsPerPageOptions={[5, 10, 20, 50, filteredData.length]}
        onRowClicked={(row) => navigate(`/error/${row["Error Code"]}`)}
      />

      <div className="mt-4">
        <Button onPress={() => navigate("/feedback")} variant="secondary">
          Provide Feedback
        </Button>
      </div>
    </div>
  );
};
