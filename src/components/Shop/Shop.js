import React, { useState, useEffect } from "react";
import styles from "./Shop.module.css"
import Card from "./Card/Card.js"
import { useCart } from "../../context/CartContext";

const Shop = () => {

    const { addToCart } = useCart();
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                const data = await response.json();
                setItems(data);
            } catch (error) {
                console.error("Error fetching items:", error);
            }
        };

        fetchItems();
    }, []);
    
    // eslint-disable-next-line
    const handleAddToCart = (item) => {
        addToCart(item);
    };

    return (
        <>
        <div className={styles.shopcontainer}>
            {items.map((item) => (
                    <Card key={item.id} item={item} onAddToCart={addToCart} />
                ))}
        </div>
        </>
    
    )
}

export default Shop;