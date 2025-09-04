import styles from "./styles.module.css"

import imageLoop from "../../assets/svg/image-loop.svg"

import { Button } from "../Button"

export function Loop() {
    return (
        <div className={styles.container}>
            <img src={imageLoop} alt="Imagem do loop da compra" />
        
            <Button name="Quero saber mais!"/>
        </div>
    )
}