import React, { useState } from 'react'
import AboutServices from '../components/about_listinh';

import Footer from '../components/Footer';
import Header from '../components/Headers.js';

import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';




function Contact() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} isOpen={isOpen} />


<Header title="Contact us"/>
<AboutServices />




    <Footer />

    </>
  )
}

export default Contact