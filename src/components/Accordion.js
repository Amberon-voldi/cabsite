import React, { useState } from 'react';

import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';

const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
height: 600px;
  background: #fff;
`;

const Container = styled.div`
  position: absolute;


  width: 80%;
 
  h1 {
    gap:5rem;
  }
`;

const Wrap = styled.div`
  background: white;
  color: black;
height: 70px;
border: 1px solid black;

  border-radius: 0.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  text-align: center;
  cursor: pointer;
  h1 {
    padding: 2rem;
    font-size: 1.2rem;
  }
  span {
    margin-right: 1.5rem;
  }
  @media screen and (max-width: 760px) {
    h1{
      font-size: 0.8rem;
    }
  }
`;

const Dropdown = styled.div`
  background: white
  ;
  color: black;
  width: 100%;

  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  
  p {
    font-size: 1rem;
    margin-inline: 1rem;
  }
  @media screen and (max-width: 860px) {
    p{
      margin-inline: 1rem;
      font-size: 0.8rem;
    }
  }
`;

const Accordion = () => {

  const Data = [
    {
      question: 'What is CabYatri?',
      answer: 'www.cabyatri.com is an online car rental booking portal for outstation travels. What makes us unique is our concept of “Go One Way, Pay One Way” i.e.'
    },
    {
      question: 'Why should you book from CabYatri?',
      answer: 'Because we are online, work 24x7, in 4000+ Cities and offer variety of Outstation taxi option for travelers.'
    }, {
    question: 'What are our place of operations?',
    answer: 'We are currently offering our services in more than 200+ cities across India, From Noide to Shimla and Manali'
  },
]



  const [clicked, setClicked] = useState(false);

  const toggle = index => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <IconContext.Provider value={{ color: '#00FFB9', size: '25px' }}>
      <AccordionSection>
        <Container>
        <h1>FAQs</h1>
          {Data.map((item, index) => {
            return (
              <>
   
                <Wrap onClick={() => toggle(index)} key={index}>
                  <h1>{item.question}</h1>
                  <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </Wrap>
                {clicked === index ? (
                  <Dropdown>
                    <p>{item.answer}</p>
                  </Dropdown>
                ) : null}
              </>
            );
          })}
        </Container>
      </AccordionSection>
    </IconContext.Provider>
  );
};

export default Accordion;