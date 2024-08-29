import React from "react"
import styles from "./Home.module.css"
import audi from "./assets/audi.jpg"
import clio from "./assets/clio.jpg"
import benz2 from "./assets/benz2.jpg"
import twocars from "./assets/twocars.jpg"

const Home = () => {
    return (
        <>
        <div className={styles.containerTitles}>
            <h1>GET YOUR FIRST CAR HERE!</h1>
            <h3>Go for a test drive!</h3>
        </div>
        <div className={styles.divHome}>
            <img className={styles.imgHome} src={twocars} alt="" />
        </div>
        <div className={styles.container}>
            <img className={styles.imgCar} src={audi} alt="" />
            <img className={styles.imgCar} src={benz2} alt="" />
            <img className={styles.imgCar} src={clio} alt="" />
        </div>
        <footer className={styles.footer}>Images by: Mike Birdy on Pexels.</footer>
        </>
    
    )
}

export default Home;