import React from "react";
import styles from "./Card.module.css"
import audi from "../assets/audi.jpg"

const Card = ({ onAddToCart }) => {
    const item = { id: 1, name: "Sample Item", price: 15.999 };

    return (
        <>
        <div className={styles.card}>
            <div className={styles.itemContainer}>
                <h2>{item.name}</h2>
                <p>${item.price}</p>
                <img className={styles.imgLuxuriousCar} src={audi} alt="" />
                <label>Quantity: <input></input></label>
                <button onClick={() => onAddToCart(item)}>Add to Cart</button>
            </div>
        </div>
        </>
    
    )
}


export default Card;