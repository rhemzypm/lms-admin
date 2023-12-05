import Sidebar from "../Component/Sidebar";

function AddTopik() {
  return (
    <div className="App">
      <Sidebar />
      <div className="Modul-container2">
        <div className="Modul-header3">
          <p>Modul</p>
        </div>
        <div className="Modul-header2">
          <p>Modul </p>
          <p>Tambah Modul </p>
        </div>
        <div className="Add-modul2">
          <p>Tambah Modul</p>
          <div className="Form-modul">
            <div class="form-container">
              <div class="form-section-kiri">
                <p>
                  Judul Topik <span className="required-kiri">*</span>
                </p>
                <form>
                  <label for="topik">
                    <input
                      type="topik"
                      id="topik"
                      placeholder="Isi judul topik anda"
                    />
                    <p className="info">Maksimal 100 karakter</p>
                  </label>
                </form>
              </div>

              <div class="form-section-kanan">
                <p>
                  Pilih Modul <span className="required-kanan">*</span>
                </p>
                <form>
                  <label for="topik">
                    <input
                      type="modul"
                      id="modul"
                      placeholder="Pilih modul anda"
                    />
                    <p className="info">Maksimal 100 karakter</p>
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

export default AddTopik;
