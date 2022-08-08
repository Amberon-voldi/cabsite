import React, { useState } from 'react'


import Footer from '../components/Footer';
import Header from '../components/Headers.js';

import InfoSelection from '../components/InfoSelection';
import InfoText from '../components/IntroText';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

import { homeObjSecond } from '../components/InfoSelection/Data';


function About() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} isOpen={isOpen} />

      <Header title="About" />
      <InfoText title='We Are CabYatri' dis="CabYatri is your Partner for Outstation Rental, Taxi Service, Tourism and Transportation all over India. We ensure to simplify traveler’s life by getting them the best outstation cab deals in just a few minutes without even waiting.

We’ve empowered with thousands of taxi vendor as our travel partners to make outstation taxi booking easier and affordable for masses and positively changing the dynamics of the outstation travel market in India.

We, at CabYatri ensure that everyone of our customers gets the best of their money. In fact that is our actual goal and one of the key factor for starting a Cab Booking system like CabYatri itself. "/>

      <InfoSelection {...homeObjSecond} />





      <Footer />

    </>
  )
}

export default About