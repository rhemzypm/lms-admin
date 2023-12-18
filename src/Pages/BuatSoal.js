import React from "react";
import "sweetalert2/dist/sweetalert2.min.css";
import Sidebar from "../Component/Sidebar";
import BoxComponent from "../Component/BoxComponent";
function BuatSoal() {
  return (
    <div className="App">
      <Sidebar />
      <div>
        <div className="title">
          <h2 className="">Kegiatan</h2>
          <p className="subtitle">Kegiatan &gt; Pretest &gt; Buat Soal</p>
        </div>
        <BoxComponent></BoxComponent>
      </div>
    </div>
  );
}
export default BuatSoal;
