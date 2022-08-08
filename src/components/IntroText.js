import React from "react";
import styled from "styled-components";



export default function InfoText({title, dis}) {
  return (
    <Section id="blog">
      <div className="title">
        <h1>{title}</h1>
      </div>



      <Pra>
      {dis}
      </Pra>



    </Section>
  );
}

const Pra = styled.p`
 
  opacity: 0.6;
  text-align: start;
  margin-left:4rem;
   font-size: 1rem;
   


   @media screen and (min-width: 280px) and (max-width: 1080px) {
  
    margin-left:0;
  }
 


`

const Section = styled.section`
   padding: 2rem;

  .title {
    margin-top: 2rem;
    margin-left:4rem;
    display: flex;
    justify-content: start;
    .h1 {
     
        text-align: start;
        font-size: 1.5rem;
        width: 80%;
      }
   
  }
  

   

      
      
       
      
   
  @media screen and (min-width: 280px) and (max-width: 1080px) {
  
    .title {
      margin-left:0;
      margin-top: 2rem;
      display: flex;
      justify-content: start;
      h1 {
       
        text-align: start;
        font-size: 1.5rem;
        width: 80%;
      }
    }
   
  }
`;