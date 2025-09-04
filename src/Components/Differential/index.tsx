import styles from "./styles.module.css"

import { Point } from "../Point"
import { Button } from "../Button"

export function Differential() {
    return (
        <section className={styles.container}>
            <div className={styles.differentials}>
                <div className={styles.title}>
                    <h2>Entenda como podemos agregar à sua jornada nos EUA</h2>
                </div>

                <div className={styles.allPoints}>
                    <Point name="Aprender como comprar carros de leilão nos EUA de forma segura e estratégica"/>
                    <Point name="Economizar muito dinheiro na compra do seu carro"/>
                    <Point name="Ter acesso a uma grande variedade de veículos com preços abaixo do mercado"/>
                    <Point name="Ações de marketing e metrificação de resultados"/>
                    <Point name="Conhecer todo o passo a passo: pesquisa, lances, negociação e documentação"/>
                    <Point name="E muito mais"/>
                </div>
            </div>

            <div className={styles.cta}>
                <h3>Não perca essa oportunidade única.</h3>

                <p>Aproveite essa oportunidade e entre logo, não sabemos até quando irá ficar disponível.</p>

                <Button name="QUERO ENTRAR"/>
            </div>

        </section>
    )
}