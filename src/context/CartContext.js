import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        setCartItems([...cartItems, item]);
    };

    const cartItemCount = cartItems.length;

    return (
        <CartContext.Provider value={{ cartItems, addToCart, cartItemCount }}>
            {children}
        </CartContext.Provider>
    );
};