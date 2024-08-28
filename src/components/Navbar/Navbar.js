import React from 'react';
import { Link } from 'react-router-dom';
//import styles from "./Navbar.module.css"
import styles from './Navbar.module.css'
const Navbar = () => {
    return (    
        <>
        <nav className={styles.nav}>     
            <ul className={styles.ul}>
                <li className={styles.li}>
                    <Link to="/" className={styles.Link}>Home</Link>
                </li>
                <li className={styles.li}>
                    <Link to="/Shop" className={styles.Link}>Shop</Link>
                </li>
            </ul>
        </nav>
        </>
    )
}

export default Navbar;