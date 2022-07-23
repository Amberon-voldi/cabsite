import React, {useState} from 'react'
import HeroSelection from '../components/HeroSelection';

import Navbar from '../components/Navbar';

import Sidebar from '../components/Sidebar';
import InfoSelection from '../components/InfoSelection';
import { homeObjOne } from '../components/InfoSelection/Data';
import Services from '../components/services';
import Testimonial from '../components/Testimonial';


function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <> 
      <Sidebar isOpen={isOpen} toggle={toggle} /> 
     <Navbar toggle={toggle} isOpen={isOpen}/>

     <HeroSelection />
     <Services />
     <InfoSelection {...homeObjOne}/>
     <Testimonial />
     
     
     
    

    
  
    </>
  )
}

export default Home
