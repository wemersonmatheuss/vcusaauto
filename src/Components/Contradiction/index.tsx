import styles from "./styles.module.css"

import { Sentence } from "../Sentence"

export function Contradiction() {
    return (
        <section className={styles.container}>
            <div className={styles.title}>
                <h2>Você acabou de chegar nos EUA ou já mora aqui há algum tempo e:</h2>
            </div>

            <div className={styles.sentences}>
                <Sentence sentence="Ainda não conseguiu crédito."/>
                <Sentence sentence="Precisa de um carro confiável, mas os preços são altos."/>
                <Sentence sentence="Quer aumentar sua renda, mas não sabe por onde começar."/>
            </div>

            <div className={styles.cta}>
                <h3>A boa notícia é que existe um caminho: <span>os leilões de carros nos EUA.</span> E eu vou te mostrar como aproveitar essa oportunidade mesmo sem experiência</h3>
            </div>
        </section>
    )
}