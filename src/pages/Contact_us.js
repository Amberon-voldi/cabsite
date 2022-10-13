import React, { useState } from 'react'
import AboutServices from '../components/about_listinh';

import Footer from '../components/Footer';
import Header from '../components/Headers.js';
import styled from "styled-components";

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


      <Header title="Contact us" />
      <Con>
      <div className="container">
            <h1 >Email Support</h1>
          
            <label htmlFor="">support@cabyatri.com</label>
          </div>
          <div className="container">
            <h1 >Phone Support</h1>
            <label htmlFor="">+91 97171 63700</label>
          </div>
      </Con>
      <AboutServices />
      



      <Footer />

    </>
  )
}

export default Contact



const Con = styled.div`
margin-top:3rem;
display: flex;
  align-items: center;
  justify-content: center;


 width: 100%;

      background-color: white;
      padding: 1rem 2rem;

      .container {
        display: flex;
    
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 0 1.5rem;
        label {
          font-size: 1.1rem;
          color: black;
          padding: 0.3rem;
        }
        input {
          background-color: transparent;
          border: none;
          border-bottom: 1px solid #FFCA26;
 
          text-align: flex-start;
          color: black;
          &[type="date"] {
            padding-left: 3rem;
            border: none;
          }
          &[type="time"] {
      
            border: none;
          }
          &::placeholder {
            color: black;
          }
          &:focus {
            outline: none;
          }
        }
        select {
            border: none;
            width: 100%;
            color: var(--primary-color);
            margin-top: 0.5rem;
            background-color: white;
            font-size: 1.1rem;
            border-bottom: 1px solid #f5ebe9;
            padding-bottom: 0.3rem;
          }
      }
      button {
        padding: 1rem 2rem;
        cursor: pointer;
        border-radius: 0.3rem;
        border: none;
        color: black;
        background-color: #FFCA26;
        font-size: 1.1rem;
        text-transform: uppercase;
        transition: 0.3s ease-in-out;
        &:hover {
          background-color: black;
          color: white;
        }
      }

      @media screen and (min-width: 280px) and (max-width: 980px) {

        flex-direction: column;
        padding: 1rem;
        width: 100%;
   
        gap: 1rem;
        .container {
            
          padding: 0 0.8rem;
          input[type="date"] {
            padding-left: 1rem;
 
            background-color: yellow;
            color: black;
          }
          input {
     
            
          border-bottom: 1px solid #FFCA26;
          }
        }
        button {
          padding: 1rem;
          font-size: 1rem;
        }
      }
`;