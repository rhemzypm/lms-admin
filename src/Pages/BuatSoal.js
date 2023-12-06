import React from "react";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import Sidebar from "../Component/Sidebar";
import ReactDOMServer from "react-dom/server";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

function BuatSoal() {
  const handleDeleteClick = () => {
    Swal.fire({
      html: ReactDOMServer.renderToString(
        <div className="Edit-popup">
          Apakah anda yakin ingin
          <span style={{ color: "red" }}> menghapus </span>
          video ini
        </div>
      ),
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Hapus",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: "success",
          showConfirmButton: false,
          html: ReactDOMServer.renderToString(
            <div className="Edit-popup">
              Video berhasil
              <span style={{ color: "red" }}> dihapus </span>
            </div>
          ),
        });
      }
    });
  };

  return (
    <div className="App">
      <Sidebar />
      <div className="Modul-container3">
        <div className="header-container">
          <div className="Modul-header3">
            <div className="add-module-text">
              <h1>Kegiatan</h1>
              <p className="">Kegiatan &gt; Pretest &gt; Buat Soal </p>
              <div className="Modul-header2"></div>
            </div>
          </div>
        </div>
        <div className="Add-modul-video">
          <div className="Button-modul">
            <button className="Cancel">Batal</button>
            <button className="Save">Simpan</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuatSoal;
