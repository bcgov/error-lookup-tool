import { useNavigate } from "react-router-dom";
import DataTable from "react-data-table-component";
import { ErrorEntry } from "../../types";

interface SearchResultsProps {
  filteredData: ErrorEntry[];
}

const SearchResults = ({ filteredData }: SearchResultsProps) => {
  const navigate = useNavigate();

  const columns = [
    {
      name: "Error Code",
      selector: (row: ErrorEntry) => row["ErrorCode"],
      sortable: true,
      width: "150px",
      cell: (row: ErrorEntry) => (
        <div
          style={{ color: "#255A90", textDecoration: "underline" }}
          tabIndex={0}
          onClick={() => navigate(`/error/${row["ErrorCode"]}`)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              navigate(`/error/${row["ErrorCode"]}`);
            }
          }}
        >
          {row["ErrorCode"]}
        </div>
      ),
    },
    {
      name: "Datagroup",
      selector: (row: ErrorEntry) => row["Datagroup"],
      sortable: true,
      width: "220px",
    },
    {
      name: "Error Message",
      selector: (row: ErrorEntry) => row["ErrorMessage"],
      sortable: true,
    },
  ];

  const customStyles = {
    headCells: {
      style: {
        backgroundColor: "#F1F1F1",
        fontWeight: "bold",
        borderBottom: "2px solid #CCC",
      },
    },
    table: {
      style: {
        border: "2px solid #CCC",
      },
    },
  };

  return (
    <div className="search-table">
      <DataTable
        columns={columns}
        data={filteredData}
        pagination
        paginationPerPage={10}
        highlightOnHover
        pointerOnHover
        paginationRowsPerPageOptions={[10, 20, 50, filteredData.length]}
        onRowClicked={(row) => navigate(`/error/${row["ErrorCode"]}`)}
        customStyles={customStyles}
      />
    </div>
  );
};

export default SearchResults;
