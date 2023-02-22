import React from "react";

import homeIcon from "../../img/logo_bonequinho.png"
import styles from "./home.module.css"

export function Home(){
    return (
        <div className={styles.home}>
            <img src={homeIcon} alt="bonequinho" className={styles.icon} />
            <h2>Nenhuma entrega disponivel</h2>
        </div>
    )
}
export default Home