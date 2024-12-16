// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Groceries from "./pages/Groceries";
import Login from "./pages/login";
import Signup from "./pages/Signup";

import "./App.css";
export default function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        <Route path="/groceries" element={<Groceries />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup/> } />
        </Routes>
      </Router>
  );
}
