import React from 'react'
import './NavStyle.css'
import NavLogo from '../../assets/shared/desktop/logo.svg'
import hanburger from '../../assets/shared/mobile/menu.svg'
import { Link ,NavLink } from 'react-router-dom'
import Sidebar from '../Sidebar'
const Nav = () => {
    const [click, setClick] = React.useState(false)
    const handleClick = () => setClick(false)
    const handleMenu = () => setClick(!click)
    return (
        
    <>
        <div className="NavContainer">
            <div className="NavWrapper">
                <NavLink to={"/"}><img className='NavLogo' src={NavLogo} alt="logo-PhotoSnap" /></NavLink>
                <img className="Menu" src={hanburger} alt="Menu-hanburger" onClick={handleClick} />
                <ul className='NavList'>
                    <Link className='NavItems' to={"/stories"}><li className='NavItems'>STORIES</li></Link>
                    <Link className='NavItems' to={"/features"}><li className='NavItems'>FEATURES</li></Link>
                    <Link className='NavItems' to={"/pricing"}>
                        <li className='NavItems'>PRICING</li>
                    </Link>
                </ul>
                <button className="NavButton">GET AN INVITE</button>
            </div>
            <Sidebar
                click={click}
                onClick={handleClick}
                onMenu={handleMenu}
                />
        </div>
    </>
    )
}

export default Nav
