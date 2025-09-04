import styles from "./styles.module.css"

import check from "../../assets/svg/check.svg"

type Props= {
    name: string
}

export function Point({ name }:Props) {
    return (
        <div className={styles.container}>
            <img src={check} alt="Icone de check" />
            <p>{ name }</p>
        </div>
    )
}