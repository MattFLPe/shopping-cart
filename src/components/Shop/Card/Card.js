import React from "react";
import styles from "./Card.module.css"
import luxuriouscar from "../assets/luxuriouscar.jpg"
import luxuriouscar2 from "../assets/luxuriouscar2.jpg"


const Cards = () => {
    return (
        <>
        <div className={styles.card}>
            <img className={styles.imgLuxuriousCar} src={luxuriouscar} alt="" />
            <img className={styles.imgLuxuriousCar} src={luxuriouscar2} alt="" />
        </div>
        </>
    
    )
}

export default Cards;