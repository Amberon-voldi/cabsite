
import React from "react";
import "./App.css";


import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Home from "./pages";
import Contact from "./pages/Contact_us";
;


function App() {
  return (
    <Router>
  
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} exact/>
      </Routes>
      
         

    </Router>

  );
}

export default App;
