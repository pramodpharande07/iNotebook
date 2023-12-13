import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  
  return (
    <>
    <NoteState>
      <Router>
        <Navbar/>
        <Alert alert={alert}/>
        <div className="container">
        <Routes>
          {/* <Route path="/" element={<Navbar />} /> */}
          <Route exact path="/about" element={<About />} />
          <Route exact path="/home" element={<Home showAlert={showAlert} />} />
          <Route exact path="/login" element={<Login showAlert={showAlert}/>} />
          <Route exact path="/signup" element={<Signup  showAlert={showAlert}/>} />
        </Routes>
        </div>
      </Router>
    </NoteState>
    </>
  );
}

export default App;
