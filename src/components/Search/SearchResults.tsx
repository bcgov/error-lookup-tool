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
    <div className="search-table">
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
    </div>
  );
};

export default SearchResults;
