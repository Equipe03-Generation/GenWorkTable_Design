import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Turmas";
import Project from "./components/Projetos";
import About from "./components/Grupos";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import CustomNavbar from "./components/GenWorks";

function App() {
  return (
    <Router>
      <div className="App">
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Turmas" element={<Home />} />
          <Route path="/Projetos" element={<Project />} />
          <Route path="/Grupos" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
