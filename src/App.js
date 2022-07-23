
import React from "react";
import "./App.css";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages";


function App() {
  return (
    <Router>
         <Home />
         

    </Router>

  );
}

export default App;
