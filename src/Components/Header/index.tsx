import styles from "./styles.module.css"

import { Button } from "../Button"

export function Header() {
    return (
        <div className={styles.container}>
            <h1> Do Zero à Liberdade Financeira com Carros nos EUA</h1>
            <p>Aprenda a comprar carros em leilões americanos por preços muito abaixo do mercado e conquiste independência financeira, mesmo sem documentação completa.</p>

            <Button name="QUERO MINHA VAGA!"/>
        </div>
    )
}