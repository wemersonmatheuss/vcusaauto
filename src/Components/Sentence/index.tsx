import styles from "./styles.module.css"

import x from "../../assets/svg/x.svg"

type Props = {
    sentence: string 
}

export function Sentence({ sentence }:Props) {
    return (
        <div className={styles.container}>
            <img src={x} alt="" />
            <p>{ sentence }</p>
        </div>
    )
}