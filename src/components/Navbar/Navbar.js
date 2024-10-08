import React from 'react';
import { Link } from 'react-router-dom';
//import styles from "./Navbar.module.css"
import styles from './Navbar.module.css'
import { useCart } from "../../context/CartContext";
import cart from './cart.png'

const Navbar = () => {
    const { cartItemCount } = useCart();

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
                <div className={styles.cart}>
                    <span><img className={styles.img} src={cart} alt=""></img>Cart: {cartItemCount} items</span>
                    <Link to="/" className={styles.button}>Go to Cart</Link>
                </div>
            </ul>
        </nav>
        </>
    )
}

export default Navbar;