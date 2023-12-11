import React from "react";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import Sidebar from "../Component/Sidebar";
import Modul from "../Assets/Modul.png";
import ReactDOMServer from "react-dom/server";

function EditVideo() {
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
              <p className="">
                Kegiatan &gt;<span> Tambah Video</span>
              </p>
              <div className="Modul-header2"></div>
            </div>
          </div>
          <div className="">
            <button className="Remove-modul" onClick={handleDeleteClick}>
              <p>Hapus Video</p>
            </button>
          </div>
        </div>
        <div className="Add-modul2">
          <p>Video</p>
          <div className="Form-modul2">
            <div class="form-container">
              <div class="form-section-kiri2">
                <p>
                  Unggah Video 1 <span className="required-kiri2">*</span>
                </p>
                <form>
                  <label for="topik">
                    <input
                      type="topik"
                      id="topik"
                      placeholder="Unggah video anda"
                    />
                    <p className="info">Maksimal 100 mb</p>
                  </label>
                </form>
                <p>
                  Deskripsi <span className="required-kiri-bawah2">*</span>
                </p>
                <form>
                  <label>
                    <input
                      type="Deskripsi"
                      id="topik"
                      placeholder="Klik disini untuk mengedit deskripsi video"
                    />
                    <p className="info">Maksimal 200 kata</p>
                  </label>
                </form>
              </div>

              <div class="form-section-kanan2">
                <p>
                  Unggah Video 2 <span className="required-kanan2">*</span>
                </p>
                <form>
                  <label for="topik">
                    <input
                      type="modul"
                      id="modul"
                      placeholder="Unggah video anda"
                    />
                    <p className="info">Maksimal 100 mb</p>
                  </label>
                </form>
                <p>
                  Deskripsi <span className="required-kanan-bawah2">*</span>
                </p>
                <form>
                  <label for="topik">
                    <input
                      type="Deskripsi"
                      id="topik"
                      placeholder="Klik disini untuk mengedit deskripsi video"
                    />
                    <p className="info">Maksimal 200 kata</p>
                  </label>
                </form>
              </div>
            </div>
          </div>
          <div className="Button-modul">
            <button className="Cancel">Batal</button>
            <button className="Save">Simpan</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditVideo;
