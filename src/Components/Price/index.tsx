import styles from "./styles.module.css"

import { Point } from "../Point"
import { Button } from "../Button"
import payments from "../../assets/svg/image-payments.svg"

export function Price() {
    return (
        <div className={styles.container}>
            <h2>Do Zero à Liberdade Financeira com Carros nos EUA</h2>

            <div className={styles.divPrice}>
                <div className={styles.points}>
                    <Point name="Como participar de leilões de forma segura e legal."/>
                    <Point name="Como comprar carros por valores muito abaixo da tabela."/>
                    <Point name="Estratégias para revender ou usar o carro sem burocracia."/>
                    <Point name="Passo a passo do zero, mesmo que você nunca tenha comprado antes."/>
                </div>

                <div className={styles.price}>
                    <p>12x de US$ 33,00</p>
                    <Button name="COMPRAR AGORA"/>
                </div>

                <div className={styles.payments}>
                    <img src={payments} alt="" />
                </div>
            </div>
        </div>
    )
}