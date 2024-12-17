// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Groceries from "./pages/Groceries";
<<<<<<< HEAD
import Cart from "./pages/Cart";

import "./App.css";
export default function App() {
  return (
      <Router>
        <Navbar />
=======
import Footer from "./components/Footer";
import Body from "./components/Body";
import "./App.css";
export default function App() {
  return (
    <Router>
      <Navbar/>
>>>>>>> Rylan
      <Routes>
          <Route path="/" element={<Home />} />
        <Route path="/groceries" element={<Groceries />} />
<<<<<<< HEAD
        <Route path='/cart' element={<Cart/>}/>

        </Routes>
      </Router>
=======
      </Routes>
      <Body/>
      <Footer/>
    </Router>
>>>>>>> Rylan
  );
}
