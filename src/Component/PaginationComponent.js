// PaginationComponent.js
import React from "react";
import { Pagination, Stack } from "@mui/material";

const PaginationComponent = ({ currentPage, onPageChange, totalPages }) => {
  return (
    <Stack spacing={2} sx={{ my: 2 }}>
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={onPageChange}
        variant="outlined"
        shape="rounded"
      />
    </Stack>
  );
};

export default PaginationComponent;
