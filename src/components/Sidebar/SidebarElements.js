import styled from "styled-components";

import {FaTimes} from "react-icons/fa";
import { Link as LinkR} from "react-router-dom";


export const SidebarContainer = styled.aside`
  display: grid;
position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({isOpen}) => (isOpen ? '100%' : '0') };
  top: ${({isOpen}) => (isOpen ? '0' : '-100%') };

  `;


  export const CloseIcon = styled(FaTimes)`
 color: #fff;

  `;

  export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  outline: none;
  cursor: pointer;
  `;

  export const SidebarWrapper = styled.div`
  color: white;
  `;

  
export const SidebarMenu = styled.ul`
display: grid;
grid-template-rows: repeat(6, 80px);
grid-template-columns: 2fr;
text-align: center;


@media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
}

`;

  export const SidebarLink = styled(LinkR)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: white;
  cursor: pointer;
  
  &:hover {
    color: aqua;
    transition: 0.2s ease-in-out;
    }
  `;

  export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  `
export const SideBarRoute = styled(LinkR)`
  background: #FFC433;
  border-radius: 50px;
  white-space: nowrap;
  padding: 16px 64px;
  font-size:  16px;
  border: none;
  color: #010606;
  cursor: pointer;
  text-decoration: none;
  outline: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
    transform: scale(1.1);
}
  `;
