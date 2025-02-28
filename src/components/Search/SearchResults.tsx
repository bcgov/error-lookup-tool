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
      selector: (row: ErrorEntry) => row["Error Code"],
      sortable: true,
      width: "150px",
      cell: (row: ErrorEntry) => (
        <div style={{ color: "#255A90", textDecoration: "underline" }}>
          {row["Error Code"]}
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
      selector: (row: ErrorEntry) => row["Error Message"],
      sortable: true,
    },
  ];

  const customStyles = {
    headCells: {
      style: {
        backgroundColor: "#f1f1f1",
        fontWeight: "bold",
        borderBottom: "2px solid #ccc",
      },
    },
    table: {
      style: {
        border: "2px solid #ccc",
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
        onRowClicked={(row) => navigate(`/error/${row["Error Code"]}`)}
        customStyles={customStyles}
      />
    </div>
  );
};

export default SearchResults;
