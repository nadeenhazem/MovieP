import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import CardDetails from "./CardDetails";
import Pagination from "./Pagination";
const SearchDetails = () => {
  const { state } = useLocation();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = state.slice(startIndex, endIndex);

  const totalPages = Math.ceil(state.length / itemsPerPage);

  if (!state || !Array.isArray(state) || state.length === 0) {
    return (
      <div
        style={{ height: "80vh" }}
        className="d-flex justify-content-center align-items-center"
      >
        <h1 className="text-white p-3 rounded">No results found.</h1>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <div className="row container my-3 mx-auto">
        <div className="col-md-12 col-sm-12 mb-4 fs-4 text-light d-flex justify-content-center">
          <h2>Search Results</h2>
        </div>

        {currentItems.map((movie) => (
          <CardDetails data={movie} />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default SearchDetails;
