import React from "react";
import styles from "./Shop.module.css"
import Card from "./Card/Card.js"
import { useCart } from "../../context/CartContext";

const Shop = () => {
    const { addToCart } = useCart();

    const handleAddToCart = (item) => {
        addToCart(item);
    };

    return (
        <>
        <h1 className={styles.titleShop}>Shop Page</h1>
        <div className={styles.shopcontainer}>
            <Card onAddToCart={handleAddToCart} />
        </div>
        </>
    
    )
}

export default Shop;