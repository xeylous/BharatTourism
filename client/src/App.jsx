import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import HomePage from "./components/Home_page/Home_page.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Add additional routes here for other components */}
          {/* Example: <Route path="/about" element={<AboutPage />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
