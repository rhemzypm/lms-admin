import React from "react";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import Sidebar from "../Component/Sidebar";
import ReactDOMServer from "react-dom/server";

function AddVideo() {
  const handleSaveClick = async () => {
    Swal.fire({
      html: ReactDOMServer.renderToString(
        <div className="Edit-popup">Video Berhasi Diunggah</div>
      ),
      icon: "success",
      showConfirmButton: false,
    });
  };
  return (
    <div className="App">
      <Sidebar />
      <div className="Modul-container2">
        <div className="Modul-header3">
          <p>Kegiatan</p>
        </div>
        <div className="Modul-header2">
          <p>Kegiatan &gt;</p>
          <p>Modul 1 &gt; </p>
          <p>Topik 1 &gt;</p>
          <p>Video </p>
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
            <button className="Save" onClick={handleSaveClick}>
              Simpan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddVideo;
