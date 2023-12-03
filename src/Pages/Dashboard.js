import React from "react";
import { FaPlus } from "react-icons/fa";
import Sidebar from "../Component/Sidebar";
import BoxComponent from "../Component/BoxComponent";
import { Typography } from "@mui/material";
import NotFoundImage from "../Assets/Box/Not-Found.png";

function Dashboard() {
  const containerStyles = {
    display: "flex",
    position: "relative",
  };

  const buttonStyles = {
    position: "absolute",
    top: "10px",
    right: "10px",
    backgroundColor: "white",
    color: "black",
    padding: "10px 20px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
  };

  const iconStyles = {
    marginRight: "10px",
  };

  const boldTextStyles = {
    fontWeight: "bold",
  };

  return (
    <div className="App" style={containerStyles}>
      <Sidebar />
      <div className="content">
        <BoxComponent>
          <Typography variant="h5" style={boldTextStyles}>
            Halaman Modul Kosong
          </Typography>
          <img
            src={NotFoundImage}
            alt="Not Found"
            style={{ width: "200px", height: "200px", marginTop: "16px" }}
          />
          <Typography>
            Ayo daftarkan Modul melalui tombol “Tambah Modul”
          </Typography>
        </BoxComponent>
        <button style={buttonStyles}>
          <FaPlus style={iconStyles} /> Tambah Modul
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
