import React from 'react'
import NavLogo from '../../assets/shared/desktop/logo.svg'
import close from '../../assets/shared/mobile/close.svg'
import {  NavLink } from 'react-router-dom'
import { SidebarContainer, SidebarWrapper, SideBarList,SideBarButton,SideBarLink} from './SideBarElements.jsx'
import './SideBarStyle.css'
const Sidebar = (props) => {
    return (
    <>
        <SidebarContainer 
        isOpen={props.click}
        >
            <SidebarWrapper>
            <NavLink onClick={props.onClick} to={"/"}><img className='SideBarLogo' src={NavLogo} alt="logo-PhotoSnap" /></NavLink>
            <img className="Close" src={close} alt="Menu-hanburger" onClick={props.onMenu} isOpen={props.click} />
            </SidebarWrapper>
            <SideBarList>
                    <SideBarLink onClick={props.onClick} className='SideBarItems' to={"/stories"}><li className='NavItems'>STORIES</li></SideBarLink>
                    <SideBarLink onClick={props.onClick} className='SideBarItems' to={"/features"}><li className='NavItems'>FEATURES</li></SideBarLink>
                    <SideBarLink onClick={props.onClick} className='SideBarItems' to={"/pricing"}>
                        <li className='SideBarItems'>PRICING</li>
                    </SideBarLink>
                </SideBarList>
                <SideBarButton>GET AN INVITE</SideBarButton>
            
        </SidebarContainer>
    </>
    )
}

export default Sidebar
