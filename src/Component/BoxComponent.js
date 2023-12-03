// BoxComponent.js
import React from "react";
import Paper from "@mui/material/Paper";

const BoxComponent = ({ children }) => {
  const boxStyles = {
    height: "550px",
    width: "1000px",
    marginLeft: "250px",
    padding: "20px",
    borderRadius: "8px",
  };

  return (
    <Paper elevation={3} style={boxStyles}>
      {children}
    </Paper>
  );
};

export default BoxComponent;
