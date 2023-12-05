import Sidebar from "../Component/Sidebar";
import Modul from "../Assets/Modul.png";

function TopikTable() {
  return (
    <div className="App">
      <Sidebar />
      <div className="Modul-table">
        <div className="Modul-header3">
          <p>Modul</p>
        </div>
        <div className="Modul-header2">
          <p>Modul &gt; </p>
          <p>Modul 1 </p>
        </div>
        <div className="Add-modul">
          <img src={Modul} alt="Modul" className="Modul-img" />
          <p>Tambah Topik</p>
        </div>
        <div className="Table-section2">
          <div className="Table-modul">
            <div className="ButtomTable">
              <table class="styledTable">
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Topik</th>
                    <th>Modul</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="clickable-row">
                    <td>1</td>
                    <td>Internet untuk Bisnis</td>
                    <td>Modul Pengembangan</td>
                    <td>
                      <div className="Edit-table">Edit</div>
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr class="clickable-row">
                    <td>2</td>
                    <td>Pelatihan Office Excel</td>
                    <td>Modul Pengembangan</td>
                    <td>
                      <div className="Edit-table">Edit</div>
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr class="clickable-row">
                    <td>3</td>
                    <td>Pelatihan office Word</td>
                    <td>Modul Dukungan Teknologi</td>
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

export default TopikTable;
