import React from "react";
import styles from "./Card.module.css"

const Card = ({ item, onAddToCart }) => {
    
    return (
        <>
        <div className={styles.card}>
            <div className={styles.itemContainer}>
                <h6>{item.title}</h6>
                <p>${item.price}</p>
                <img className={styles.imgItem} src={item.image} alt={item.title} />
                <label>Quantity: <input className={styles.input} type="number" min="1" defaultValue="1" /></label>
                <button className={styles.btn} onClick={() => onAddToCart(item)}>Add to Cart</button>
            </div>
        </div>
        </>
    
    )
}


export default Card;