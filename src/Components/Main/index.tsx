import styles from "./styles.module.css"

import { Nav } from "../Nav"
import { Header } from "../Header"

export function Main() {
    return (
        <main className={styles.container}>
            <Nav/>
            <Header/>
        </main>
    )
}