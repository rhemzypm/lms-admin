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
        <Route path="/addmodule" element={<AddModule />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
