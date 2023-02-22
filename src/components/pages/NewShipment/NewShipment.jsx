import React from "react";
import styles from  "./newShipment.module.css"

function Shipmentnew(){
    return (
        <div className={styles.shipmentContainer}>
            <div className={styles.shipmentRegisterContainer}>
            <h1>Cadastro de Nova Entrega</h1>
                <form action="">
                    <div className={styles.shipmentItem}>
                        <label htmlFor="">ID</label>
                        <input type="text" />
                    </div>
                    <div className={styles.shipmentItem}>
                        <label htmlFor="">Item</label>
                        <input type="text" />
                    </div>
                    <div className={styles.shipmentItem}>
                        <label htmlFor="">Quantidade</label>
                        <input type="text" />
                    </div>
                    <div className={styles.shipmentItem}>
                        <label htmlFor="">Valor</label>
                        <input type="text" />
                    </div>
                </form>
                <button>Cadastrar</button>
            </div>
        </div>
    )
}

export default Shipmentnew