import React from "react";
import styles from "./Shop.module.css"
import Card from "./Card/Card.js"

const Shop = () => {
    return (
        <>
        <h1 className={styles.titleShop}>Shop Page</h1>
        <div className={styles.shopcontainer}>
            <Card />
        </div>
        </>
    
    )
}

export default Shop;