import React from "react";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import Sidebar from "../Component/Sidebar";
import Modul from "../Assets/Modul.png";

function AddModule() {
  const handleSaveClick = async () => {
    const judulModul = document.getElementById("modul").value;

    if (judulModul.length > 100) {
      await Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Judul Modul tidak boleh lebih dari 100 karakter!",
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Good job!",
        text: "Judul Modul valid, Anda dapat melanjutkan proses simpan.",
      });
      console.log("Judul Modul valid, simpan ke database atau lakukan sesuatu");
    }
  };

  return (
    <div className="App">
      <Sidebar />
      <div className="Modul-container2">
        <div className="Modul-header3">
          <p>Modul</p>
        </div>
        <div className="Modul-header2">
          <p>Modul</p>
          <p> Tambah Modul </p>
        </div>
        {/* <div className="Add-modul">
          <img src={Modul} alt="Modul" className="Modul-img" />
          <p onClick={AddModule}>Tambah Modul</p>
        </div> */}
        <div className="Add-modul2">
          <p>Tambah Modul</p>
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
            <button className="Save" onClick={handleSaveClick}>
              Simpan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddModule;
