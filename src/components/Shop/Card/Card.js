import React from "react";
import styles from "./Card.module.css"
import imgGuitar from "../assets/guitar.jpg"

const Card = ({ item, onAddToCart }) => {
    
    return (
        <>
        <div className={styles.card}>
            <div className={styles.itemContainer}>
                <h1>{item.name}</h1>
                <p>${item.price}</p>
                <img className={styles.imgGuitar} src={item.image} alt={item.title} />
                <label>Quantity: <input className={styles.input} type="number" min="1" defaultValue="1" /></label>
                <button onClick={() => onAddToCart(item)}>Add to Cart</button>
            </div>
        </div>
        </>
    
    )
}


export default Card;