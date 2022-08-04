import React, { useState } from 'react';
import  Accordion  from '../components/Accordion';
import Footer from '../components/Footer';

import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Faq = () => {
    const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    
    <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} isOpen={isOpen} />
      <Accordion />

      <Footer />
    </>
  )
}

export default Faq
