import React from 'react';
import NavLink from '../nav-link/nav-link';
import './nav-bar.scss';


const NavBar = () => {


return (
    <div class="nav-container">
        <a href="/#home"><img id="logo" src="../../../computer-icon.svg" alt="icon"></img></a>
        <div class="nav-links-container">
            <NavLink link="/#home" linkName="home"></NavLink>
            <NavLink link="/#portfolio" linkName="portfolio"></NavLink>
            <NavLink link="/#tech" linkName="tech"></NavLink>
            <NavLink link="/#pricing" linkName="pricing"></NavLink>
            <NavLink link="/#contact" linkName="contact"></NavLink>
        </div>   
    </div>
)
}

export default NavBar;