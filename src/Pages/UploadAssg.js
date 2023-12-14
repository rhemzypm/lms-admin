import React, { useState } from "react";
import Sidebar from "../Component/Sidebar";

function UploadAssg() {
  const [videoUploaded, setVideoUploaded] = useState(false);

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
        <div className="Add-Upload-Video">
          <div className="Text-Upload-Video">
            <p>Tes Akhir</p>
            <span>
              Modul : Modul Dukungan Teknologi Informasi untuk Bisnis UMKM
            </span>
            <span>Topik : Internet untuk Bisnis</span>
            <div className={`Video-Status ${videoUploaded ? "Uploaded" : ""}`}>
              {videoUploaded ? "Soal sudah dibuat" : "Belum ada soal"}
            </div>
          </div>
          <div className="Button-Video">
            <button
              className={`Change ${videoUploaded ? "Uploaded" : ""}`}
              onClick={() => setVideoUploaded(!videoUploaded)}
            >
              {videoUploaded ? "Ubah Soal" : "Buat Soal"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UploadAssg;
