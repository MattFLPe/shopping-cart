import React from "react";
import styles from "./Home.module.css"
import car from "./car.jpg"

const Home = () => {
    return (
        <>
        
        <img className={styles.img} src={car} alt="" />
           

        </>
    
    )
}

export default Home;