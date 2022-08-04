import React from "react";
import styled from "styled-components";
import {Icon, CloseIcon} from "./Sidebar/SidebarElements"

function FAQDropDown() {
    return (
        
        <Section>
            
            <div className="container">
            <Icon>
            <CloseIcon />
        </Icon>
                <div className="MenuWrap">Jsksjfjnj</div>
            </div>

        </Section>
    )

}

export default FAQDropDown


const Section = styled.section`
  height: 50px;



.container{
    width: 100%;
height: 90%;

display: flex;
justify-content: center;


.MenuWrap{
    
    background-color: antiquewhite;
    width:80%;
    height:90%;
    align-items: center;
padding-left: 10px;
    display: flex;
    border-radius: 5px;
}
}


    
  

`