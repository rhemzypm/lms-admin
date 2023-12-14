import React, { useState } from "react";
import Sidebar from "../Component/Sidebar";

function UploadVideo() {
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
            <p>Video</p>
            <span>
              Modul : Modul Dukungan Teknologi Informasi untuk Bisnis UMKM
            </span>
            <span>Topik : Internet untuk Bisnis</span>
            <div className={`Video-Status ${videoUploaded ? "Uploaded" : ""}`}>
              {videoUploaded ? "Video sudah diunggah" : "Video belum diunggah"}
            </div>
          </div>
          <div className="Button-Video">
            <button
              className={`Change ${videoUploaded ? "Uploaded" : ""}`}
              onClick={() => setVideoUploaded(!videoUploaded)}
            >
              {videoUploaded ? "Ubah Video" : "Unggah Video"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UploadVideo;
