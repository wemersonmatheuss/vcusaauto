import styles from "./styles.module.css"

type Props = {
    image: string
    title: string
    description: string
}

export function About({ image, title, description }:Props) {
    return (
        <div className={styles.container}>
            <img src={ image } alt="" />

            <div className={styles.description}>
                <h2>{ title }</h2>
                <p>{ description }</p>
            </div>
        </div>
    )
}