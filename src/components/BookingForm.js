import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styled from "styled-components";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5w28lxd', 'template_etwr2uj', form.current, '7df777ZcP9Gj0X1wS')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
        <Con>
      <div className="container">
            <label htmlFor=""> Enter Pick UP</label>
            <input type="text" name="pick"/>
           
           
          </div>
          <div className="container">
            <label htmlFor="">Enter Drop</label>
            <input type="text" name="drop" />
          </div>
          <div className="container">
            <label htmlFor="">Date</label>
            <input type="date" />
          </div>
          <div className="container">
            <label htmlFor="">Mobile No</label>
            <input type="tel" maxlength="10" name="mobile"/>
          </div>
      <button value="send" >Get Quote</button></Con>
    </form>
  );
};

export default ContactUs

const Con = styled.div`

 display: flex;
 width: 100%;

      background-color: white;
      padding: 1rem 2rem;
      border-radius: 0.5rem;
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