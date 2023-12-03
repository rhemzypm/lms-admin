import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { FaUser } from "react-icons/fa";
import modul from "../Assets/sidebar/modul.png";
import Daftar from "../Assets/sidebar/Vector.png";
import Kegiatan from "../Assets/sidebar/Kegiatan.png";
import SignOut from "../Assets/sidebar/Sign_out_squre.png";
import Topik from "../Assets/sidebar/Topik.png";
import "../style/sidebar.css";

const SidebarContent = () => {
  const [profileImage, setProfileImage] = useState(null);

  return (
    <Sidebar
      className="sidebar-container"
      style={{
        position: "absolute",
        left: "0",
        marginLeft: "10px",
        height: "90%",
        borderRadius: "10px",
        overflow: "hidden",
        backgroundColor: "white",
      }}
    >
      <Menu iconShape="square">
        <MenuItem style={{ height: "100px" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            {profileImage ? (
              <img
                src={profileImage}
                alt="profile"
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                }}
              />
            ) : (
              <FaUser size={30} style={{ marginRight: "10px" }} />
            )}
            <div className="sidebar-name">
              <h6>Dashboard</h6>
              <h6>John Doe</h6>
            </div>
          </div>
        </MenuItem>
        <MenuItem
          component={<Link to="/Module" />}
          icon={<img src={modul} alt="modul" />}
        >
          Modul
        </MenuItem>
        <MenuItem
          component={<Link to="/Topik"></Link>}
          icon={<img src={Topik} alt="Topik" />}
        >
          Topik
        </MenuItem>
        <MenuItem
          component={<Link to="/Course"></Link>}
          icon={<img src={Kegiatan} alt="course" />}
        >
          Kegiatan
        </MenuItem>
        <MenuItem
          icon={
            <img src={Daftar} alt="daftar" style={{ fontWeight: "bold" }} />
          }
        >
          Kelas{" "}
        </MenuItem>
      </Menu>
      <Menu iconShape="square" className="logout-button-sidebar">
        <MenuItem icon={<img src={SignOut} alt="signout" />}>Log Out</MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default SidebarContent;
