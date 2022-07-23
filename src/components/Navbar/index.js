import React from 'react'
import { NavLink } from 'react-bootstrap';
import {FaBars} from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavItem, NavLinks, NavMenu } from './NavbarElements';


export default function Navbar({toggle, isOpen}) {
  return (
    <>
    <Nav>
        <NavbarContainer isOpen={isOpen}>
            <NavLogo to='/'>
                Traveling Cab Service
            </NavLogo>
            <MobileIcon onClick={toggle}>
                <FaBars/>
            </MobileIcon>
            <NavMenu>
                <NavItem>
                    <NavLinks to='about'>Popular Outstation Routes</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to='about'>About</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to='contact'>Contact Us</NavLinks>
                </NavItem>
            </NavMenu>
        </NavbarContainer>
    </Nav>
    </>
    )
}
