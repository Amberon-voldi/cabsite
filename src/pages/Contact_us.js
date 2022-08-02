import React, { useState } from 'react'


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











    </>


  )
}

export default Contact