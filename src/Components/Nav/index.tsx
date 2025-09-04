import styles from "./styles.module.css"

import logo from "../../assets/svg/logo-vcusa.svg"

import { Button } from "../Button"

export function Nav() {
    return (
        <nav className={styles.container}>
            <img src={logo} alt="Logo da VCusaAuto" />

            <Button name="Fale conosco!"/>
        </nav>
    )
}