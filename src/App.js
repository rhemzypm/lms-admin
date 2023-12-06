import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login";
import AddModule from "./Pages/AddModule";
import Dashboard from "./Pages/Dashboard";
import CourseTable from "./Pages/CourseTable";
import Course from "./Pages/Course";
import ForgotPassword from "./Pages/ForgotPassword";
import Module from "./Pages/Module";
import Topik from "./Pages/Topik";
import EditModule from "./Pages/EditModule";
// import AddModule from "./Pages/AddModule";
import Pretest from "./Pages/Pretest";
import AddTopik from "./Pages/AddTopik";
import TopikTable from "./Pages/TopikTable";
import PretestTable from "./Pages/PretestTable";
import AddVideo from "./Pages/AddVideo";
import EditVideo from "./Pages/EditVideo";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="Course" element={<Course />} />
        <Route path="CourseTable" element={<CourseTable />} />
        <Route path="ForgotPassword" element={<ForgotPassword />} />
        <Route path="Module" element={<Module />} />
        <Route path="Topik" element={<Topik />} />
        <Route path="Pretest" element={<Pretest />} />
        <Route path="/Editmodule" element={<EditModule />} />
        <Route path="/AddModule" element={<AddModule />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="AddTopik" element={<AddTopik />} />
        <Route path="TopikTable" element={<TopikTable />} />
        <Route path="PretestTable" element={<PretestTable />} />
        <Route path="AddVideo" element={<AddVideo />} />
        <Route path="EditVideo" element={<EditVideo />} />
      </Routes>
    </div>
  );
}

export default App;
