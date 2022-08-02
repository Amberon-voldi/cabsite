import React from "react";
import styled from "styled-components";

function FAQDropDown() {
    return (
<Section>
<div className="container">
How can i cancel my booking?
</div>

</Section>
    )

}

export default FAQDropDown


const Section = styled.section`
  
width: 100%;


.container{
    background-color: white;
 display: flex;
 margin-left: 3rem;
  
  color:black;
  justify-content: start;



 

    border-radius: 10px;
}


    
  

`;