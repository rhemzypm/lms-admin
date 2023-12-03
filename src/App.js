import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';
import AddModule from './Pages/AddModule';
import Dashboard from './Pages/Dashboard';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />

        {/* Route for the AddModule page */}
        <Route path="/addmodule" element={<AddModule />} />

        {/* Route for the Dashboard page */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
