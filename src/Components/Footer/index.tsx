import styles from "./styles.module.css"

import logo from "../../assets/svg/logo-vcusa.svg"
import arrow from "../../assets/svg/image-arrow-top.svg"

export function Footer() {
    return (
        <footer className={styles.container}>
            <div className={styles.top}>
                <img src={ logo } alt="Imagem da logo da VCusaAUTO" />

                <a href="#nav"> 
                    <img src={ arrow } alt="Icone de flecha para cima" />
                    <span>Voltar ao topo</span>
                </a>
            </div>

            <div className={styles.line}></div>

            <div className={styles.bottom}>
                <p>2025 © VC USA Auto Service.</p>
                <a href="https://www.instagram.com/wemersonmth/" target="_blank" rel="noopener">Desenvolvido e mantido por Wemerson Dev.</a>
            </div>
        </footer>
    )
}