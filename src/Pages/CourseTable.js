import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Component/Sidebar";
import Modul from "../Assets/Modul.png";

function CourseTable() {
  const [moduleData, setModuleData] = useState([
    { id: 1, name: "Modul Dukungan Teknologi Informasi untuk Bisnis UMKM" },
  ]);

  const AddModule = () => {
    const newModule = {
      id: moduleData.length + 1,
      name: `Modul Baru ${moduleData.length + 1}`,
    };
    setModuleData([...moduleData, newModule]);
  };

  return (
    <div className="App">
      <Sidebar />
      <div className="Modul-table">
        <div className="Modul-header3">
          <p>Modul</p>
        </div>
        <div className="Add-modul">
          <img src={Modul} alt="Modul" className="Modul-img" />
          <p onClick={AddModule}>Tambah Modul</p>
        </div>
        <div className="Table-section">
          <div className="Table-modul">
            <div className="ButtomTable">
              <table className="styledTable">
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Modul</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {moduleData.map((module) => (
                    <tr key={module.id} className="clickable-row">
                      <td>{module.id}</td>
                      <td>{module.name}</td>
                      <td>
                        <Link to={`/edit-page/${module.id}`}>
                          <div className="Edit-table" role="button">
                            Edit
                          </div>
                        </Link>
                      </td>
                    </tr>
                  ))}
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
