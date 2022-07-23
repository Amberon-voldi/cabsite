import styled from "styled-components";
import { Link as LinkR} from "react-router-dom";
import {Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: #000;
  height: 65px;
  display: flex;
  
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  top: 0;
  z-index: 0;
  position: sticky;

  @media screen and (min-width: 860px) {
    transition: 0.8s all ease;
  }
  `
export const NavbarContainer = styled.div`
  display: flex;
  position: fixed;
  
  height: 80px;
  justify-content: space-between;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
  opacity: ${({isOpen}) => (isOpen ? '0' : '100%') };
  `;

export const NavLogo = styled(LinkR)`
  color: #fff;
  display: flex;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  margin-left: 1px;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
  `

  export const MobileIcon = styled.div`
  display: none;
  
  @media screen and (max-width: 768px) {
    display: block;
    cursor: pointer;
    color: #fff;
    font-size: 1.8rem;
    top: 0;
   
    right: 0;
    position: absolute;
    transform: translate(-100%, 60%);

  }
  `

  export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;
  justify-self: flex-start;

  @media screen and (max-width: 768px){
    display: none;
  }
  `

  export const NavItem = styled.li`
  height: 80px
  `

  export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  

  &.active {
    border-buttom: 3px solid #01bf71;
  }
  
  `

  