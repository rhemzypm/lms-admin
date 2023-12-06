import Sidebar from "../Component/Sidebar";

function AddVideo() {
  return (
    <div className="App">
      <Sidebar />
      <div className="Modul-container2">
        <div className="Modul-header3">
          <p>Modul</p>
        </div>
        <div className="Modul-header2">
          <p>Modul &gt;</p>
          <p>Tambah Modul </p>
        </div>
        <div className="Add-modul2">
          <p>Tambah Modul</p>
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

export default AddVideo;
