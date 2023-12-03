// Modules.js
import React, { useState } from "react";
import Sidebar from "../Component/Sidebar";
import { Pagination, Stack } from "@mui/material";

const Module = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <div className="App">
      <Sidebar />
      {/* Your main content here */}

      {/* Change pagination color to white */}
      <Stack spacing={2} sx={{ my: 2 }}>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          variant="outlined"
          shape="rounded"
          style={{ color: "white" }}
        />
      </Stack>
    </div>
  );
};

export default Module;
