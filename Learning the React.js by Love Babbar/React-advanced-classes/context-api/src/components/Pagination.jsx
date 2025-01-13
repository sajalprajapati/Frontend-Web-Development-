import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Pagination = () => {
  const { page, handlePageChange, totalPages } = useContext(AppContext);

  return (
    <div className="fixed inset-x-0 bottom-0 bg-slate-200 shadow-md p-4">
      <div className="flex items-center justify-center gap-4">
        {page > 1 && (
          <button
            onClick={() => handlePageChange(page - 1)}
            className="px-4 py-2 bg-blue-600 text-white font-medium rounded-md shadow hover:bg-blue-700 transition"
          >
            Previous
          </button>
        )}

        {page < totalPages && (
          <button
            onClick={() => handlePageChange(page + 1)}
            className="px-4 py-2 bg-blue-600 text-white font-medium rounded-md shadow hover:bg-blue-700 transition"
          >
            Next
          </button>
        )}

        <p className="text-gray-700 font-medium">
          Page {page} of {totalPages}
        </p>
      </div>
    </div>
  );
};

export default Pagination;
