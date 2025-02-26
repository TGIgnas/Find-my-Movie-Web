import React from "react";
import Pagination from "@mui/material/Pagination";

const PaginationComponent = ({ currentPage, onPageChange }) => {
  const totalPages = 25;

  return (
    <div className="flex justify-center mt-8">
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-4 rounded-xl shadow-xl">
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={(_, page) => onPageChange(page)}
          color="primary"
          shape="rounded"
          size="large"
          siblingCount={1}
          boundaryCount={1}
          showFirstButton
          showLastButton
          className="text-white"
        />
      </div>
    </div>
  );
};

export default PaginationComponent;
