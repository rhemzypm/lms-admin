import Sidebar from "../Component/Sidebar";
import Pretest from "../Assets/Pretest.png";
import Video from "../Assets/Video.png";
import Materislide from "../Assets/Materislide.png";
import Tugasmandiri from "../Assets/Tugasmandiri.png";
import Posttest from "../Assets/Posttest.png";
import Zoommeeting from "../Assets/Zoommeeting.png";

function Course() {
  return (
    <div className="App">
      <Sidebar />
      <div className="Modul-container">
        <div className="Modul-header">
          <p>Modul</p>
        </div>
        <div className="Modul-header2">
          <p>Modul </p>
          <p>Modul 1 </p>
          <p>Topik 1 </p>
          <p>Kegiatan </p>
        </div>
        <section className="modul-section">
          <div className="Modul-topic">
            <img src={Pretest} alt="Pretest" className="pretest-img" />
            <p>Pre-Test</p>
          </div>
          <div className="Modul-topic">
            <img src={Video} alt="Video" className="Video-img" />
            <p>Video</p>
          </div>
          <div className="Modul-topic">
            <img
              src={Materislide}
              alt="Materislide"
              className="Materislide-img"
            />
            <p>Materi + slide</p>
          </div>
          <div className="Modul-topic">
            <img
              src={Tugasmandiri}
              alt="Tugasmandiri"
              className="Tugasmandiri-img"
            />
            <p>Tugas Mandiri</p>
          </div>
          <div className="Modul-topic">
            <img src={Posttest} alt="Posttest" className="Posttest-img" />
            <p>Post-Test</p>
          </div>
          <div className="Modul-topic">
            <img
              src={Zoommeeting}
              alt="Zoommeeting"
              className="Zoommeeting-img"
            />
            <p>Zoom Meeting</p>
          </div>
        </section>
      </div>
    </div>
    // </div>
  );
}

export default Course;
