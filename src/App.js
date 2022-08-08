
import React from "react";
import "./App.css";


import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Home from "./pages";
import Contact from "./pages/Contact_us";
import Faq from "./pages/faq";
import About from "./pages/about";
import Apps from "./pages/apps";



function App() {
  return (
    <Router>
  
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} exact/>
        <Route path="apps" element={<Apps />} exact/>
        <Route path="about" element={<About />} exact/>
        <Route path="faqs" element={<Faq />} exact/>
      </Routes>
      
         

    </Router>

  );
}

export default App;
