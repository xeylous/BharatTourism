import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/Home_page/Home_page.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import "./App.css";
import Login from "./components/Login/Login.jsx";
import Register from "./components/Register/Register.jsx";
import TripList from "./components/TripList/TripList.jsx";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard.jsx";
import AdminLogin from "./components/Admin_login/Admin_login.jsx";
import AddTrip from "./components/AddTrip/AddTrip.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/trips" element={<TripList />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/add-trip" element={<AddTrip />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          {/* Add additional routes here for other components */}
          {/* Example: <Route path="/about" element={<AboutPage />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
