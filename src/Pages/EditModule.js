import React from "react";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import Sidebar from "../Component/Sidebar";
import Modul from "../Assets/Modul.png";
import ReactDOMServer from "react-dom/server";

function AddModule() {
  const handleDeleteClick = () => {
    Swal.fire({
      html: ReactDOMServer.renderToString(
        <div className="Edit-popup">
          Apakah
          <span style={{ color: "red" }}> menghapus </span>
          <span style={{ color: "blue" }}>
            "Modul Dukungan teknologi informasi untuk bisnis UMKM"
          </span>
          ini dari daftar modul?
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
              <span style={{ color: "blue" }}>
                "Modul Dukungan teknologi informasi untuk bisnis UMKM"
              </span>
              berhasil
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
              <h1>Modul</h1>
              <p className="">
                Modul <span> tambah modul</span>
              </p>
              <div className="Modul-header2"></div>
            </div>
          </div>
          <div className="">
            <button className="Remove-modul" onClick={handleDeleteClick}>
              <p>Hapus Modul</p>
            </button>
          </div>
        </div>
        <div className="Add-modul3">
          <p>Ubah Modul</p>
          <div className="Form-modul">
            <p>
              Judul Modul <span className="required">*</span>
            </p>
            <form>
              <label htmlFor="modul">
                <input
                  type="text"
                  id="modul"
                  placeholder="Isi judul modul anda"
                />
              </label>
              <p className="info">Maksimal 100 karakter</p>
            </form>
          </div>
          <div className="Button-modul">
            <button className="Cancel">Batal</button>
            <button
              className="Save"
              // onClick={handleSaveClick}
            >
              Simpan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddModule;
