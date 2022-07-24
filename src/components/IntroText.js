import React from "react";
import styled from "styled-components";



export default function InfoText() {
    return (
        <Section id="blog">
            <div className="title">
                <h1>All India Taxi Service At Best Prices</h1>
            </div>


            <div className="title">

            </div>
            <p className="desrciption">
            We offer Rental Cab service all over india for outstation one way and round trip Car Rental service for intercity travel. Outstation Rental Car in Bareilly all type of car are available.
            </p>



        </Section>
    );
}

const Section = styled.section`
   padding: 2rem;
   margin-top: 2rem;
  .title {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
   
  }
  

   

      
      .title {
        display: flex;
        gap: 1rem;
        justify-content: center;
        align-items: center;
      
       
      
      .desrciption {
     
       text-align: center;
        font-size: 1.1rem;
        line-height: 2rem;
      }
    
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin-top: 5rem;
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