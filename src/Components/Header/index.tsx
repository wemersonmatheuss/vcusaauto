import styles from "./styles.module.css"

import { Button } from "../Button"

export function Header() {
    return (
        <div className={styles.container}>
            <h1> Do Zero à Liberdade Financeira com Carros nos EUA</h1>
            <p>Aprenda a comprar carros em leilões americanos com preços muito abaixo do mercado e conquiste independência financeira, mesmo sem ter experiência.</p>

            <Button name="QUERO MINHA VAGA!"/>
        </div>
    )
}