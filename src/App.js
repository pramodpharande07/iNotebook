import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Router>
        <Navbar/>q
        <Routes>
          {/* <Route path="/" element={<Navbar />} /> */}
          <Route exact path="/about" element={<About />} />
          <Route exact path="/home" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
