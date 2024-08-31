import React from "react"
import styles from "./Home.module.css"
import imgHome from "./assets/imgHome.jpg"
import kit from "./assets/kit.jpg"
import kit2 from "./assets/kit2.jpg"
import kit3 from "./assets/kit3.jpg"

const Home = () => {
    return (
        <>
        <div className={styles.containerTitles}>
            <h2>General Store</h2>
        </div>
        <div className={styles.divHome}>
            <img className={styles.imgHome} src={imgHome} alt="" />
            <h3 className={styles.h3}>Clothing Items & Electronic Devices</h3>
        </div>
        <div className={styles.container}>
            <img className={styles.img} src={kit} alt="" />
            <img className={styles.img} src={kit2} alt="" />
            <img className={styles.img} src={kit3} alt="" />
        </div>
        <footer className={styles.footer}>Images by: FOX1004, No Revisions, Keagan Henman & Lum3n on Pexels.</footer>
        </>
    
    )
}

export default Home;