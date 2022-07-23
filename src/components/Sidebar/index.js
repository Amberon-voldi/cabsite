import React from 'react'
import { SidebarContainer, Icon, CloseIcon , SidebarWrapper, SidebarMenu, SideBtnWrap, SidebarLink, SideBarRoute} from './SidebarElements'


export default function Sidebar({isOpen, toggle}) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to = 'faqs' onClick={toggle}>FAQs</SidebarLink>
                <SidebarLink to = 'about' onClick={toggle}>About</SidebarLink>
                <SidebarLink to = 'contact' onClick={toggle}>Contact Us</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SideBarRoute to ='/signin'>
                    Book Now
                </SideBarRoute>
            </SideBtnWrap>
            </SidebarWrapper>  
    </SidebarContainer>
  )
}
