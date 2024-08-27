import React from 'react';
import { Link } from 'react-router-dom';
//import styles from "./Navbar.module.css"
import StyledNavbar from './styles/Navbar.styled'
const Navbar = () => {
    return (    
        <StyledNavbar>
            <div className='home'>
                <Link to="/Home">Home</Link>
            </div>
            <div className='shop'>
                <Link to="/Shop">Shop</Link>
            </div>
        </StyledNavbar>
    )
}

export default Navbar;