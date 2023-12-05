import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Component/Sidebar";
import SuccessImage from "../Assets/SuccessImage.png";
import FailImage from "../Assets/FailImage.png";

function PretestTable() {
  const [moduleData, setModuleData] = useState([
    {
      id: 1,
      name: "Sosial media mendukung bisnis",
      subname: "Modul Dukungan Teknologi Informasi untuk Bisnis UMKM",
      status: "Success",
    },
    {
      id: 2,
      name: "Internet untuk bisnis",
      subname: "Modul Dukungan Teknologi Informasi untuk Bisnis UMKM",
      status: "Success",
    },
    {
      id: 3,
      name: "Pelatihan Office Excel",
      subname: "Modul Dukungan Teknologi Informasi untuk Bisnis UMKM",
      status: "Fail",
    },
    {
      id: 4,
      name: "Pelatihan Office Word",
      subname: "Modul Dukungan Teknologi Informasi untuk Bisnis UMKM",
      status: "Fail",
    },
  ]);

  const AddModule = () => {
    const newModule = {
      id: moduleData.length + 1,
      name: `Modul Baru ${moduleData.length + 1}`,
      status: "New",
    };
    setModuleData([...moduleData, newModule]);
  };

  const getStatusImage = (status) => {
    if (status === "Success") {
      return (
        <img
          src={SuccessImage}
          alt="Success"
          style={{ width: "30px", height: "30px" }}
        />
      );
    } else if (status === "Fail") {
      return (
        <img
          src={FailImage}
          alt="Fail"
          style={{ width: "30px", height: "30px" }}
        />
      );
    }
  };

  return (
    <div className="App">
      <Sidebar />
      <div className="Modul-table">
        <div className="Modul-header4">
          <h1>Kegiatan</h1>
          <p>kegiatan &gt; pre-test</p>
        </div>
        <div className="Table-section">
          <div className="Table-modul">
            <div className="ButtomTable">
              <p>Pre-Test</p>
              <table className="styledTable2">
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Topik</th>
                    <th>Status</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {moduleData.map((module) => (
                    <tr key={module.id} className="clickable-row">
                      <td>{module.id}</td>
                      <td>
                        {module.name && (
                          <p
                            className="Module-Name"
                            style={{ fontSize: "18px" }}
                          >
                            {module.name}
                          </p>
                        )}
                        {module.subname && (
                          <p className="Subname" style={{ fontSize: "12px" }}>
                            {module.subname}
                          </p>
                        )}
                      </td>
                      <td>{getStatusImage(module.status)}</td>
                      <td>
                        <Link to={`/edit-page/${module.id}`}>
                          <div className="Edit-table" role="button">
                            {module.status === "Success"
                              ? "Ubah Soal"
                              : "Buat Soal"}
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

export default PretestTable;
