import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/Home_page/Home_page.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import "./App.css";
import Login from "./components/Login/Login.jsx";
import Register from "./components/Register/Register.jsx";
import TripList from "./components/TripList/TripList.jsx";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard.jsx";
import AddTrip from "./components/AddTrip/AddTrip.jsx";
import About from "./components/About/About.jsx";


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
          <Route path="/admin-login" element={<AdminDashboard />} />
          <Route path="/add-trip" element={<AddTrip />} />
          <Route path="/about" element={<About />} />
          {/* Add additional routes here for other components */}
          {/* Example: <Route path="/about" element={<AboutPage />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
