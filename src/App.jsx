// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Groceries from "./pages/Groceries";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Cart from "./pages/Cart";
import UserStatusModal from "./components/UserStatusModal";
import "./App.css";
export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/groceries" element={<Groceries />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path='/cart' element={<Cart />} />

      </Routes>
    </Router>
  );
};
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
};
