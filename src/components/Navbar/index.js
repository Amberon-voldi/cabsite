import React from 'react'

import {FaBars} from 'react-icons/fa'


import { Nav, NavbarContainer, NavLogo, MobileIcon, NavItem, NavLinks, NavMenu, LogoImg } from './NavbarElements';


export default function Navbar({toggle, isOpen}) {
  return (
    <>
    <Nav>
        <NavbarContainer isOpen={isOpen}>
            <NavLogo to='/'>
            <LogoImg src='https://cdn.discordapp.com/attachments/919582268631162883/1009876301689147402/Untitled_design.png' alt="logo_image"/>
            </NavLogo>
            <MobileIcon onClick={toggle}>
                <FaBars/>
            </MobileIcon>
            <NavMenu>
            {/* <NavItem>
                    <NavLinks to='/apps'>Download App</NavLinks>
                </NavItem> */}
           
                <NavItem>
                    <NavLinks to='/faqs'>FAQs</NavLinks>
                </NavItem>
                
                <NavItem>
                    <NavLinks to='/about'>About</NavLinks>
                </NavItem>
               
                <NavItem>
                    <NavLinks to='/contact'>Contact Us</NavLinks>
                </NavItem>
            </NavMenu>
        </NavbarContainer>
    </Nav>
    </>
    )
}



