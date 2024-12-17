// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Groceries from "./pages/Groceries";
import Footer from "./components/Footer";
import Body from "./components/Body";
import "./App.css";
export default function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home />} />
        <Route path="/groceries" element={<Groceries />} />
      </Routes>
      <Body/>
      <Footer/>
    </Router>
  );
}
