import styles from "./styles.module.css"

type Props = {
    sentence: string 
}

export function Sentence({ sentence }:Props) {
    return (
        <div className={styles.container}>
            <p>{ sentence }</p>
        </div>
    )
}