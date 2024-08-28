import React from "react"
import styles from "./Home.module.css"
import benz from "./assets/benz.jpg"
import blueaudi from "./assets/blueaudi.jpg"
import whitebenz from "./assets/whitebenz.jpg"
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
            <img className={styles.imgCar} src={benz} alt="" />
            <img className={styles.imgCar} src={whitebenz} alt="" />
            <img className={styles.imgCar} src={blueaudi} alt="" />
        </div>
        <footer className={styles.footer}>Images by: Mike Birdy on Pexels.</footer>
        </>
    
    )
}

export default Home;