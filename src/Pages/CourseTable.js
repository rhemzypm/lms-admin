import Sidebar from "../Component/Sidebar";
import Modul from "../Assets/Modul.png";

function CourseTable() {
  return (
    <div className="App">
      <Sidebar />
      <div className="Modul-table">
        <div className="Modul-header3">
          <p>Modul</p>
        </div>
        <div className="Add-modul">
          <img src={Modul} alt="Modul" className="Modul-img" />
          <p>Tambah Modul</p>
        </div>
        <div className="Table-section">
          <div className="Table-modul">
            <div className="ButtomTable">
              <table class="styledTable">
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Modul</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="clickable-row">
                    <td>1</td>
                    <td>
                      Modul Dukungan Teknologi Informasi untuk Bisnis UMKM
                    </td>
                    <td>
                      <div className="Edit-table">Edit</div>
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr class="clickable-row">
                    <td>2</td>
                    <td>Modul Pengenalan Regulasi dalam Bisnis UMKM</td>
                    <td>
                      <div className="Edit-table">Edit</div>
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr class="clickable-row">
                    <td>3</td>
                    <td>Modul Strategi dan Pengembangan Bisnis UMKM</td>
                    <td>
                      <div className="Edit-table">Edit</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseTable;
