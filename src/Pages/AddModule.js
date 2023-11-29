import Sidebar from "../Component/Sidebar";

function AddModule() {
  return (
    <div className="App">
      <Sidebar />
      <div className="Modul-container2">
        <div className="Modul-header3">
          <p>Modul</p>
        </div>
        <div className="Modul-header2">
          <p>Modul ></p>
          <p>Tambah Modul </p>
        </div>
        <div className="Add-modul2">
          <p>Tambah Modul</p>
          <div className="Form-modul">
            <p>Judul Modul</p>
            {/* <p className="required">*</p> */}
            <form>
              <label for="modul">
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
            <button className="Save">Simpan</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddModule;
