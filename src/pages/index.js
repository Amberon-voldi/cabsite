import React, { useState } from 'react'
import HeroSelection from '../components/HeroSelection';
import styled from "styled-components";
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Services from '../components/services';


import Footer from '../components/Footer';

import InfoSelection from '../components/InfoSelection';
import { homeObjOne } from '../components/InfoSelection/Data';
import Offer from '../components/offer';
import Destinations from '../components/Destinations';



function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} isOpen={isOpen} />

      <HeroSelection />
      <Section>
      <Services />
  
        <InfoSelection {...homeObjOne} />
        <Destinations />
        <Offer />

        


  
 
      </Section>
      <Footer />







    </>
  )
}

export default Home


const Section = styled.section`
  
  .title {

    margin-top: 10px;
    display: flex;
    justify-content: center;
   
  }
  

   

      
      .title {
        display: flex;
  
        justify-content: center;
        align-items: center;
      
       
      
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
  
    .title {
      display: flex;
      justify-content: center;
      h1 {
        text-align: center;
        font-size: 1.5rem;
        width: 80%;
      }
    }
   
  }
`;